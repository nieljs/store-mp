document.addEventListener("DOMContentLoaded", () => {
    let url_params = new URLSearchParams(window.location.search)
    let product_id = url_params.get("id")

    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            let cart = JSON.parse(localStorage.getItem("cart") || "[]")
            let cart_size = cart.length
            let cart_html = document.querySelector("#cart")
            let product_single = document.querySelector("#product-single")
            let product = products.filter(({ id }) => id == product_id)[0]
            let product_item = document.createElement("div")

            cart_html.innerHTML = `<a href="cart.html"><b>Carrinho</b>: ${cart_size}</a>`

            product_item.classList.add("product-item")
            product_item.setAttribute("data-id", product.id)
            product_item.innerHTML = `
                    <img src="${product.image}" class="product-img" width="250" height="250"/>
                    <h2>${product.name}</h2>
                    <h4>R$ ${product.price}</h4>
                    <div class="btn-container">
                    <button onclick="add_to_cart('${product.id}')">Add ao Carrinho</button>
                    <button onclick="buy_now('${product.id}')">Compre agora</button>
                    </div>
                `

            product_single.appendChild(product_item)
        })
        .catch(err => console.error(err))
})


function add_to_cart(id) {
    // alert(`Produto ${id} adicionado ao carrinho!`)    
    let cart = JSON.parse(localStorage.getItem("cart") || "[]")
    let cart_size = cart.length
    let cart_html = document.querySelector("#cart")

    if (!cart.includes(id)) {
        cart_html.innerHTML = `<a href="cart.html"><b>Carrinho</b>: ${++cart_size}</a>`
        cart.push(id)
        localStorage.setItem("cart", JSON.stringify(cart))
    } else {
        alert("Você já adicionou esse produto ao carrinho!")
    }
}


function buy_now(id) {
    // alert(`Redirect produto ${id} pra pagina de checkout!`)
    let cart = JSON.parse(localStorage.getItem("cart") || "[]")
    let cart_size = cart.length
    let cart_html = document.querySelector("#cart")

    if (!cart.includes(id)) {
        cart.push(id)
        localStorage.setItem("cart", JSON.stringify(cart))
        cart_html.innerHTML = `<a href="cart.html"><b>Carrinho</b>: ${++cart_size}</a>`
    }

    window.location.href = `checkout.html?id=${id}`
}