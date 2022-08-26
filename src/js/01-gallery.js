import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

    
const galleryContainer = document.querySelector('.gallery');

function createGalleryCardsMarkup(items) {
  return items
    .map(
      item =>
        `
    <a class="gallery__item" href="${item.original}">
      <img class="gallery__image"
      src="${item.preview}"
      alt="${item.description}" />
    </a>
  `
    )
    .join('');
}

const addGallaryMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.innerHTML = addGallaryMarkup;

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', 'captionDelay', function () {});
// gallery.on('captionDelay', function () {});