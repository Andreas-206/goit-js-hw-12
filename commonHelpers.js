import{S as y,a as f,i as E}from"./assets/vendor-bad0427b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const I="https://pixabay.com/api/",w="41701983-23ca5d5908e2c78927e8095f2",P=40;new y(".gallery-item");const L=()=>{const e=new URL(I);return e.searchParams.append("key",w),e.searchParams.append("image_type","photo"),e.searchParams.append("orientation","horizontal"),e.searchParams.append("safesearch",!0),e},d=async(e,a=1)=>{try{const t=L();return t.searchParams.append("q",e),t.searchParams.append("page",a),t.searchParams.append("per_page",P),(await f.get(t.toString())).data.hits}catch(t){throw console.error("Error fetching images:",t),t}},m=e=>{const a=document.getElementById("gallery");e.forEach(t=>{const{webformatURL:o,largeImageURL:r,tags:n,likes:i,views:u,comments:p,downloads:h}=t;a.insertAdjacentHTML("beforeend",`
    <li class="gallery-item">
      <a href="${r}">
        <img src="${o}" alt="${n}"/>
      </a>
      <div class="image-info">
        <p>Likes: ${i}</p>
        <p>Views: ${u}</p>
        <p>Comments: ${p}</p>
        <p>Downloads: ${h}</p>
      </div>
    </li>
    `)})},g=()=>{document.getElementById("loader").style.display="block"},c=()=>{document.getElementById("loader").style.display="none"},s=(e,a="info")=>{E[a]({title:e,position:"topCenter"})},B=async e=>{e.preventDefault();const t=document.getElementById("search-input").value.trim();if(t.length<3){s("Please enter a search query with at least 3 characters","warning");return}g();try{const o=await d(t);c(),o.length>0?(m(o),document.getElementById("load-more").style.display="block"):s("Sorry, there are no images matching your search query. Please try again.","error")}catch{c(),s("Error fetching images. Please try again later.","error")}},b=async()=>{const a=document.getElementById("search-input").value.trim();if(a.length<3){s("Please enter a search query with at least 3 characters","warning");return}g();try{const t=await d(a,l);c(),t.length>0?(m(t),l++,window.scrollBy(0,v())):(s("No more images t load","info"),document.getElementById("load-more").style.display="none")}catch{c(),s("Error fetching images. Please try again later.","error")}},v=()=>{const e=document.querySelector(".gallery-item");return e?e.getBoundingClientRect().height:0};let l=1;const S=document.getElementById("form");S.addEventListener("submit",B);const q=document.getElementById("load-more");q.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map
