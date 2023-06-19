// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onImageClick);

generateGalleryMarckup(galleryItems);

function generateGalleryMarckup(imageOdjectArray) {
    let galleryMarckup = '';
    for (const imageOdject of imageOdjectArray) {
        const { original, preview, description } = imageOdject;
        galleryMarckup += `<li class="gallery__item"><a class="gallery__link" href="${original}"><img  class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;
    galleryRef.innerHTML = galleryMarckup;
   
    }
}
    
const instance = new SimpleLightbox(`.gallery a`, { captionsData: 'alt', captionDelay: '250',captionClass:'gallery__caption'});

function onImageClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return
    }

    document.addEventListener("keydown", event => {
        if (event.key ==='Escape'){
            instance.close();
        }
    });
}

