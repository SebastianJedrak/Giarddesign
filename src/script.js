import Masonry from "masonry-layout";

// MASONRY
window.addEventListener("load", () => {
const grid = document.querySelector(".grid-masonry")

const masonry = new Masonry(grid, {
    itemSelector: ".grid-item-masonry",
    percentPosition: true
})
}) 