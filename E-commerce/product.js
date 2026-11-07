const params = new URLSearchParams(window.location.search)
console.log(params)
const productId = params.get('id')
console.log(productId)

const productDetails = document.getElementById('productDetails')

async function fetchProductDetails() {
    try{
        const response = await fetch(`https://dummyjson.com/products/${productId}`)
        const product = await response.json()
        console.log(product)
        displayProduct(product)
    }catch(err) {
        console.log(err)
    }
}

fetchProductDetails()

function displayProduct(product) {
    const images = product.images?.length ? product.images : [product.thumbnail];
    console.log(images)
    const hasStock = product.stock>0;

    productDetails.innerHTML = `
        <div class='details-layout'>
            <div class='details-gallery'>
                <div class='main-image'>
                    <img id='mainProductImage' src='${images[0]}' alt='${product.title}' />
                </div>

                <div class='thumbnail-list'>
                    ${images.map((image,index)=> `
                        <img src='${image}' class='${index===0? 'active': ""}/>
                `)}.join(")
                </div>

                <div class='details-info'>
                    <p> ${product.category} </p>
                    <h1>${product.title} </h1>
                    <p>${product.rating}</p>
                    <p>${product.price}</p>
                    <p>${product.description}</p>

                    <div class='product-meta'>
                        <p > <strong>Brand:</strong> ${product.brand}</p>
                        <p>${product.stock}</p>
                    </div>
                </div>
            </div>
        </div>
    `
}