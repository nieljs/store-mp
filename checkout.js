async function checkout_product() {
    let url_params = new URLSearchParams(window.location.search)
    let product_id = url_params.get("id")
    let data = await fetch("products.json")
    let products = await data.json()
    let product = products.filter(({ id }) => id == product_id)[0]

    console.log("Products: ", products)

    document.querySelector("#cart").innerHTML = `<div>${product.name}</div><br><br><button>Comprar</button>`
}

checkout_product()