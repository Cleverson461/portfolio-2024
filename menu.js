let btnMenu = document.getElementById("btn-menu");
let menuMobile = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");

btnMenu.addEventListener("click", () => {
  menuMobile.classList.add("abrir-menu");
});

menuMobile.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
});

overlay.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
});

const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

function typerWriter(el){
  const textArray = el.innerHTML.split('');
  el.innerHTML = '';

  textArray.forEach((letter, i) => {
    setTimeout(() => (el.innerHTML += letter), 95 * i)
  })

  setInterval(() => typerWriter(el), 4000)
}

typerWriter(text)