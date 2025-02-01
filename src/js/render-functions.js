import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 200,
});


export function galleryCard({webformatURL,largeImageURL,tags,likes,views,comments,downloads}){
    return `<div class="card">
    <div class="card-apperance">
<a href="${largeImageURL}" class="card-link">
<img src="${webformatURL}" alt="${tags}">
</a>
</div>
<div class="card-discription">
<p class="discription">Likes:${likes}</p>
<p class="discription">Views:${views}</p>
<p class="discription">Comments:${comments}</p>
<p class="discription">Downloads:${downloads}</p>
</div>
</div>`
};

export function renderImages(images, container, append = false) {
    const imagesMarkup = images.map(galleryCard).join('');

    if(append){
      container.insertAdjacentHTML("beforeend", imagesMarkup);
    }else{
      container.innerHTML = imagesMarkup;
    }
      
    lightbox.refresh();  
  }