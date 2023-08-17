import Masonry from "masonry-layout";
import SimpleLightbox from "simplelightbox";
import Swiper from "swiper";
import { Navigation } from 'swiper/modules';
import "../node_modules/swiper/swiper.css";
import "../node_modules/swiper/modules/navigation";

const body = document.querySelector("body");

// NAV
//Dropdown
const navOfferDrop = document.querySelector(".nav-offer-drop");
const navOfferBtn = document.querySelector(".nav-offer-btn");

[navOfferBtn, navOfferDrop].forEach((el) => {
  el.addEventListener("mouseover", () => {
    navOfferDrop.classList.remove("hidden");
  });
});
navOfferBtn.addEventListener("mouseleave", () => {
  navOfferDrop.classList.add("hidden");
});

//Search
const navSearchBtn = document.querySelector(".search-btn");
const navSearchInput = document.querySelector(".search-input");

navSearchBtn.addEventListener("click", () => {
  navSearchInput.classList.toggle("hidden");
});
body.addEventListener("click", (e) => {
  if (e.target === navSearchBtn || e.target === navSearchInput) return;
  navSearchInput.classList.add("hidden");
});

//HERO SLIDE

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiper.init()

// MASONRY
const masonryGrid = document.querySelector(".grid-masonry");
const overlay = document.querySelector(".masonry-overlay");
const masonryBtnOpen = document.querySelector(".masonry-btn-open");
const masonryBtnClose = document.querySelector(".masonry-btn-close");

new SimpleLightbox(".grid-masonry a");

//Display
window.addEventListener("load", () => {
  const masonry = new Masonry(masonryGrid, {
    itemSelector: ".grid-item-masonry",
    percentPosition: true,
  });
});

//Expand animation
const expandKeyframes = [{ maxHeight: "40rem" }, { maxHeight: "250rem" }];

const ExpandOptions = {
  duration: 2000,
  fill: "forwards",
  easing: "cubic-bezier(1,0,.12,1)",
};

//Show
masonryBtnOpen.addEventListener("click", () => {
  masonryGrid.animate(expandKeyframes, ExpandOptions);

  setTimeout(() => {
    overlay.classList.toggle("h-2/5");
    masonryBtnOpen.classList.toggle("hidden");
    masonryBtnClose.classList.toggle("hidden");
  }, 1000);
});

// Hide
masonryBtnClose.addEventListener("click", () => {
  masonryGrid.animate(expandKeyframes, {
    ...ExpandOptions,
    direction: "reverse",
    duration: 500,
  });
  overlay.classList.toggle("h-2/5");
  masonryBtnOpen.classList.toggle("hidden");
  masonryBtnClose.classList.toggle("hidden");
});
