// Script to collect product data and store it in localStorage - https://demoshop.synerise.com/

// Function to get selected product details
const getProductDetails = () => {
    const mainPhotoElement = document.querySelector(".gallery__image")
    const nameElement = document.querySelector(".base")
    const priceElement = document.querySelector(".price")

    if(!mainPhotoElement || !nameElement || !priceElement) {
        console.error('One or more elements not found')
        return null
    }

    const mainPhoto = mainPhotoElement.src
    const name = nameElement.textContent
    const price = priceElement.textContent
    const url = window.location.href

    return { mainPhoto, url, name, price }
}
// localStorage update function via unique product
const updateLocalStorage = (product) => {

    if(!product) {
        console.error('Product not found')
        return
    }

    if (typeof localStorage === 'undefined')
        return

    const existingProducts = JSON.parse(localStorage.getItem('productList')) || []
    const uniqueProductsSet = new Set(existingProducts.map(JSON.stringify))
    uniqueProductsSet.add(JSON.stringify(product))
    const updatedProductsArray = Array.from(uniqueProductsSet, JSON.parse)
    localStorage.setItem('productList', JSON.stringify(updatedProductsArray))
}


const product = getProductDetails()
updateLocalStorage(product)

