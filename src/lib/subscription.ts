export interface SubscriptionPlan {
  id: string;
  name: string;
  frequency: "weekly" | "bi-weekly" | "monthly" | "bi-monthly";
  frequencyLabel: string;
  discount: number;
  description: string;
  benefits: string[];
  minOrderValue: number;
  freeShipping: boolean;
  cancellationPolicy: string;
  popular?: boolean;
}

export interface Subscription {
  id: string;
  userId: string;
  productId: number;
  planId: string;
  quantity: number;
  selectedQuantity: string;
  selectedAge: string;
  nextDelivery: Date;
  isActive: boolean;
  totalDeliveries: number;
  createdAt: Date;
  lastDelivery?: Date;
  pausedUntil?: Date;
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "weekly",
    name: "Weekly Fresh",
    frequency: "weekly",
    frequencyLabel: "Every 7 days",
    discount: 5,
    description: "Perfect for high-consumption pets or multiple pets",
    benefits: [
      "5% off every order",
      "Never run out of food",
      "Free shipping",
      "Flexible scheduling",
    ],
    minOrderValue: 500,
    freeShipping: true,
    cancellationPolicy: "Cancel anytime, no commitments",
  },
  {
    id: "bi-weekly",
    name: "Bi-Weekly Smart",
    frequency: "bi-weekly",
    frequencyLabel: "Every 14 days",
    discount: 10,
    description: "Most popular choice for medium-sized pets",
    benefits: [
      "10% off every order",
      "Optimized delivery timing",
      "Free shipping",
      "Smart consumption tracking",
    ],
    minOrderValue: 400,
    freeShipping: true,
    cancellationPolicy: "Cancel anytime, no commitments",
    popular: true,
  },
  {
    id: "monthly",
    name: "Monthly Regular",
    frequency: "monthly",
    frequencyLabel: "Every 30 days",
    discount: 15,
    description: "Great for single pets with regular feeding schedules",
    benefits: [
      "15% off every order",
      "Best value for money",
      "Free shipping",
      "Predictable delivery schedule",
      "Bulk order discounts",
    ],
    minOrderValue: 300,
    freeShipping: true,
    cancellationPolicy: "Cancel anytime, no commitments",
  },
  {
    id: "bi-monthly",
    name: "Bi-Monthly Saver",
    frequency: "bi-monthly",
    frequencyLabel: "Every 60 days",
    discount: 20,
    description: "Maximum savings for bulk feeders",
    benefits: [
      "20% off every order",
      "Maximum discount",
      "Free shipping",
      "Bulk storage friendly",
      "Priority customer support",
    ],
    minOrderValue: 200,
    freeShipping: true,
    cancellationPolicy: "Cancel anytime, no commitments",
  },
];

export const getSubscriptionPlanById = (
  id: string
): SubscriptionPlan | undefined => {
  return subscriptionPlans.find((plan) => plan.id === id);
};

export const getPopularSubscriptionPlan = (): SubscriptionPlan | undefined => {
  return subscriptionPlans.find((plan) => plan.popular);
};

export const calculateSubscriptionPrice = (
  originalPrice: number,
  planId: string
): number => {
  const plan = getSubscriptionPlanById(planId);
  if (!plan) return originalPrice;

  return originalPrice * (1 - plan.discount / 100);
};

export const calculateNextDeliveryDate = (
  frequency: string,
  lastDelivery?: Date
): Date => {
  const baseDate = lastDelivery || new Date();
  const nextDate = new Date(baseDate);

  switch (frequency) {
    case "weekly":
      nextDate.setDate(nextDate.getDate() + 7);
      break;
    case "bi-weekly":
      nextDate.setDate(nextDate.getDate() + 14);
      break;
    case "monthly":
      nextDate.setMonth(nextDate.getMonth() + 1);
      break;
    case "bi-monthly":
      nextDate.setMonth(nextDate.getMonth() + 2);
      break;
    default:
      nextDate.setMonth(nextDate.getMonth() + 1);
  }

  return nextDate;
};

export const getSubscriptionBenefits = () => {
  return [
    {
      title: "Never Run Out",
      description: "Automatic delivery ensures your pet never goes hungry",
      icon: "🔄",
    },
    {
      title: "Save Money",
      description: "Up to 20% off on every subscription order",
      icon: "💰",
    },
    {
      title: "Free Shipping",
      description: "All subscription orders include free delivery",
      icon: "🚚",
    },
    {
      title: "Flexible Control",
      description: "Pause, modify, or cancel anytime with one click",
      icon: "⚙️",
    },
    {
      title: "Smart Tracking",
      description: "AI-powered consumption tracking for optimal timing",
      icon: "🧠",
    },
    {
      title: "Priority Support",
      description: "Dedicated customer support for subscribers",
      icon: "🎯",
    },
  ];
};

// Mock subscription data for demo
export const mockUserSubscriptions: Subscription[] = [
  {
    id: "sub_001",
    userId: "user_123",
    productId: 1,
    planId: "monthly",
    quantity: 2,
    selectedQuantity: "1kg",
    selectedAge: "Adult",
    nextDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    isActive: true,
    totalDeliveries: 3,
    createdAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), // 90 days ago
    lastDelivery: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
  },
];

export const getUserSubscriptions = (userId: string): Subscription[] => {
  return mockUserSubscriptions.filter((sub) => sub.userId === userId);
};

export const createSubscription = (
  subscription: Omit<Subscription, "id" | "createdAt" | "totalDeliveries">
): Subscription => {
  const newSubscription: Subscription = {
    ...subscription,
    id: `sub_${Date.now()}`,
    createdAt: new Date(),
    totalDeliveries: 0,
  };

  mockUserSubscriptions.push(newSubscription);
  return newSubscription;
};

export const pauseSubscription = (
  subscriptionId: string,
  pauseUntil: Date
): boolean => {
  const subscription = mockUserSubscriptions.find(
    (sub) => sub.id === subscriptionId
  );
  if (subscription) {
    subscription.pausedUntil = pauseUntil;
    return true;
  }
  return false;
};

export const cancelSubscription = (subscriptionId: string): boolean => {
  const index = mockUserSubscriptions.findIndex(
    (sub) => sub.id === subscriptionId
  );
  if (index !== -1) {
    mockUserSubscriptions[index].isActive = false;
    return true;
  }
  return false;
};
