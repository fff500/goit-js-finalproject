import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const basicLightboxInstance = basicLightbox.create(
  `<img class="js-image" width="800" height="600">`,
  {
    onShow: () => document.addEventListener('keydown', handleEscClick),
    onClose: () => document.removeEventListener('keydown', handleEscClick)
  }
);

gallery.addEventListener('click', handleImageClick);

function createItems(galleryItems) {
  const items = galleryItems
    .map(({ preview, description, original }) => (
      `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    ))
    .join('');

  gallery.insertAdjacentHTML('afterbegin', items);
}

function handleImageClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) return;

  basicLightboxInstance.show(
    () => document
      .querySelector('.js-image')
      .setAttribute('src', `${event.target.dataset.source}`)
  );
}

function handleEscClick(event) {
  if (event.key !== 'Escape') return;

  basicLightboxInstance.close();
}

createItems(galleryItems);
