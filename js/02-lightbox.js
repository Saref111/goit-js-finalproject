import { galleryItems } from './gallery-items.js';
// Change code below this line

const createGalleryElements = (galleryItems) => {
    return galleryItems.map(({ preview, original, description }) => {
        const galleryElement = `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>
        `;
        return galleryElement;
    })
}

const createGallery = (galleryItems) => {
    const galleryElements = createGalleryElements(galleryItems);

    const gallery = document.querySelector('.gallery');
    gallery.insertAdjacentHTML('beforeend', galleryElements.join(''));
    const lightbox = new SimpleLightbox('.gallery li a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
}

createGallery(galleryItems);

