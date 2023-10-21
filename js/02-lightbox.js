import { galleryItems } from './gallery-items.js';
// Change code below this line
function createItems(galleryItems) {
  const gallery = document.querySelector('.gallery');

  const items = galleryItems
    .map(({ preview, description, original }) => (
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`
    ))
    .join('');

  gallery.insertAdjacentHTML('afterbegin', items);
}

createItems(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});