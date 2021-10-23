function addToCart(){
    alert("Add to cart!");
}

function account(){

}

function addProduct(){

}

function help(){

}

function signOut(){

}


document.getElementById("account").addEventListener("click", account);
document.getElementById("add").addEventListener("click", addProduct);
document.getElementById("help").addEventListener("click", help);
document.getElementById("signout").addEventListener("click", signOut);
const buttons = document.getElementsByClassName("btn btn-outline-light");
for (let button of buttons){
    button.addEventListener("click", addToCart);
}