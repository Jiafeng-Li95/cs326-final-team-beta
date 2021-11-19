async function getAllProduct() {
  let url = new URL(window.location);
  let vendorId = url.searchParams.get("userId");

  let response = await fetch("/product/all/" + vendorId, {
    method: "GET"
  });

  if (!response.ok){
      return;
  }

  let products = await response.json();
  const productList = document.getElementById("productList");

  products.forEach((product, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("d-flex");
    card.classList.add("w-50");
    card.classList.add("justify-content-sm-center");
    card.classList.add("card");
    card.classList.add("border-success");
    card.id = "card-container" + index;

    let card_body = document.createElement("div");
    card_body.classList.add("card-body");

    let title = document.createElement("h5");
    title.classList.add("card-header");
    title.innerText = product.name;
    card_body.appendChild(title);

    let description = document.createElement("p");
    description.classList.add("card-text");
    description.innerText = product.description;

    let card_footer = document.createElement("div");
    card_footer.classList.add("card-footer");
    card_footer.classList.add("bg-transparent");
    card_footer.classList.add("border-success");

    let button = document.createElement("div");
    button.classList.add("btn");
    button.classList.add("btn-outline-primary");
    button.classList.add("pull-right");
    button.innerText = "Delete";
    button.id = "button-delete" + index;

    card_footer.appendChild(button);

    card_body.appendChild(description);

    card.appendChild(card_body);
    card.appendChild(card_footer);

    productList.appendChild(card);

    // delet button event addEventListener
    document
      .getElementById("button-delete" + index)
      .addEventListener("click", () => {
        // remove card container
        document.getElementById("card-container" + index).remove();
        // delete product
        deleteProduct(product);
      });
  });
}

async function deleteProduct(product) {
  let response = await fetch("/product/" + product.id, {
    method: "DELETE",
  });
  let vendor = await response.json();
  console.log(vendor);
}

async function createProduct() {
  let name = document.getElementById("productName").value;
  let description = document.getElementById("description").value;
  let url = new URL(window.location);
  let vendorId = url.searchParams.get("userId");

  let product = {
    name: name,
    description: description,
    userId: parseInt(vendorId),
  };

  let response = await fetch("/product/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(product),
  });

  if (response.status === 201) {
    location.reload();
    console.log("create successed");
  }
}

//fetch user details
async function getVendorDetails() {
  let url = new URL(window.location);
  let id = url.searchParams.get("userId");

  let response = await fetch("/vendor/" + id, {
    method: "GET"
  });

  let vendor = await response.json();

  //update to account window
  document.getElementById("storeName").innerHTML = `<i class="bi bi-person-circle"></i> ${vendor.name}`;
  document.getElementById("storeDescription").innerText =
    "Description: " + vendor.description + "\n";
  document.getElementById("storeDescription").innerText +=
    "Location: " + vendor.location + "\n";
  document.getElementById("storeDescription").innerText +=
    "Phone Number: " + vendor.phonenumber;
}

async function getPageView(){
    let url = new URL(window.location);
    let id = url.searchParams.get("userId");

    let response = await fetch("/pageview/" + id, {
        method: "GET"
    });
    
    let record = await response.json();
    const storeName = document.getElementById('storeName');
    const pageview = document.createElement("span");
    pageview.id = 'pv';
    let num = record.numclicked + 1;
    pageview.appendChild(document.createTextNode("Page View: " + num));
    storeName.appendChild(pageview);
}

function backHomePage() {
  history.back();
}

function signOut() {
  //remove token from localstorage
  //redirect to login page
  window.location.replace("/");
}

function addToCart() {
  alert("Add to cart!");
}

let productId = 0;
window.addEventListener("load", getAllProduct);
window.addEventListener("load", getVendorDetails);
window.addEventListener("load", getPageView);
document.getElementById("signout").addEventListener("click", signOut);
document.getElementById("backHome").addEventListener("click", backHomePage);
document.getElementById("createProduct").addEventListener("click", createProduct);
