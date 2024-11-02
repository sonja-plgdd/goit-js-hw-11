import{S as l,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const u="https://pixabay.com/api/",a=document.querySelector(".loader");function d(){a.classList.add("active")}function f(){a.classList.remove("active")}function m(s){const o=new URLSearchParams({key:"46844024-31822d2c5a5dcad2dc3c03c6f",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return d(),fetch(`${u}?${o}`).then(e=>{if(!e.ok)throw new Error;return e.json()}).finally(()=>{f()})}const h=document.querySelector(".gallery");function p(s){const o=s.hits.map(e=>`<li class="gallery-item">
    <div class="img-wrapper">
  <a class="gallery-link" href=${e.largeImageURL}>
  <img class='gallery-image' src=${e.webformatURL} data-source=${e.largeImageURL} alt='${e.tags}'/>
  </a></div>
  <ul class="card">
  <li>
  <h3>Likes</h3>
  <p>${e.likes}</p></li>
  <li>
  <h3>Views</h3>
  <p>${e.views}</p>
  </li>
  <li>
  <h3>Comments</h3>
  <p>${e.comments}</p></li>
  <li><h3>Downloads</h3>
  <p>${e.downloads}</p></li>
  </ul>
  </li>`).join("");h.insertAdjacentHTML("beforeend",o),new l(".gallery a")}const g=document.querySelector(".form"),y=document.querySelector(".gallery");g.addEventListener("submit",L);function L(s){s.preventDefault();const o=s.target.elements[0].value;o!==""&&(y.innerHTML="",m(o).then(e=>{e.hits.length===0&&c.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",maxWidth:432}),p(e)}).catch(e=>{console.log(e)}))}
//# sourceMappingURL=index.js.map
