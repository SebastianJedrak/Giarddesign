import Masonry from "masonry-layout";

// MASONRY
const masonryGrid = document.querySelector(".grid-masonry");
const overlay = document.querySelector(".masonry-overlay");
const masonryBtn = document.querySelector(".masonry-btn");

//Display
window.addEventListener("load", () => {
  const masonry = new Masonry(masonryGrid, {
    itemSelector: ".grid-item-masonry",
    percentPosition: true,
  });
});

//Show / Hide
masonryBtn.addEventListener("click", () => {
  masonryGrid.classList.toggle("max-h-[40rem]");
  overlay.classList.toggle("h-full");
});
