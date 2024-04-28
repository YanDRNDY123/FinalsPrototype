const orderShipped = document.getElementById("shipOrder");
const orderCancelled = document.getElementById("orderCancelled");


document.getElementById("shipOrder").onclick = function() {
    orderShipped.classList.toggle("shipped");

    orderShipped.textContent = "ORDER SHIPPED";
}

document.getElementById("orderCancelled").onclick = function() {
    orderShipped.textContent = "ORDER CANCELLED";
}