// const productscontainer = document.getElementById("products.container");
// console.log(productsContainer);
// const div = document.createElement("div");


// const log = document.createElement("log");
// img.src="";
// img.alt="img here"
// const title = document.createElement("hi");

// const price = document.createElement("h2");
// const incremention = document.createElement("button");
// const decremention= document.createElement("button");
// const addItemspan = document.createElement("span");

// div.appendChild(img);
// div.appendChild(title);
// div.appendChild(price);
// div.appendChild(incremention);
// div.appendChild(decremention);
// div.appendChild(addItemspan);

const productsContainer = document.getElementById("products-container");

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        products.forEach(product => {

            const div = document.createElement("div");

            // Product Image
            const img = document.createElement("img");
            img.src = product.image;
            img.alt = product.title;

            // Product Name
            const title = document.createElement("h1");
            title.innerText = product.title;

            // Product Price
            const price = document.createElement("h2");
            price.innerText = "$" + product.price;

            // Increment Button
            const incrementBtn = document.createElement("button");
            incrementBtn.innerText = "+";

            // Decrement Button
            const decrementBtn = document.createElement("button");
            decrementBtn.innerText = "-";

            // ADD Button
            const addItemBtn = document.createElement("button");
            addItemBtn.innerText = "ADD";

            // Quantity for this product
            let quantity = 0;

            // ADD button
            addItemBtn.addEventListener("click", function () {
                quantity++;

                addItemBtn.innerText = "Added: " + quantity;
            });

            // + button
            incrementBtn.addEventListener("click", function () {
                quantity++;

                addItemBtn.innerText = "Added: " + quantity;
            });

            // - button
            decrementBtn.addEventListener("click", function () {

                if (quantity > 0) {
                    quantity--;

                    if (quantity === 0) {
                        addItemBtn.innerText = "ADD";
                    } else {
                        addItemBtn.innerText = "Added: " + quantity;
                    }
                }

            });

            // Add elements inside product div
            div.appendChild(img);
            div.appendChild(title);
            div.appendChild(price);
            div.appendChild(incrementBtn);
            div.appendChild(decrementBtn);
            div.appendChild(addItemBtn);

            // Add product div inside container
            productsContainer.appendChild(div);

        });

    })
    .catch(error => {
        console.log("Error:", error);
    });