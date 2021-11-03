async function getAllProduct() {
  let url = new URL(window.location);
  let vendorId = url.searchParams.get("userId");

  let response = await fetch("/product/all/" + vendorId, {
    method: "GET",
  });

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
    document.getElementById("button-delete" + index).addEventListener("click", () => {
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

//fetch user details
async function getVendorDetails() {
  let url = new URL(window.location);
  let id = url.searchParams.get("userId");

  response = await fetch("/vendor/" + id, {
    method: "GET",
  });

  let vendor = await response.json();

  //update to account window - TODO
  document.getElementById(
    "storeName"
  ).innerHTML = `<i class="bi bi-person-circle"></i> ${vendor[0].name}`;
  document.getElementById("storeDescription").innerText =
    "Description: " + vendor[0].description + "\n";
  document.getElementById("storeDescription").innerText +=
    "Location: " + vendor[0].location + "\n";
  document.getElementById("storeDescription").innerText +=
    "Phone Number: " + vendor[0].phoneNumber;
}

async function addProduct() {
  let url = new URL(window.location);
  let userid = url.searchParams.get("userId");
  userid = parseInt(userid);

  let product = {
    id: productId,
    name: document.getElementById("addProductName").value,
    description: document.getElementById("addProductDescription").value,
    userId: userid,
  };

  let response = await fetch("/product", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(product),
  });

  let nextData = await response.status;
  if (nextData === 200) {
    productId++;
    $("#addModal").modal("hide");
  } else {
    alert("Fail to add the product.");
  }
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
getVendorDetails();
document.getElementById("signout").addEventListener("click", signOut);
document.getElementById("backHome").addEventListener("click", backHomePage);


