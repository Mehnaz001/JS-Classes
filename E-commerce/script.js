const API_URL = 'https://dummyjson.com/products'

const productContainer = document.getElementById('product-container')

let allProducts = [];

async function fetchProducts() {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        console.log(data)
        allProducts = data.products;
        displayProducts(allProducts)
    }catch(err) {
        console.log(err)
    }
}
fetchProducts()

function displayProducts(products) {
    if(products.length===0) {
        productContainer.innerHTML = `
            <p> No products found </p>
        `
    }

    productContainer.innerHTML = products.map((product)=>`
        <article class="product-card">
            <div class="product-image"> 
                <img src="${product.thumbnail}" >
            </div>
            <div class="product-info">
                <p>${product.category}</p>
                <h3>${product.title}</h3>
                <p> ${product.rating}</p>
                <button> Add to cart</button>
            </div>
        </article>
    `)
}