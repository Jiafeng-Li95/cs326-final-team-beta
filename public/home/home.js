async function getAllVendor() {
  let response = await fetch("http://localhost:3000/vendor/all", {
    method: "GET",
  });

  let vendors = await response.json();

  let vendor_list_div = document.getElementById("vendor-list");
  vendors.forEach((vendor, index) => {
    let card = document.createElement("div");
    card.classList.add("d-flex");
    card.classList.add("w-50");
    card.classList.add("justify-content-sm-center");
    card.classList.add("card");
    card.classList.add("border-success");
    card.id = "card-container";
    let card_body = document.createElement("div");
    card_body.classList.add("card-body");
    let card_title = document.createElement("h5");
    card_title.classList.add("card-header");
    card_title.innerText = vendor.name;
    let card_text = document.createElement("p");
    card_text.classList.add("card-text");
    card_text.innerText = vendor.description;

    let card_link_1 = document.createElement("a");
    card_link_1.classList.add("btn");
    card_link_1.classList.add("btn-success");
    card_link_1.role = "button";
    card_link_1.href = "#";
    card_link_1.innerText = "Go to Vendor page";
    card_link_1.id = index;

    let card_footer = document.createElement("div");
    card_footer.classList.add("card-footer");
    card_footer.appendChild(card_link_1);
    card.appendChild(card_title);
    card.appendChild(card_body);
    card_body.appendChild(card_text);
    card_body.appendChild(document.createElement("br"));
    card.appendChild(card_footer);
    vendor_list_div.appendChild(card);
  });
}

//fetch user details
async function getVendorDetails() {
  let url = new URL(window.location);
  let id = url.searchParams.get("userId");

  response = await fetch("http://localhost:3000/vendor/" + id, {
    method: "GET",
  });

  let vendor = await response.json();

  //update to account window
  document.getElementById("yardName").value = vendor[0].name;
  document.getElementById("description").value = vendor[0].description;
  document.getElementById("location").value = vendor[0].location;
  document.getElementById("phoneNumber").value = vendor[0].phoneNumber;
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
  console.log(vendor);
  let response = await fetch("http://localhost:3000/vendor/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vendor),
  });

  let flag = response.status;

  if (flag) {
    document.getElementById("editAccount")["data-content"] = "success edited";
  } else {
    document.getElementById("editAccount")["data-content"] = "failed edit";
  }
}

//sign out
function signOut() {
  //remove token from localstorage
  //redirect to login page
  window.location.replace("/");
}

window.addEventListener("load", getAllVendor);
//load account details
getVendorDetails();

//search bar functionality
document.getElementById("searchBar").addEventListener("keyup", (e) => {
  let vendors = document.getElementsByTagName("h5");

  for (let i = 0; i < vendors.length; i++) {
    if (
      vendors[i].innerText.toLowerCase().includes(e.target.value.toLowerCase())
    ) {
      vendors[i].scrollIntoView();
    }
  }
});

document.getElementById("signout").addEventListener("click", signOut);

document.getElementById("editAccount").addEventListener("click", editAccount);
