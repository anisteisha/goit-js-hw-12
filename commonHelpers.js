import{a as g,S as b,i as s}from"./assets/vendor-b11e2a50.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}})();const L="44428649-a15122ccea82814442a666457",E="https://pixabay.com/api/";async function u(e,o=1,l=15){return(await g.get(E,{params:{key:L,q:e,image_type:"photo",page:o,per_page:l}})).data}let i;function y(e,o){if(!Array.isArray(e)){console.error("Expected images to be an array, but got:",e);return}const l=e.map(r=>`
    <li>
      <a href="${r.largeImageURL}" class="gallery-item">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy">
        <div class="info">
          <p class="info-item"><b>Likes</b> ${r.likes}</p>
          <p class="info-item"><b>Views</b> ${r.views}</p>
          <p class="info-item"><b>Comments</b> ${r.comments}</p>
          <p class="info-item"><b>Downloads</b> ${r.downloads}</p>
        </div>
      </a>
    </li>
  `).join("");o.insertAdjacentHTML("beforeend",l),i&&i.destroy(),i=new b(".gallery a",{captionsData:"alt",captionDelay:250}),i.refresh()}function B(e){e.innerHTML=""}function p(){const e=document.getElementById("loader");e?e.classList.remove("hidden"):console.error("Loader element not found.")}function h(){const e=document.getElementById("loader");e?e.classList.add("hidden"):console.error("Loader element not found.")}function w(){const e=document.getElementById("load-more-btn");e?e.classList.remove("hidden"):console.error("Load more button element not found.")}function m(){const e=document.getElementById("load-more-btn");e?e.classList.add("hidden"):console.error("Load more button element not found.")}const v=document.querySelector("#search-form"),f=document.getElementById("gallery");document.getElementById("loader");const I=document.getElementById("load-more-btn");let c="",a=1;m();v.addEventListener("submit",async e=>{if(e.preventDefault(),c=e.target.elements.searchQuery.value.trim(),!c){s.error({title:"Error",message:"Search query cannot be empty!"});return}a=1,B(f),m(),p();try{const o=await u(c,a);o.hits.length===0?s.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):(y(o.hits,f),o.totalHits>a*15&&w())}catch(o){console.error(o),s.error({title:"Error",message:"Failed to fetch images!"})}finally{h()}});I.addEventListener("click",async()=>{a+=1,p();try{const e=await u(c,a);y(e.hits,f),a*15>=e.totalHits&&(m(),s.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results."}))}catch(e){console.error(e),s.error({title:"Error",message:"Failed to fetch images!"})}finally{h()}});console.log("iziToast loaded:",typeof s<"u");console.log("SimpleLightbox loaded:",typeof SimpleLightbox<"u");
//# sourceMappingURL=commonHelpers.js.map
