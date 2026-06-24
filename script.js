let cart = 0;

function addToCart() {
    cart++;
    document.getElementById("cartCount").innerText = cart;
    alert("Item Added To Cart");
}