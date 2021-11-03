async function getAllProduct() {
    let url = new URL(window.location);
    let vendorId = url.searchParams.get("userId");
    vendorId = parseInt(vendorId);

    let response = await fetch("localhost:3000/product/all/:" + String(vendorId), {
      method: "GET",
    });
  
    let products = await response.json();
    const productList = document.getElementById("productList");
    products.forEach((product, index) => {
        let br = document.createElement("br");
        productList.appendChild(br);

        let row = document.createElement("div");
        row.classList.add("row");
        row.id = product.id;

        let col = document.createElement("div");
        col.classList.add("col-sm-1");
        row.appendChild(col);

        let col2 = document.createElement("div");
        col2.classList.add("col-sm-3");
        let image = document.createElement("img");
        image.classList.add("img-rounded");
        image.src = "../images/default-image.png";
        image.alt = "An image of the product.";
        col2.appendChild(image);
        row.appendChild(col2);

        let card = document.createElement("div");
        card.classList.add("card");

        let card_body = document.createElement("div");
        card_body.classList.add("card-body");

        let title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerText = product.name;
        title.innerText = "This is a title";
        card_body.appendChild(title);

        let description = document.createElement("p");
        description.classList.add("card-text");
        description.innerText = product.description;
        description.innerText = "Some description";
        card_body.appendChild(description);

        card.appendChild(card_body);
        row.appendChild(card);

        let col4 = document.createElement("div");
        col4.classList.add("col-sm-1");
        row.appendChild(col4);

        productList.appendChild(row);
    });
}

async function deleteProduct() {

}

//fetch user details
async function getVendorDetails() {
    let url = new URL(window.location);
    let id = url.searchParams.get("userId");
    id = parseInt(id);

    response = await fetch("http://localhost:3000/vendor/" + String(id), {
      method: "GET",
    });
  
    let vendor = await response.json();
  
    //update to account window - TODO
    document.getElementById("storeName").innerText = vendor[0].name;
    document.getElementById("storeDescription").innerText = 'Description: ' + vendor[0].description + '\n';
    document.getElementById("storeDescription").innerText += 'Location: ' + vendor[0].location + '\n';
    document.getElementById("storeDescription").innerText += 'Phone Number: ' + vendor[0].phoneNumber;
}

async function addProduct() {
    let url = new URL(window.location);
    let userid = url.searchParams.get("userId");
    userid = parseInt(userid);

    let product = {
        id: productId,
        name: document.getElementById("addProductName").value,
        description: document.getElementById("addProductDescription").value,
        userId: userid
    };

    let response = await fetch('/product/admin/:' + String(userid), {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(product)
    });

    let nextData = await response.status;

    if (nextData === 200) {
        productId++;
        $('#addModal').modal('hide');
    }
    else {
        alert("Fail to add the product.");
    }

}

function signOut() {
    //remove token from localstorage
    //redirect to login page
    window.location.replace("/");
}

function addToCart(){
    alert("Add to cart!");
}

let productId = 0;
window.addEventListener("load", getAllProduct);
getVendorDetails();
document.getElementById("saveAddedProduct").addEventListener('click', addProduct);
document.getElementById("signOut").addEventListener("click", signOut);