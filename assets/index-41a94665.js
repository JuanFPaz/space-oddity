(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerPolicy&&(n.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?n.credentials="include":c.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(c){if(c.ep)return;c.ep=!0;const n=r(c);fetch(c.href,n)}})();function i(e=null){document.querySelector("article.articleForm").innerHTML=`
                 <form class="d-flex flex-row flex-wrap justify-content-center">
                    <label for="input-date" id="label-date" class="d-block">
                      <input
                        class="form-control aa"
                        id="input-date"
                        type="date"
                        name="date"
                        min="1995-06-16"
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
      `,f(),m(e)}function d(){const e=new Date,t=String(e.getDate()+1).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0");return`${e.getFullYear()}-${r}-${t}`}function u(e){const t=new Date(e),r=String(t.getDate()+1).padStart(2,"0"),o=String(t.getMonth()+1).padStart(2,"0");return`${t.getFullYear()}-${o}-${r}`}function f(){const e=document.getElementById("input-date");e.max=d()}function m(e){const t=document.getElementById("input-date");e&&(t.value=u(e))}const h=window.location.search,l=new URLSearchParams(h),a=l.get("date");console.log(l);console.log(a);const p="9d3ii44W8GRaQvkghYy3Om9cRI7Chb3ZQM8jx1d0";function v(){a?fetch(`https://api.nasa.gov/planetary/apod?date=${a}&api_key=${p}`).then(e=>e.json()).then(e=>{if(e.code===400){console.log(e);const{code:t,msg:r}=e,o=new Error(r);throw o.code=t,o}if(e.code===404){console.log(e);const{code:t,msg:r}=e,o=new Error(r);throw o.code=t,o}if(e.media_type!=="video"){const{title:t,date:r,hdurl:o,explanation:c}=e;console.log(e),document.querySelector("section").innerHTML=`
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
              <div class="col-10 col-lg-12">
                <article class="articleNasa d-flex flex-column flex-lg-row-reverse flex-align-items-lg-end">
                    <header>
                        <h2>${t}</h2>
                        <h3>${r}</h3>
                        <div class='img-flex d-flex justify-content-center'>
                            <div class="img-contenedor">
                                <img class="rounded img-fluid" src="${o}"/>
                            </div>
                        </div>
                    </header>
                  <div class="text-container">
                    <p>
                      ${c}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
          `,i(r)}else{const{title:t,date:r,url:o,explanation:c}=e;document.querySelector("section").innerHTML=`
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-10 col-lg-12">
                <header class="headerForm d-flex flex-column">
                  <h1>Buscar nueva fecha:</h1>
                </header>
                <article class="articleForm d-flex flex-column">
                </article>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-10 col-lg-12">
                <article class="articleNasa d-flex flex-column d-flex flex-column flex-lg-row-reverse flex-align-items-lg-end">
                    <header>
                        <h2>${t}</h2>
                        <h3>${r}</h3>
                    </header>
                    <div class="text-container">
                      <p>
                        ${c}
                      </p>
                    </div>
                    <div class='img-flex d-flex justify-content-center'>
                      <div class="ratio ratio-16x9">
                        <iframe src="${o}"/>
                      </div>
                    </div>
                </article>
              </div>
            </div>
          </div>
          `,i(r)}}).catch(e=>{const{code:t,message:r}=e;document.querySelector("section").innerHTML=`
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
                <article class="articleNasa articleError d-flex flex-column">
                    <div class='text-container'>
                        <p>Ground control to Major Tom</p>
                        <p>Your request's dead, there's something wrong</p>
                        <p>Error: ${t} - ${r}</p>
                        <p></p>
                    </div>
                </article>
              </div>
            </div>
          </div>
    `,i()}):(document.querySelector("section.section-form").innerHTML=`
    <div class='container-fluid'>
      <div class="row justify-content-center">
        <div class="col-10">
          <article class="articleHome">
            <h1>Hola, bienvenide.</h1>
            <p>Estoy en busqueda de las fotos mas bonitas que sube la Nasa a diario.</p>
            <p>Asi que si te interesa en ayudarme a buscar las fotos mas bonitas de todas, avisame y enviamelas por correo :D</p>
          </article>
          <article class="articleForm articleBottomRadius d-flex justify-content-center">
          </article>
        </div>
      </div>
    </div>
      `,i())}document.querySelector("#app").innerHTML=`
    <header class="fixed-top header-app d-flex align-items-center justify-content-center">           
     <h1>
      <a href='/'>
        spaceoddity.jpaz.ar
      </a>
     </h1>
    </header>
  <main class="main-app background-img d-flex flex-column justify-content-center">
    <section class="section-form">
    </section>
  </main>
  <footer >
    2024
  </footer>

`;v();
