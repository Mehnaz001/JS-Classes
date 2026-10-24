const API_URL = 'https://dummyjson.com/products'
const productContainer = document.getElementById('product-container')
const sortSelect = document.getElementById('sortSelect')

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
    if(sortValue === "low") {
        filteredProducts.sort((a,b)=> a.price-b.price)
    } else if (sortValue === "high") {
        filteredProducts.sort((a,b)=> b.price-a.price)
    } else if(sortValue === "rating") {
        filteredProducts.sort((a,b)=> b.rating- a.rating)
    }

    displayProducts(filteredProducts)
}

sortSelect.addEventListener('change',applySorting)

productContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('add-btn')) {
        console.log(event.target)
        const button = event.target
        console.log(button.dataset.id) 
    }
})