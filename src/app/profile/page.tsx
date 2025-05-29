"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  User, 
  ShoppingBag, 
  Heart, 
  ShoppingCart, 
  Settings, 
  Package,
  MapPin,
  Phone,
  Mail,
  Edit,
  Eye,
  Calendar,
  Save,
  Trash2
} from "lucide-react";
import { useCart, CartItem } from "@/context/CartContext";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useWishlist } from "@/lib/useWishlist";

// Types for local storage data
interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: {
    productId: number;
    name: string;
    price: number;
    quantity: number;
  }[];
}

interface UserProfile {
  phone: string;
  address: string;
  notifications: {
    email: boolean;
    sms: boolean;
    marketing: boolean;
  };
}

export default function ProfilePage() {  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);
  const { state } = useCart();
  const { user } = useUser();
  const { wishlist, removeFromWishlist, wishlistCount } = useWishlist();

  // Get tab from URL params if available
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, []);
  // State for user data
  const [orders, setOrders] = useState<Order[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    phone: "",
    address: "",
    notifications: {
      email: true,
      sms: false,
      marketing: false,
    },
  });

  // Local storage keys
  const getStorageKey = (key: string) => `petty_${user?.id}_${key}`;
  // Load data from localStorage on component mount
  useEffect(() => {
    if (user?.id) {
      // Load orders
      const savedOrders = localStorage.getItem(getStorageKey("orders"));
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      }

      // Load user profile
      const savedProfile = localStorage.getItem(getStorageKey("profile"));
      if (savedProfile) {
        setUserProfile(JSON.parse(savedProfile));
      }
    }
  }, [user?.id, getStorageKey]);  // Save data to localStorage
  const saveToStorage = (key: string, data: unknown) => {
    if (user?.id) {
      localStorage.setItem(getStorageKey(key), JSON.stringify(data));
    }
  };
  // Create a new order (simulate order completion)
  const createOrder = (cartItems: CartItem[]) => {
    const newOrder: Order = {
      id: `ORD-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      status: "Processing",
      total: parseFloat(state.totalPrice.toFixed(2)),
      items: cartItems.map(item => ({
        productId: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
      })),
    };
    const updatedOrders = [newOrder, ...orders];
    setOrders(updatedOrders);
    saveToStorage("orders", updatedOrders);
  };

  // Update user profile
  const updateProfile = (newProfile: UserProfile) => {
    setUserProfile(newProfile);
    saveToStorage("profile", newProfile);
    setIsEditing(false);
  };

  // Calculate member since date
  const getMemberSince = () => {
    if (user?.createdAt) {
      return new Date(user.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
      });
    }
    return "Recently";
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: User },
    { id: "orders", label: "Orders", icon: Package },
    { id: "watchlist", label: "Watchlist", icon: Heart },
    { id: "cart", label: "Cart", icon: ShoppingCart },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "bg-green-100 text-green-800";
      case "Processing": return "bg-yellow-100 text-yellow-800";
      case "Shipped": return "bg-blue-100 text-blue-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const OverviewTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{user?.fullName || "Pet Lover"}</h3>
              <p className="text-gray-600">{user?.primaryEmailAddress?.emailAddress || "example@email.com"}</p>
              <Badge className="mt-1">Premium Member</Badge>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <span className="text-sm">{user?.primaryEmailAddress?.emailAddress || "example@email.com"}</span>
            </div>            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-500" />
              <span className="text-sm">{userProfile.phone || "Not provided"}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-sm">{userProfile.address || "Not provided"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm">Member since {getMemberSince()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <ShoppingBag className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-lg">{orders.length}</h3>
            <p className="text-gray-600">Total Orders</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <h3 className="font-semibold text-lg">{wishlistCount}</h3>
            <p className="text-gray-600">Wishlist Items</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <ShoppingCart className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold text-lg">{state.totalItems}</h3>
            <p className="text-gray-600">Cart Items</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const OrdersTab = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="w-5 h-5" />
          Order History
        </CardTitle>
      </CardHeader>      <CardContent>
        {orders.length === 0 ? (
          <div className="text-center py-8">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">No orders yet</p>
            <Link href="/products">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{order.id}</h3>
                    <p className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <Badge className={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">{order.items.length} items</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">${order.total.toFixed(2)}</span>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
  const WatchlistTab = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="w-5 h-5" />
          Wishlist ({wishlistCount} items)
        </CardTitle>
      </CardHeader>
      <CardContent>
        {wishlist.length === 0 ? (
          <div className="text-center py-8">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">No items in your wishlist</p>
            <Link href="/products">
              <Button>Browse Products</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {wishlist.map((item) => (
              <Card key={item.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-purple-600">₹{item.price}</span>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <Link href={`/products/${item.id}`}>
                      <Button size="sm" className="w-full">
                        <Eye className="w-4 h-4 mr-1" />
                        View Product
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );

  const CartTab = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Shopping Cart ({state.totalItems} items)
        </CardTitle>
      </CardHeader>
      <CardContent>
        {state.items.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <Link href="/products">
              <Button>Continue Shopping</Button>
            </Link>
          </div>        ) : (
          <div className="space-y-4">
            {state.items.map((item) => (
              <div key={item.product.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{item.product.name}</h3>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total: ${state.totalPrice.toFixed(2)}</span>
                <Link href="/cart">
                  <Button>View Full Cart</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
  const SettingsTab = () => {
    const [editData, setEditData] = useState<UserProfile>(userProfile);

    const handleSave = () => {
      updateProfile(editData);
    };

    const handleCancel = () => {
      setEditData(userProfile);
      setIsEditing(false);
    };

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Account Settings
              </CardTitle>
              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)} variant="outline">
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button onClick={handleSave} size="sm">
                    <Save className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                  <Button onClick={handleCancel} variant="outline" size="sm">
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <div className="flex items-center gap-2">
                  <span className="flex-1 p-2 bg-gray-50 rounded">{user?.fullName || "Not provided"}</span>
                  <span className="text-xs text-gray-500">Managed by Clerk</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <div className="flex items-center gap-2">
                  <span className="flex-1 p-2 bg-gray-50 rounded">{user?.primaryEmailAddress?.emailAddress || "Not provided"}</span>
                  <span className="text-xs text-gray-500">Managed by Clerk</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                {isEditing ? (
                  <Input
                    value={editData.phone}
                    onChange={(e) => setEditData({...editData, phone: e.target.value})}
                    placeholder="Enter phone number"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="flex-1 p-2 bg-gray-50 rounded">{userProfile.phone || "Not provided"}</span>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                {isEditing ? (
                  <Textarea
                    value={editData.address}
                    onChange={(e) => setEditData({...editData, address: e.target.value})}
                    placeholder="Enter your address"
                    rows={2}
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="flex-1 p-2 bg-gray-50 rounded">{userProfile.address || "Not provided"}</span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <Button 
                variant={userProfile.notifications.email ? "default" : "outline"}
                onClick={() => {
                  const newProfile = {
                    ...userProfile,
                    notifications: {
                      ...userProfile.notifications,
                      email: !userProfile.notifications.email
                    }
                  };
                  updateProfile(newProfile);
                }}
              >
                {userProfile.notifications.email ? "Enabled" : "Disabled"}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <span>SMS Notifications</span>
              <Button 
                variant={userProfile.notifications.sms ? "default" : "outline"}
                onClick={() => {
                  const newProfile = {
                    ...userProfile,
                    notifications: {
                      ...userProfile.notifications,
                      sms: !userProfile.notifications.sms
                    }
                  };
                  updateProfile(newProfile);
                }}
              >
                {userProfile.notifications.sms ? "Enabled" : "Disabled"}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <span>Marketing Emails</span>
              <Button 
                variant={userProfile.notifications.marketing ? "default" : "outline"}
                onClick={() => {
                  const newProfile = {
                    ...userProfile,
                    notifications: {
                      ...userProfile.notifications,
                      marketing: !userProfile.notifications.marketing
                    }
                  };
                  updateProfile(newProfile);
                }}
              >
                {userProfile.notifications.marketing ? "Enabled" : "Disabled"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {state.items.length > 0 && (
              <Button 
                onClick={() => createOrder(state.items)}
                className="w-full"
              >
                Create Test Order (${state.totalPrice.toFixed(2)})
              </Button>
            )}            <Button 
              variant="outline" 
              onClick={() => {
                if (confirm("Are you sure you want to clear all data?")) {
                  setOrders([]);
                  setUserProfile({
                    phone: "",
                    address: "",
                    notifications: { email: true, sms: false, marketing: false }
                  });
                  localStorage.removeItem(getStorageKey("orders"));
                  localStorage.removeItem(getStorageKey("profile"));
                }
              }}
              className="w-full"
            >
              Clear All Data
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SignedOut>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Profile Access Required</h1>
          <p className="text-xl text-gray-600 mb-8">Please sign in to view your profile</p>
          <Link href="/">
            <Button size="lg">Return to Home</Button>
          </Link>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
                <p className="text-gray-600">Manage your account and preferences</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64">
              <Card>
                <CardContent className="p-4">
                  <nav className="space-y-2">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                            activeTab === tab.id
                              ? "bg-purple-100 text-purple-700"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          {tab.label}
                          {tab.id === "cart" && state.totalItems > 0 && (
                            <Badge className="ml-auto">{state.totalItems}</Badge>
                          )}
                        </button>
                      );
                    })}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {activeTab === "overview" && <OverviewTab />}
              {activeTab === "orders" && <OrdersTab />}
              {activeTab === "watchlist" && <WatchlistTab />}
              {activeTab === "cart" && <CartTab />}
              {activeTab === "settings" && <SettingsTab />}
            </div>
          </div>
        </div>
      </SignedIn>
    </div>
  );
}
