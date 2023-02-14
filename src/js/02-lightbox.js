import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.innerHTML = galleryItems.reduce(
  (html, current) =>
    html +
    `<a class="gallery__item" href="${current.original}"><img class="gallery__image" src="${current.preview}" alt="${current.description}"></a>`,
  ""
);

gallery.addEventListener("click", (e) => {
  e.preventDefault();

  let gallery = new SimpleLightbox(".gallery a");
  gallery.on("show.simplelightbox", function () {
    // do something…
  });
});
