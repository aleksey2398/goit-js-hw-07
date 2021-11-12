import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const gallery = document.querySelector(".gallery");
const galleryItem = createImgCard(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryItem);

function createImgCard(galleryItems) {
    return galleryItems
        .map(({ preview, original, description}) => {
            return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div
`}).join('');
}

gallery.addEventListener("click", choosePic);

function choosePic(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }
    const pic = (event.target.dataset.source);

    const instance = basicLightbox.create(`
     <img src="${pic}" width="800" height="600">
`);

instance.show()
        
    }
    


    


