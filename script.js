document.addEventListener("DOMContentLoaded", () => {
    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            let product_list = document.querySelector("#product-list")

            products.forEach(product => {
                let product_item = document.createElement("div")

                product_item.classList.add("product-item")
                product_item.setAttribute("data-id", product.id)
                product_item.innerHTML = `
                    <img src="${product.image}" class="product-img" width="250" height="250"/>
                    <h2>${product.name}</h2>
                    <h3>R$ ${product.price}</h3>
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
    alert(`Produto ${id} adicionado ao carrinho!`)
}

function buy_now(id) {
    alert(`Redirect produto ${id} pra pagina de checkout!`)
}