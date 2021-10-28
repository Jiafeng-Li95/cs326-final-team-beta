function addToCart(){
    alert("Add to cart!");
}

const buttons = document.getElementsByClassName("btn btn-outline-light");
for (let button of buttons){
    button.addEventListener("click", addToCart);
}