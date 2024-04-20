async function list_cart() {
    let data = await fetch("products.json")
    let products = await data.json()
    let cart = JSON.parse(localStorage.getItem("cart") || "[]")
    let cart_products = products.filter(({ id }) => cart.includes(id))

    console.log("Products: ", products)
    console.log("Cart: ", cart)
    console.log("Cart Products: ", cart_products)

    cart_products.forEach(product =>
        document.querySelector("#cart").innerHTML = `<div><b>Comprar:</b> ${product.name}</div>`)
}

list_cart()