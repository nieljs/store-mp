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
                    <img onclick="go_to_detail('${product.id}')" src="${product.image}" class="product-img" width="250" height="250"/>
                    <h2 onclick="go_to_detail('${product.id}')">${product.name}</h2>
                    <h4>R$ ${product.price}</h4>
                `

                product_list.appendChild(product_item)
            })
        })
        .catch(err => console.error(err))
})


function go_to_detail(id) {
    window.location.href = `detail.html?id=${id}`
}
