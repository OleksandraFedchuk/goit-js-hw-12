
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchPhotosByQuery } from "./js/pixabay-api.js"
import { galleryCard, renderImages } from "./js/render-functions.js"



const refs = {
    button : document.querySelector('.btn'),
    form: document.querySelector('.form'),
    input: document.querySelector('.input'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector(".loader"),
}



refs.form.addEventListener("submit", handlerEvent);

function handlerEvent(event){
    event.preventDefault();

    const formQuery = event.currentTarget.elements.query.value;

if(formQuery === ""){
    iziToast.show({
        class: "wave-stroke",   
        message: '🚫Sorry, there are no images matching your search query. Please try again!',
        position: "topRight",
        closeOnEscape: true,
        closeOnClick: true,
        backgroundColor: "#e3545b",
});
return;
}



refs.gallery.innerHTML = "";
showLoader();

fetchPhotosByQuery(formQuery)
.then(data =>{
    if(data.hits.length === 0){
        iziToast.show({
            title:'No results',
            message:'Sorry, there are no images matching your search query. Please try again!',
            color:'#e3545b',
            position:"topRight"
        });
    }else{
        renderImages(data.hits, refs.gallery)
    }
})
 .catch(error =>{
    iziToast.show({
        title:"Error",
        message:"Something went wrong. Please try again later.",
        color:'#e3545b',
        position:"topRight"
    });
 })
.finally(() => {
    hideLoader();
    refs.form.reset();
});
}

function showLoader() {
    refs.loader.classList.remove("hidden");
  }
  
  function hideLoader() {
    refs.loader.classList.add("hidden");
  }

  //1. Зробити синхронні ф-іі async-await 
  //2. Додати кнопку Load more
  //3. Там де був використаний fetch , замінити бібл axios 
  //4. На кнопку Load more додати прослуховувча подій 
  //5. Зробити кнопу у стані enable коли у коллекціі ще є запити, та у стан disable коли більше немає запитів у коллекціі
//  6.За один запит у відповідь приходить не більше 15 елементів
  //7.Після додавання нових елементів до списку зображень на екземплярі SimpleLightbox викликається метод refresh()
  //8. При кожному новому сабміті форми номер сторінки скидається до дефолтного 1 і результати попередніх запитів зникають