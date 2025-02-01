import{a as f,S as y,i as c}from"./assets/vendor-D3PmPE7A.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const g="https://pixabay.com/api/",b="48265594-3edacf02e8cadda91195713cc";async function u(s,e=1){const a=`${g}?key=${b}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${e}`;try{return(await f.get(a)).data}catch{throw new Error("Sorry, there are no imagies matching your search query. Please try again!")}}const v=new y(".gallery a",{captionsData:"alt",captionDelay:200});function w({webformatURL:s,largeImageURL:e,tags:a,likes:n,views:t,comments:r,downloads:i}){return`
    <div class="card">
      <div class="card-image">
        <a href="${e}" class="gallery-item-link">
          <img src="${s}" alt="${a}" />
        </a>
      </div>
      <div class="card-body">
      <p class="card-text">
        <span class="card-text-label">Likes: </span>
        <span class="card-text-value">${n}</span>
      </p>
      <p class="card-text">
        <span class="card-text-label">Comments: </span>
        <span class="card-text-value">${r}</span>
      </p>
      <p class="card-text">
        <span class="card-text-label">Views: </span>
        <span class="card-text-value">${t}</span>
      </p>
      <p class="card-text">
        <span class="card-text-label">Downloads: </span>
        <span class="card-text-value">${i}</span>
      </p>
    </div>
    </div>`}function p(s,e,a=!1){const n=s.map(w).join("");a?e.insertAdjacentHTML("beforeend",n):e.innerHTML=n,v.refresh()}let l=1,L=null,d=0;const o={button:document.querySelector(".btn"),form:document.querySelector(".form"),input:document.querySelector(".input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadButton:document.querySelector(".load-button")};o.loadButton.addEventListener("click",S);o.form.addEventListener("submit",x);async function x(s){s.preventDefault();const e=s.currentTarget.elements.query.value.trim();if(e===""){c.show({class:"wave-stroke",message:"🚫Sorry, there are no images matching your search query. Please try again!",position:"topRight",closeOnEscape:!0,closeOnClick:!0,backgroundColor:"#e3545b"});return}l=1,o.gallery.innerHTML="",o.loadButton.classList.add("hidden"),h();try{const a=await u(e,l);a.hits.length===0?c.show({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",color:"#e3545b",position:"topRight"}):(d=a.totalHits,p(a.hits,o.gallery),d>l*15&&o.loadButton.classList.remove("hidden"))}catch{c.show({title:"Error",message:"Something went wrong. Please try again later.",color:"#e3545b",position:"topRight"})}finally{m(),o.form.reset()}}async function S(s){l+=1,h();try{const e=await u(L,l);p(e.hits,o.gallery,!0),E(),d<=l*15&&(o.loadButton.classList.add("hidden"),c.show({title:"Error",message:"We're sorry, but you've reached the end of search results.",color:"#ef4040",position:"bottomCenter"}))}catch{c.show({title:"Error",message:"Something went wrong. Please try again later.",color:"#ef4040",position:"bottomCenter"})}finally{m()}}function h(){o.loader.classList.remove("hidden")}function m(){o.loader.classList.add("hidden")}function E(){const e=o.gallery.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
