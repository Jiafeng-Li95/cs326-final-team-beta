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

    let card_body = document.createElement("div");
    card_body.classList.add("card-body");
    let card_title = document.createElement("h5");
    card_title.classList.add("card-title");
    card_title.innerText = vendor.name;
    let card_text = document.createElement("p");
    card_text.classList.add("card-text");
    card_text.innerText = vendor.description;

    let card_link_1 = document.createElement("a");
    card_link_1.classList.add("card-link");
    card_link_1.role = "button";
    card_link_1.href = "#";
    card_link_1.innerText = "Go to Vendor page";
    card_link_1.id = index;
    // let card_link_2 = document.createElement("a");
    // card_link_2.classList.add("card-link");
    // card_link_2.role = "button";
    // card_link_2.href = "#";
    // card_link_2.innerText = "About me";

    card.appendChild(card_body);
    card_body.appendChild(card_title);
    card_body.appendChild(card_text);
    card_body.appendChild(document.createElement("br"));
    card_body.appendChild(card_link_1);
    // card_body.appendChild(card_link_2);

    vendor_list_div.appendChild(card);
  });
}

window.addEventListener("load", getAllVendor());
