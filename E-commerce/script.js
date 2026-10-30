const API_URL = 'https://dummyjson.com/products'
const productContainer = document.getElementById('product-container')
const sortSelect = document.getElementById('sortSelect')
const cartCount = document.getElementById('cartCount')
const cartItems = document.getElementById('cartItems')

let allProducts = [];
let cart = []

async function fetchProducts() {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        console.log(data)
        allProducts = data.products;
        displayProducts(allProducts)
    } catch (err) {
        console.log(err)
    }
}
fetchProducts()

function displayProducts(products) {
    if (products.length === 0) {
        productContainer.innerHTML = `
            <p> No products found </p>
        `
    }

    products.map((product) => {
        console.log(product)
    })

    productContainer.innerHTML = products.map((product) => `
        <article class="product-card">
            <div class="product-image"> 
                <img src="${product.thumbnail}" >
            </div>
            <div class="product-info">
                <p class="category">${product.category}</p>
                <h3>${product.title}</h3>
                <p class="rating"> ⭐${product.rating}</p>
                <p class="price"> $${product.price} </p>
                <button class="add-btn" data-id="${product.id}"> Add to cart</button>
            </div>
        </article>
    `).join("")
}

function applySorting() {
    const sortValue = sortSelect.value;
    let filteredProducts = [...allProducts];
    if (sortValue === "low") {
        filteredProducts.sort((a, b) => a.price - b.price)
    } else if (sortValue === "high") {
        filteredProducts.sort((a, b) => b.price - a.price)
    } else if (sortValue === "rating") {
        filteredProducts.sort((a, b) => b.rating - a.rating)
    }

    displayProducts(filteredProducts)
}

sortSelect.addEventListener('change', applySorting)

productContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('add-btn')) {
        console.log(event.target)
        const button = event.target
        console.log(button.dataset.id)
        addToCart(Number(button.dataset.id))
    }
})

function addToCart(productId) {
    const product = allProducts.find(item => item.id === productId)

    if(!product) 
        return;

    cart.push({
        id:product.id,
        title:product.title,
        price:product.price,
        thumbnail:product.thumbnail,
        quantity:1
    })

    saveCart();
    updateCart()
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart))
}

function updateCart() {
    cartCount.textContent = cart.length
    // cartItems.innerHTML = cart.map(item => `
    //     <div class='cart-item'>
    // `)
}

//image
//item-details - title , price, button - + , button -, button - remove