async function list_cart() {
    let data = await fetch("products.json")
    let products = await data.json()
    let cart = JSON.parse(localStorage.getItem("cart") || "[]")
    let cart_products = products.filter(({ id }) => cart.includes(id))

    console.log("Products: ", products)
    console.log("Cart: ", cart)
    console.log("Cart Products: ", cart_products)

    let cart_list = ""

    cart_products.forEach(product =>
        cart_list += `<div>${product.name}</div>`)

    document.querySelector("#cart").innerHTML = cart_list + "<br><br><button>Comprar</button>"
}

list_cart()