import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");


function makeGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link" 
      href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
      </a>
      </li>`;
    })
    .join("");
}
const galleryItemsMarkup = makeGalleryItemsMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);

const modal = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});