// JavaScript for Filter and Product Logic

// Sample product data (can be fetched from an API or database)
// const products = [
//     {id: 1, name: 'Gradient Graphic T-shirt', price: 145, category: 'T-shirts', size: 'L', color: 'white'},
//     {id: 2, name: 'Polo with Tipping Details', price: 180, category: 'Shirts', size: 'M', color: 'red'},
//     {id: 3, name: 'Black Striped T-shirt', price: 120, category: 'T-shirts', size: 'XL', color: 'black'},
//     {id: 4, name: 'Skinny Fit Jeans', price: 240, category: 'Jeans', size: 'L', color: 'blue'},
//     {id: 5, name: 'Checkered Shirt', price: 180, category: 'Shirts', size: 'M', color: 'pink'},
//     {id: 6, name: 'Vertical Striped Shirt', price: 212, category: 'Shirts', size: 'L', color: 'green'},
//     // Add more products here...
// ];

// Function to render products on the page
function renderProducts(productList) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ''; // Clear previous products

    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="placeholder.jpg" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
        `;
        productGrid.appendChild(productCard);
    });
}

// Initial rendering of products
renderProducts(products);

// Filter Logic
document.querySelector('.apply-button').addEventListener('click', function() {
    const selectedCategory = [...document.querySelectorAll('.filter-section ul input:checked')]
                            .map(el => el.parentElement.innerText.trim());
    const selectedSize = document.querySelector('.size-options .selected').innerText;
    const selectedPrice = document.querySelector('input[type="range"]').value;
    
    // Filter the products
    const filteredProducts = products.filter(product => {
        return (selectedCategory.length === 0 || selectedCategory.includes(product.category))
            && product.size === selectedSize
            && product.price <= selectedPrice;
    });

    // Re-render filtered products
    renderProducts(filteredProducts);
});
// Sample product data (can be fetched from an API or database)
const products = [
    {
        id: 1,
        name: 'Gradient Graphic T-shirt',
        price: 145,
        category: 'T-shirts',
        size: 'L',
        color: 'white',
        image: 'https://m.media-amazon.com/images/I/71iGPCE0igL.jpg'
    },
    {
        id: 2,
        name: 'Polo with Tipping Details',
        price: 180,
        category: 'Shirts',
        size: 'M',
        color: 'red',
        image: 'https://www.wiggles.in/cdn/shop/products/ED10Kg_Puppy1.png?v=1706864528&width=1946.jpg'
    },
    {
        id: 3,
        name: 'Black Striped T-shirt',
        price: 120,
        category: 'T-shirts',
        size: 'XL',
        color: 'black',
        image: 'https://images-cdn.ubuy.co.in/664b51006b806458d90464a0-meow-mix-original-choice-dry-cat-food.jpg'
    },
    {
        id: 4,
        name: 'Skinny Fit Jeans',
        price: 240,
        category: 'Jeans',
        size: 'L',
        color: 'blue',
        image: 'https://www.temptationstreats.com/sites/g/files/fnmzdf3061/files/migrate-product-files/images/loyhrztxrkvwfzbl6acf.jpg'
    },
    {
        id: 5,
        name: 'Checkered Shirt',
        price: 180,
        category: 'Shirts',
        size: 'M',
        color: 'pink',
        image: 'https://www.bigbasket.com/media/uploads/p/l/40214697_1-optimum-tropical-fish-food-mini-pellet.jpg'
    },
    {
        id: 6,
        name: 'Vertical Striped Shirt',
        price: 212,
        category: 'Shirts',
        size: 'L',
        color: 'green',
        image: 'https://www.jiomart.com/images/product/original/rvdkpqjrpb/tunai-hamster-food-with-all-essential-nutrients-premium-food-for-hamster-adult-and-small-hamster-500g-plus-20-extra-food-pellets-product-images-orvdkpqjrpb-p599715852-0-202303221701.jpg'
    },
];

// Function to render products on the page
function renderProducts(productList) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ''; // Clear previous products

    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
        `;
        productGrid.appendChild(productCard);
    });
}

// Initial rendering of products
renderProducts(products);
