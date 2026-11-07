const API_URL = 'https://dummyjson.com/products'
const productContainer = document.getElementById('product-container')
const sortSelect = document.getElementById('sortSelect')
const cartCount = document.getElementById('cartCount')
const cartItems = document.getElementById('cartItems')
const cartBtn = document.getElementById('cartBtn')
const cartOverlay = document.querySelector('.cart-overlay')
const closeCart = document.getElementById('closeCart')
const cartTotal = document.getElementById('cartTotal')
const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')

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
                <button class='details-btn' data-id='${product.id}'>View details </button>
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

    if(event.target.classList.contains('details-btn')) {
        const detailBtn = event.target
        const productId = detailBtn.dataset.id
        window.location.href = `product.html?id=${productId}`
    }
})

function addToCart(productId) {
    const product = allProducts.find(item => item.id === productId)

    if(!product) 
        return;

    console.log(product)
    cart.push({
        id:product.id,
        title:product.title,
        price:product.price,
        thumbnail:product.images[0],
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
    const totalPrice = cart.reduce((total,item) => total+item.price* item.quantity,0)
    cartTotal.textContent = `$ ${totalPrice}`

    console.log(cart)
    cartItems.innerHTML = cart.map(item => `
        <div class='cart-item'>
            <img src='${item.thumbnail}' alt='${item.title}'>
            <div class='cart-item-details'> 
                <h4> ${item.title} </h4>
                <p> $${item.price} </p>
                <div class='quantity-controls'>

                    <button data-id='${item.id} 'class='decrease'> - </button>

                    <span> ${item.quantity} </span>

                    <button data-id='${item.id}' class='increase'> + </button>

                    <button data-id='${item.id}'class='remove'> Remove </button>
                </div>
            </div>
        </div>

    `).join("")
}

//image
//item-details - title , price, button - + , button -, button - remove

//open cart
cartBtn.addEventListener('click', function () {
    cartOverlay.classList.add('open')
})

//close cart
closeCart.addEventListener('click', function(){
    cartOverlay.classList.remove('open')
})

//cartItems pe event listner -> even.triggered nikalo, product id , aur kya action perform krna hai increase, or decrease or remove
// separate function for quantity change - which check the action and update the quantity

function searchProducts() {
    const query = searchInput.value.trim().toLowerCase();

    const filteredProducts = allProducts.filter(product => product.title.toLowerCase().includes(query))

    const categoryProducts = allProducts.filter(product => product.category.toLowerCase().includes(query))

    const allSearchedProducts = [...filteredProducts,...categoryProducts]

    displayProducts(allSearchedProducts)
}

searchBtn.addEventListener('click', searchProducts )