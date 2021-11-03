async function getAllProduct() {
    let url = new URL(window.location);
    let vendorId = url.searchParams.get("userId");
    vendorId = parseInt(vendorId);

    let response = await fetch("localhost:3000/product/all/:" + String(vendorId), {
        method: "GET"
    });
  
    let products = await response.json();
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
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
        card_body.appendChild(title);

        let description = document.createElement("p");
        description.classList.add("card-text");
        description.innerText = product.description;
        card_body.appendChild(description);

        card.appendChild(card_body);
        row.appendChild(card);

        let col4 = document.createElement("div");
        col4.classList.add("col-sm-1");
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("btn-warning");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => {
            deleteProduct(row.id);
        });
        col4.appendChild(deleteButton);
        let updateButton = document.createElement("button");
        updateButton.classList.add("btn-info");
        updateButton.innerText = "Update";
        updateButton.addEventListener("click", () => {
            updateProduct(row.id);
        });
        col4.appendChild(updateButton);
        row.appendChild(col4);

        productList.appendChild(row);
    });
}

async function deleteProduct(productId) {
    let response = await fetch("localhost:3000/product/:" + String(productId), {
        method: "DELETE"
    });

    let del = await response.status;
    if (del === 200){
        document.getElementById(productId).innerHTML = "";
    }
    else{
        alert("Failed to delete the product.");
    }
}

//fetch user details
async function getVendorDetails() {
    let url = new URL(window.location);
    let id = url.searchParams.get("userId");
    id = parseInt(id);

    response = await fetch("http://localhost:3000/vendor/" + String(id), {
        method: "GET"
    });
  
    let vendor = await response.json();
  
    //update to account window
    document.getElementById("storeName").innerText = '';
    document.getElementById("storeDescription").innerText = '';
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
        id: "",
        name: document.getElementById("addProductName").value,
        description: document.getElementById("addProductDescription").value,
        userId: userid
    };

    let response = await fetch('/product/admin/:' + String(userid), {
        method: 'POST',
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
    getAllProduct();
}

async function updateProduct(productId) {
    let url = new URL(window.location);
    let userid = url.searchParams.get("userId");
    userid = parseInt(userid);
}

//edit Details
async function editAccount() {
    //get vendor detail
    let vendor = {};
    //update to account window
    vendor.name = document.getElementById("yardName").value;
    vendor.description = document.getElementById("description").value;
    vendor.location = document.getElementById("location").value;
    vendor.phoneNumber = document.getElementById("phoneNumber").value;
  
    //update the user detail to the server
    let url = new URL(window.location);
    let id = url.searchParams.get("userId");
    vendor.userId = parseInt(id);
    
    let response = await fetch("http://localhost:3000/vendor/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vendor)
    });
  
    let flag = response.status;
  
    if (flag === 200) {
        $('#accountModal').modal('hide');
    } 
    else {
        alert("Failed to edit.");
    }
    getVendorDetails();
}

function signOut() {
    //remove token from localstorage
    //redirect to login page
    window.location.replace("/");
}

window.addEventListener("load", getAllProduct);
getVendorDetails();
document.getElementById("saveAddedProduct").addEventListener('click', addProduct);
document.getElementById("signOut").addEventListener("click", signOut);
document.getElementById("editAccount").addEventListener('click', editAccount);

/*
        const productList = document.getElementById("productList");
        let br = document.createElement("br");
        productList.appendChild(br);

        let row = document.createElement("div");
        row.classList.add("row");
        //row.id = product.id;

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
        //title.innerText = product.name;
        card_body.appendChild(title);

        let description = document.createElement("p");
        description.classList.add("card-text");
        //description.innerText = product.description;
        card_body.appendChild(description);

        card.appendChild(card_body);
        row.appendChild(card);

        let col4 = document.createElement("div");
        col4.classList.add("col-sm-1");
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("btn-warning");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => {
            deleteProduct(row.id);
        });
        col4.appendChild(deleteButton);
        let updateButton = document.createElement("button");
        updateButton.classList.add("btn-info");
        updateButton.innerText = "Update";
        updateButton.addEventListener("click", () => {
            updateProduct(row.id);
        });
        col4.appendChild(updateButton);
        row.appendChild(col4);

        productList.appendChild(row); 
*/