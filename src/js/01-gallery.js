import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.innerHTML = galleryItems.reduce(
  (html, current) =>
    html +
    `<div class="gallery__item" > <a class="gallery__link" href="${current.original}"><img class="gallery__image" src="${current.preview}" data-source="${current.original}" alt="${current.description}"></a></div>`,
  ""
);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  basicLightbox
    .create(`<img width="1400" height="900" src="${e.target.dataset.source}">`)
    .show();

  document.addEventListener("keydown", esc);

  function esc(e) {
    if (e.code === "Escape") {
      document.removeEventListener("keydown", esc);
      console.log("test");
    }
  }
});
