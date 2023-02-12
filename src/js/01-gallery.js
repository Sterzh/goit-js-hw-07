import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const addGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item" > <a class="gallery__link" href="${original}"><img class="gallery__img" src="${preview}" data-source="${original}" alt="${description}" width="100%"></a></div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterend", addGallery);

// const imgStyle = document.querySelector(".gallery__item");

// imgStyle.style.width = 200 + "px";

// console.log(gallery);
// gallery.append(...addGallery);

// console.log(addGallery);
// console.log(galleryItems);
// console.log(addGallery);
