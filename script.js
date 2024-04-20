document.addEventListener("DOMContentLoaded", () => {
    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            let product_list = document.querySelector("#product-list")

            products.forEach(product => {
                let product_item = document.createElement("div")

                product_item.classList.add("product-item")
                product_item.innerHTML = `
                    <img src="${product.image}" class="product-img" width="250" height="250"/>
                    <h2>${product.name}</h2>
                    <button>Add ao Carrinho</button>
                `
                
                product_list.appendChild(product_item)
            })
        })
        .catch(err => console.error(err))
})