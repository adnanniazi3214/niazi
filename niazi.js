
const products = [
    {
        name: "Camp Collar Blouse",
        price: "$39.00",
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600",
        description: "A comfortable and stylish blouse for everyday wear."
    },
    {
        name: "Capital Jacket",
        price: "$119.00",
        image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=600",
        description: "A fashionable jacket with a modern look and comfortable fit."
    },
    {
        name: "Highland Winter Coat",
        price: "$129.00",
        image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=600",
        description: "A cozy long coat designed for stylish winter outfits."
    },
    {
        name: "Straight Leg Pants",
        price: "$99.00",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
        description: "Smart straight-leg pants for casual and formal outfits."
    }
];

function showDescription(index) {
    const description = document.getElementById("desc" + index);
    description.hidden = !description.hidden;
}

function showDetails(index) {
    const product = products[index];

    document.getElementById("detailImage").src = product.image;
    document.getElementById("detailName").textContent = product.name;
    document.getElementById("detailPrice").textContent = product.price;
    document.getElementById("detailDescription").textContent =
        product.description;

    document.getElementById("detailsBox").style.display = "flex";
}

function closeDetails() {
    document.getElementById("detailsBox").style.display = "none";
}

function chooseColor(button, colorName) {
    const card = button.closest(".card");

    card.querySelector(".selected").textContent = "Color: " + colorName;
}

function addToCart() {
    alert("Product added to cart!");
    closeDetails();
}
