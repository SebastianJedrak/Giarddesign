import Masonry from "masonry-layout";
import SimpleLightbox from "simplelightbox";

// NAV
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

// MASONRY
const masonryGrid = document.querySelector(".grid-masonry");
const overlay = document.querySelector(".masonry-overlay");
const masonryBtnOpen = document.querySelector(".masonry-btn-open");
const masonryBtnClose = document.querySelector(".masonry-btn-close");
const imgAnchors = masonryGrid.querySelectorAll("a");

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
    overlay.classList.toggle("h-full");
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
  overlay.classList.toggle("h-full");
  masonryBtnOpen.classList.toggle("hidden");
  masonryBtnClose.classList.toggle("hidden");
});
