const hamburger = document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
});

window.onscroll = () => {
  menu.classList.remove("menu-active");
};

const btnfilter = document.querySelectorAll(".produk-box ul li");
const imgItem = document.querySelectorAll(".produk-list img");

btnfilter.forEach((data) => {
  data.onclick = () => {
    btnfilter.forEach((data) => {
      data.className = "";
    });

    data.className = "active";

    // Filter Image
    const btnText = data.textContent;
    imgItem.forEach((img) => {
      img.style.display = "none";
      if (
        img.getAttribute("data-filter") == btnText.toLocaleLowerCase() ||
        btnText == "All Produk"
      ) {
        img.style.display = "block";
      }
    });
  };
});
