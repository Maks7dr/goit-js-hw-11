import{S as p,i}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="48145276-ba1887f72c90a3fcdb02285cd";async function y(a){const o=new URLSearchParams({key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{const r=await fetch(`https://pixabay.com/api/?${o}`);if(!r.ok)throw new Error("Failed to fetch images");return r.json()}catch(r){throw console.error(r.message),r}}let c=null;function d(a){const o=document.querySelector(".gallery"),r=a.map(({webformatURL:s,largeImageURL:e,tags:t,likes:n,views:u,comments:f,downloads:m})=>`<li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${t}"
            />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${n}</p>
            <p><b>Views:</b> ${u}</p>
            <p><b>Comments:</b> ${f}</p>
            <p><b>Downloads:</b> ${m}</p>
          </div>
        </li>`).join("");o.innerHTML=r,c?c.refresh():c=new p(".gallery a",{captionsData:"alt",captionDelay:250})}function h(){document.querySelector(".gallery").innerHTML=""}const l=document.querySelector("#formImg"),b=document.querySelector("#searchImg");l.addEventListener("submit",async a=>{a.preventDefault();const o=b.value.trim();if(!o){i.warning({title:"Warning",message:"Please enter a search term!"});return}l.reset(),h();try{const r=await y(o);if(r.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}d(r.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}});
//# sourceMappingURL=index.js.map
