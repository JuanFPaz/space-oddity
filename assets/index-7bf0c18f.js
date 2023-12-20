(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();function s(){document.querySelector("div.main header").innerHTML=`
    <form>
        <label class="form-date__label" for="input-date" >Buscar Por fecha:
        <input
        class="form-date__input"
        type="date"
        id="input-date"
        name="date"
        min="1996-06-16" 
        max=""
        required
        />
        </label>

        <button type="submit">Buscar</button>
  </form>
      `,d()}function u(){const t=new Date,r=String(t.getDate()).padStart(2,"0"),o=String(t.getMonth()+1).padStart(2,"0");return`${t.getFullYear()}-${o}-${r}`}function d(){const t=document.getElementById("input-date");t.max=u()}const l="/assets/cat-64b6116b.jpg",m=window.location.search,f=new URLSearchParams(m),a=f.get("date"),p="9d3ii44W8GRaQvkghYy3Om9cRI7Chb3ZQM8jx1d0";function h(){a?fetch(`https://api.nasa.gov/planetary/apod?date=${a}&api_key=${p}`).then(t=>t.json()).then(t=>{if(t.code===400)throw Error(t.msg);if(t.media_type!=="video"){const{title:r,date:o,hdurl:i,explanation:e}=t;document.querySelector("div.main section").innerHTML=`
          <h1>${r}</h1>
          <h2>${o}</h2>
          <img src=${i}>
          <p>${e}</p>
          `}else{console.log(t);const{title:r,date:o,url:i,explanation:e}=t;document.querySelector("div.main section").innerHTML=`
          <h1>${r}</h1>
          <h2>${o}</h2>
          <p>${e}</p>
          <div class="iframe-container">
          <iframe src=${i}>
          </div>
          `}}).catch(t=>{console.log(t),document.querySelector("div.main section").innerHTML=`
        <h1>Error: ${t.message}</h1>
    `}):document.querySelector("div.main section").innerHTML=`
        <h1>Busca una Fecha en la barrita de busqueda, y mira la foto q sale :D</h1>
        <img id=cat src=${l}>
        `}document.querySelector("#app").innerHTML=`
  <div class="main">
    <header></header>
    <section></section>
  </div>
`;s();h();
