import Masonry from "masonry-layout";

// MASONRY
const masonryGrid = document.querySelector(".grid-masonry");
const overlay = document.querySelector(".masonry-overlay");
const masonryBtnOpen = document.querySelector(".masonry-btn-open");
const masonryBtnClose = document.querySelector(".masonry-btn-close");

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
