//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const dorpdowns = document.querySelectorAll(".dropdown");

//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//ulangi ke semua elemen dropdown
dorpdowns.forEach((dropdown) => {
  //get inner elements from each dropdown
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  //add a click event to the select element
  select.addEventListener("click", () => {
    //add the clicked select styles to the select element
    select.classList.toggle("select-clicked");
    //add the rotate styles to caret element
    caret.classList.toggle("caret-rotate");
    //add the open styles to the menu element
    menu.classList.toggle("menu-open");
  });

  //loop through all option element
  options.forEach((option) => {
    //add click event to the option element
    option.addEventListener("click", () => {
      //change selected inner text to clicked option inner text
      selected.innerText = option.innerText;
      //add the clicked select styles to the select element
      select.classList.remove("select-clicked");
      //add the rotate styles to the caret element
      caret.classList.remove("caret-rotate");
      //add the open styles to the menu element
      menu.classList.remove("menu-open");
      //remove active class from all option elements
      option.forEach((option) => {
        option.classList.remove("active");
      });
      //add active class to clicked option element
      option.classList.add("active");
    });
  });
});

function sendwhatsapp() {
  var phonenumber = "+6281287590145";

  var name = document.querySelector(".name").value;
  var produk = document.querySelector(".produk").value;
  var mobil = document.querySelector(".mobil").value;
  var country = document.querySelector(".country").value;
  var message = document.querySelector(".message").value;

  var url =
    "https://wa.me/" +
    phonenumber +
    "?text=" +
    "*Nama :* " +
    name +
    "%0a" +
    "*Produk :* " +
    produk +
    "%0a" +
    "*Jenis Mobil :* " +
    mobil +
    "%0a" +
    "*Alamat Pengiriman:* " +
    country +
    "%0a" +
    "*Pesan :* " +
    message +
    "%0a%0a" +
    "Pesanan sesuai yang tertera di atas !";

  window.open(url, "_blank").focus();
}
