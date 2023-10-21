import { galleryItems } from './gallery-items.js';
// Change code below this line

const createGalleryElements = (galleryItems) => {
    return galleryItems.map(({ preview, original, description }) => {
        const galleryElement = `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
                </a>
            </li>
        `;
        return galleryElement;
    })
}



const onGalleryClick = (event) => {
    event.preventDefault();
    const galleryImage = event.target;
    if (galleryImage.nodeName !== 'IMG') return;

    const instance = basicLightbox.create(`
        <img src="${galleryImage.dataset.source}" width="800" height="600">
    `, {
        onShow: (instance) => {
            window.addEventListener('keydown', onEscKeyDown);
        },
        onClose: (instance) => {
            window.removeEventListener('keydown', onEscKeyDown);
        }
    });

    const onEscKeyDown = (event) => {
        if (event.key === 'Escape') {
            instance.close();
        }
    };
    
    instance.show();
}

const createGallery = (galleryItems) => {
    const galleryElements = createGalleryElements(galleryItems);

    const gallery = document.querySelector('.gallery');
    gallery.insertAdjacentHTML('beforeend', galleryElements.join(''));
    gallery.addEventListener('click', onGalleryClick);
}

createGallery(galleryItems);
