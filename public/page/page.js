async function getAllProduct() {
  let url = new URL(window.location);
  let vendorId = url.searchParams.get("userId");

  let response = await fetch("/product/all/" + vendorId, {
    method: "GET",
  });

  if (!response.ok) {
    return;
  } else {
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
      button.classList.add("ml-3");
      button.innerText = "Delete";
      button.id = "button-delete" + index;

      let add_button = document.createElement("div");
      add_button.classList.add("btn");
      add_button.classList.add("btn-outline-danger");
      add_button.classList.add("pull-right");
      add_button.classList.add("px-3");
      add_button.innerText = "Save";
      add_button.id = "button-add" + index;

      card_footer.appendChild(button);
      card_footer.appendChild(add_button);

      card_body.appendChild(description);

      card.appendChild(card_body);
      card.appendChild(card_footer);

      productList.appendChild(card);

      // delet button event addEventListener
      document
        .getElementById("button-delete" + index)
        .addEventListener("click", () => {
          // remove card container
          document.getElementById("card-container" + index);
          // delete product
          deleteProduct(product);
        });

      //add to favorite button
      document
        .getElementById("button-add" + index)
        .addEventListener("click", () => {
          // add to favorite product
          addToFavorite(product.id);
        });
    });
  }
}

async function addToFavorite(productId) {
  //get the logined userId
  let storage = window.localStorage;
  let savedUserId = parseInt(storage.getItem("user"));

  await fetch("/favorite/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ productId: productId, savedUserId: savedUserId }),
  });
}

async function deleteProduct(product) {
  await fetch("/product/" + product.id, {
    method: "DELETE",
  });
  location.reload();
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
    method: "GET",
  });

  let vendor = await response.json();

  //update to account window
  document.getElementById(
    "storeName"
  ).innerHTML = `<i class="bi bi-person-circle"></i> ${vendor.name}`;
  document.getElementById("storeDescription").innerText =
    "Description: " + vendor.description + "\n";
  document.getElementById("storeDescription").innerText +=
    "Location: " + vendor.location + "\n";
  document.getElementById("storeDescription").innerText +=
    "Phone Number: " + vendor.phonenumber;
}

//increment view
async function getPageView() {
  let url = new URL(window.location);
  let id = url.searchParams.get("userId");

  let response = await fetch("/vendor/view/" + id, {
    method: "GET",
  });
  if (response.status === 200) {
    let record = await response.json();
    let num = record.numclicked + 1;

    document.getElementById("viewValue").innerText = num;
    //update
    let data = { userid: id, numclicked: num };
    response = await fetch("/vendor/view/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } else {
    // add new view by userId
    let data = { userid: id, numclicked: 1 };
    response = await fetch("/vendor/view", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    document.getElementById("viewValue").innerText = 1;
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

// increment Like number in vendor page
async function incrementLike() {
  let url = new URL(window.location);
  let id = url.searchParams.get("userId");
  let vendor_id = 0;
  let like_number = 0;

  //get like number by vendor id
  let response = await fetch("/vendor/like/" + id, {
    method: "GET",
  });
  if (response.status === 200) {
    let like = await response.json();
    vendor_id = like.vendor_id;
    like_number = like.like_number;
    //update the like number by 1
    let data = { vendor_id: vendor_id, like_number: parseInt(like_number) + 1 };
    response = await fetch("/vendor/Like/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } else {
    //if not add new like number
    let data = { vendor_id: id, like_number: 1 };
    response = await fetch("/vendor/Like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  //get like number and render to the vendor page
  response = await fetch("/vendor/Like/" + id, {
    method: "GET",
  });
  if (response.status === 200) {
    let like = await response.json();
    like_number = like.like_number;
  }
  document.getElementById("likeValue").innerText = like_number;
}

// for render to get the init like number by using vendor id
async function getLikeNumber() {
  let url = new URL(window.location);
  let id = url.searchParams.get("userId");
  let like_number = 0;

  try {
    //get like number by vendor id
    let response = await fetch("/vendor/like/" + id, {
      method: "GET",
    });
    if (response.status === 200) {
      let like = await response.json();
      like_number = like.like_number;
    }
  } catch (err) {
    //nothing
    console.log("the vendor like not created yet ");
  }

  document.getElementById("likeValue").innerText = like_number;
}

let productId = 0;
window.addEventListener("load", getAllProduct);
window.addEventListener("load", getVendorDetails);
window.addEventListener("load", getPageView);
window.addEventListener("load", getLikeNumber);
document.getElementById("signout").addEventListener("click", signOut);
document.getElementById("backHome").addEventListener("click", backHomePage);
document
  .getElementById("createProduct")
  .addEventListener("click", createProduct);
document.getElementById("like").addEventListener("click", incrementLike);
