(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=c(e);fetch(e.href,i)}})();function s(){document.querySelector("article.articleForm").innerHTML=`
  <form class="row row-cols-lg-auto g-3 align-items-center">
    <div class="col-12">
        <label for="input-date" >
          Buscar Por fecha:
        </label>
        <div class="input-group">
          <input
          class="form-control" id="input-date" aria-describedby="emailHelp"
          type="date"
          name="date"
          min="1996-06-16" 
          max=""
          required
          />    
        </div>

  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
  <form>
</form>
      `,d()}function l(){const t=new Date,r=String(t.getDate()).padStart(2,"0"),c=String(t.getMonth()+1).padStart(2,"0");return`${t.getFullYear()}-${c}-${r}`}function d(){const t=document.getElementById("input-date");t.max=l()}const u=window.location.search,f=new URLSearchParams(u),a=f.get("date"),m="9d3ii44W8GRaQvkghYy3Om9cRI7Chb3ZQM8jx1d0";function p(){a?fetch(`https://api.nasa.gov/planetary/apod?date=${a}&api_key=${m}`).then(t=>t.json()).then(t=>{if(t.code===400)throw Error(t.msg);if(t.media_type!=="video"){const{title:r,date:c,hdurl:o,explanation:e}=t;document.querySelector("section").innerHTML=`
          <div class='container-fluid'>
            <div class="row justify-content-center">
              <div class="col-8">
                <article class="articleNasa">
                        <div class='text-container'>
                          <h1>${r}</h1>
                          <h2>${c}</h2>
                          <p>${e}</p>
                        </div>
                        <div class='img-contenedor d-flex flex-column justify-content-center '>
                          <img class='rounded img-fluid' src=${o}>
                        </div>
                </article>
              </div>
            </div>
            <div class='container-fluid'>
              <div class="row justify-content-center">
                <div class="col-4">
                  <article class="articleForm">
                  </article>
                </div>
              </div>
            </div>
          </div>
          `,s()}else{console.log(t);const{title:r,date:c,url:o,explanation:e}=t;document.querySelector("section").innerHTML=`
          <h1>${r}</h1>
          <h2>${c}</h2>
          <p>${e}</p>
          <div class="iframe-container">
          <iframe src=${o}>
          </div>
          `}}).catch(t=>{console.log(t),document.querySelector("section").innerHTML=`
        <h1>Error: ${t.message}</h1>
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
  <main class="main">
    <header class="fixed-top">           
     <h1>cassini.jpaz.ar</h1>
    </header>
    <section class='background-img section-form d-flex align-items-center'>
    </section>
  </main>
  <footer>
    2024
  </footer>
`;p();
