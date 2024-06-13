(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();function s(e=null){document.querySelector("article.articleForm").innerHTML=`
        <form class="row ${e?"align-items-center":"justify-content-center"}">
          <label for="input-date" id='label-date' class='d-block' >
          <input
            class="form-control aa" 
            id="input-date" 
            type="date"
            name="date"
            min="1996-06-16" 
            max=""
            required
            />    
          </label>
          <button type="submit" id="submit-input" class="btn btn-outline-light">Buscar</button>
      </form>
      `,f(),m(e)}function d(){const e=new Date,n=String(e.getDate()+1).padStart(2,"0"),c=String(e.getMonth()+1).padStart(2,"0");return`${e.getFullYear()}-${c}-${n}`}function u(e){const n=new Date(e),c=String(n.getDate()+1).padStart(2,"0"),i=String(n.getMonth()+1).padStart(2,"0");return`${n.getFullYear()}-${i}-${c}`}function f(){const e=document.getElementById("input-date");e.max=d()}function m(e){const n=document.getElementById("input-date");e&&(n.value=u(e))}const y=window.location.search,l=new URLSearchParams(y),a=l.get("date");console.log(l);console.log(a);const p="9d3ii44W8GRaQvkghYy3Om9cRI7Chb3ZQM8jx1d0";function h(){a?fetch(`https://api.nasa.gov/planetary/apod?date=${a}&api_key=${p}`).then(e=>e.json()).then(e=>{if(e.code===400)throw Error(e.msg);if(e.media_type!=="video"){const{title:n,date:c,hdurl:i,explanation:t}=e;document.querySelector("section").innerHTML=`
          <div class='container-fluid div-form'>
              <div class="row justify-content-center">
                <div class="col-lg-6 col-sm-4">
                  <header class="headerForm">
                    <h1>Buscar nueva fecha:</h1>
                  </header>
                  <article class="articleForm">
                  </article>
                </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-10">
                <article class="articleNasa d-flex flex-sm-column-reverse flex-lg-row">
                        <div class='text-container'>
                          <h2>${n}</h2>
                          <h3>${c}</h3>
                          <p>${t}</p>
                        </div>
                        <div class='img-contenedor d-flex flex-column align-items-sm-center justify-content-lg-center '>
                          <img class='rounded' src=${i}>
                        </div>
                </article>
              </div>
            </div>
          </div>
          `,s(c)}else{const{title:n,date:c,url:i,explanation:t}=e;document.querySelector("section").innerHTML=`
          <div class='container-fluid div-form'>
              <div class="row justify-content-center">
                <div class="col-4">
                  <article class="articleForm">
                  </article>
                </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-10">
                <article class="articleNasa">
                        <div class='text-container'>
                          <h2>${n}</h2>
                          <h3>${c}</h3>
                          <p>${t}</p>
                        </div>
                        <div class='iframe-container d-flex flex-column justify-content-center '>
                          <iframe class='' src=${i}>
                        </div>
                </article>
              </div>
            </div>
          </div>
          `,s(c)}}).catch(e=>{console.log(e),document.querySelector("section").innerHTML=`
        <h1>Error: ${e.message}</h1>
    `}):(document.querySelector("section.section-form").innerHTML=`
    <div class='container-fluid'>
      <div class="row justify-content-center">
        <div class="col-4">
          <article class="articleForm">
          </article>
        </div>
      </div>
    </div>
      `,s())}document.querySelector("#app").innerHTML=`
    <header class="fixed-top header-app">           
     <h1>
      <a href='https://spaceoditty.jpaz.ar'>
           spaceoddity.jpaz.ar
      </a>
     </h1>
    </header>
  <main class="main">
    <section class='background-img section-form d-flex flex-sm-column justify-content-sm-around flex-lg-row align-items-lg-center'>
    </section>
  </main>
  <footer>
    2024
  </footer>
`;h();
