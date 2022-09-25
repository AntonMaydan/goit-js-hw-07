import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function makeGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
      </div>`;
    })
    .join("");
}
const list = makeGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", list);

galleryEl.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const isGalleryItem = event.target.classList.contains("gallery__image");
  if (!isGalleryItem) {
    return;
  }
  const originalImg = event.target.dataset.source;
  const modal = basicLightbox.create(`
    <img src="${originalImg}">`);
  modal.show();

  document.addEventListener("keydown", (event) => {
    if (event.code !== "Escape") {
      return;
    }
    modal.close();
    galleryEl.removeEventListener;
  });
}
