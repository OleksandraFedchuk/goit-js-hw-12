import{S as l,i as c}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=s=>{const o=new URLSearchParams({q:s,key:"48265594-3edacf02e8cadda91195713cc",image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},d=new l(".gallery a",{captionsData:"alt",captionDelay:200});function p({webformatURL:s,largeImageURL:o,tags:r,likes:n,views:e,comments:t,downloads:a}){return`<div class="card">
    <div class="card-apperance">
<a href="${o}" class="card-link">
<img src="${s}" alt="${r}">
</a>
</div>
<div class="card-discription">
<p class="discription">Likes:${n}</p>
<p class="discription">Views:${e}</p>
<p class="discription">Comments:${t}</p>
<p class="discription">Downloads:${a}</p>
</div>
</div>`}function f(s,o){const r=s.map(p).join("");o.innerHTML=r,d.refresh()}const i={button:document.querySelector(".btn"),form:document.querySelector(".form"),input:document.querySelector(".input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.form.addEventListener("submit",m);function m(s){s.preventDefault();const o=s.currentTarget.elements.query.value;if(o===""){c.show({class:"wave-stroke",message:"🚫Sorry, there are no images matching your search query. Please try again!",position:"topRight",closeOnEscape:!0,closeOnClick:!0,backgroundColor:"#e3545b"});return}i.gallery.innerHTML="",h(),u(o).then(r=>{r.hits.length===0?c.show({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",color:"#e3545b",position:"topRight"}):f(r.hits,i.gallery)}).catch(r=>{c.show({title:"Error",message:"Something went wrong. Please try again later.",color:"#e3545b",position:"topRight"})}).finally(()=>{y(),i.form.reset()})}function h(){i.loader.classList.remove("hidden")}function y(){i.loader.classList.add("hidden")}
//# sourceMappingURL=index.js.map
