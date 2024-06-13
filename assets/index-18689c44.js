(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();function o(e=null){document.querySelector("article.articleForm").innerHTML=`
                 <form class="d-flex flex-row flex-wrap justify-content-center">
                    <label for="input-date" id="label-date" class="d-block">
                      <input
                        class="form-control aa"
                        id="input-date"
                        type="date"
                        name="date"
                        min="1996-06-16"
                        max="2024-06-14"
                        required=""
                      />
                    </label>
                    <button
                      type="submit"
                      id="submit-input"
                      class="btn btn-outline-light"
                    >
                      Buscar
                    </button>
                  </form>
      `,f(),m(e)}function d(){const e=new Date,n=String(e.getDate()+1).padStart(2,"0"),c=String(e.getMonth()+1).padStart(2,"0");return`${e.getFullYear()}-${c}-${n}`}function u(e){const n=new Date(e),c=String(n.getDate()+1).padStart(2,"0"),a=String(n.getMonth()+1).padStart(2,"0");return`${n.getFullYear()}-${a}-${c}`}function f(){const e=document.getElementById("input-date");e.max=d()}function m(e){const n=document.getElementById("input-date");e&&(n.value=u(e))}const h=window.location.search,l=new URLSearchParams(h),s=l.get("date");console.log(l);console.log(s);const y="9d3ii44W8GRaQvkghYy3Om9cRI7Chb3ZQM8jx1d0";function p(){s?fetch(`https://api.nasa.gov/planetary/apod?date=${s}&api_key=${y}`).then(e=>e.json()).then(e=>{if(e.code===400)throw Error(e.msg);if(e.media_type!=="video"){const{title:n,date:c,hdurl:a,explanation:t}=e;console.log(e),document.querySelector("section").innerHTML=`
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-6">
                <header class="headerForm d-flex flex-column">
                  <h1>Buscar nueva fecha:</h1>
                </header>
                <article class="articleForm d-flex flex-column">
                </article>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-10">
                <article class="articleNasa d-flex flex-column">
                    <header>
                        <h2>${n}</h2>
                        <h3>${c}</h3>
                        <div class='img-flex d-flex justify-content-center'>
                            <div class="img-contenedor">
                                <img class="rounded img-fluid" src="${a}"/>
                            </div>
                        </div>
                    </header>
                  <div class="text-container">
                    <p>
                      ${t}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
          `,o(c)}else{const{title:n,date:c,url:a,explanation:t}=e;document.querySelector("section").innerHTML=`
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-10">
                <header class="headerForm d-flex flex-column">
                  <h1>Buscar nueva fecha:</h1>
                </header>
                <article class="articleForm d-flex flex-column">
                </article>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-10">
                <article class="articleNasa d-flex flex-column">
                    <header>
                        <h2>${n}</h2>
                        <h3>${c}</h3>
                    </header>
                    <div class="text-container">
                      <p>
                        ${t}
                      </p>
                    </div>
                    <div class='img-flex d-flex justify-content-center'>
                      <div class="iframe-container">
                        <iframe src="${a}"/>
                      </div>
                    </div>
                </article>
              </div>
            </div>
          </div>
          `,o(c)}}).catch(e=>{console.log(e),document.querySelector("section").innerHTML=`
        <h1>Error: ${e.message}</h1>
    `}):(document.querySelector("section.section-form").innerHTML=`
    <div class='container-fluid'>
      <div class="row justify-content-center">
        <div class="col-10">
          <header class="headerHome">
            <h1>Hola, bienvenide.</h1>
            <p>Estoy en busqueda de las fotos mas bonitas que sube la Nasa a diario.</p>
            <p>Asi que si te interesa en ayudarme a buscar las fotos mas bonitas de todas, avisame y enviamelas por correo :D</p>
          </header>
          <article class="articleForm d-flex justify-content-center">
          </article>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-6">
          <article class="articleForm d-flex justify-content-center">
          </article>
        </div>
      </div>
    </div>
      `,o())}document.querySelector("#app").innerHTML=`
    <header class="fixed-top header-app d-flex align-items-center justify-content-center">           
     <h1>
      <a href='https://spaceoddity.jpaz.ar/'>
        spaceoddity.jpaz.ar
      </a>
     </h1>
    </header>
  <main class="main">
    <section class="background-img section-form d-flex flex-column justify-content-start">
    </section>
  </main>
  <footer>
    2024
  </footer>
`;p();
