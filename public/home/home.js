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

window.addEventListener("load", getAllVendor());

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

//sign out

function signOut() {
  //remove token from localstorage
  //redirect to login page
  window.location.replace("/");
}

document.getElementById("signout").addEventListener("click", signOut);
