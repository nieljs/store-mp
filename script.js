document.addEventListener("DOMContentLoaded", () => {
    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            let cart = JSON.parse(localStorage.getItem("cart") || "[]")
            let cart_size = cart.length
            let cart_html = document.querySelector("#cart")
            let product_list = document.querySelector("#product-list")

            cart_html.innerHTML = `<a href="cart.html"><b>Carrinho</b>: ${cart_size}</a>`

            products.forEach(product => {
                let product_item = document.createElement("div")

                product_item.classList.add("product-item")
                product_item.setAttribute("data-id", product.id)
                product_item.innerHTML = `
                    <img onclick="buy_now('${product.id}')" src="${product.image}" class="product-img" width="250" height="250"/>
                    <h2 onclick="buy_now('${product.id}')">${product.name}</h2>
                    <h4>R$ ${product.price}</h4>
                    <div class="btn-container">
                    <button onclick="add_to_cart('${product.id}')">Add ao Carrinho</button>
                    <button onclick="buy_now('${product.id}')">Compre agora</button>
                    </div>
                `

                product_list.appendChild(product_item)
            })
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

async function go_to_cart() {
    
}

function buy_now(id) {
    alert(`Redirect produto ${id} pra pagina de checkout!`)
}