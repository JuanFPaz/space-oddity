(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function l(){document.querySelector("header").innerHTML=`
    <h1>
      <a href='/' translate=no>
        spaceoddity.jpaz.ar
      </a>
     </h1>
    `}function i(n=null){document.querySelector(".formContainer").innerHTML=`
                 <form class="d-flex flex-column">
                    <label for="input-date" id="label-date" class="d-block">
                      <input
                        class="form-control"
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
                      Search
                    </button>
                  </form>
      `,m(),f(n)}function d(){const n=new Date,c=String(n.getDate()+1).padStart(2,"0"),t=String(n.getMonth()+1).padStart(2,"0");return`${n.getFullYear()}-${t}-${c}`}function u(n){const c=new Date(n),t=String(c.getDate()+1).padStart(2,"0"),o=String(c.getMonth()+1).padStart(2,"0");return`${c.getFullYear()}-${o}-${t}`}function m(){const n=document.getElementById("input-date");n.max=d()}function f(n){const c=document.getElementById("input-date");n&&(c.value=u(n))}const p="9d3ii44W8GRaQvkghYy3Om9cRI7Chb3ZQM8jx1d0";async function v(n){let c;try{const t=await fetch(`https://api.nasa.gov/planetary/apod?date=${n}&api_key=${p}`);if(console.log(t),!t.ok){const{status:o}=t,e=new Error("Ocurrio un error obteniendo los datos de la API Nasa");throw e.code=o,e}c=await t.json()}catch(t){const{code:o,message:e}=t;document.querySelector("main").innerHTML=`
    <div class="row justify-content-center m-0" >
        <div class="col-12 col-md-10 col-lg-8">
          <section class="sectionError d-flex flex-column align-items-center justify-content-center">
              <div class='errorContainer col-12'>
                <p>Ground control to Major Tom</p>
                <p>Your request's dead, there's something wrong</p>
                <p>Error: ${o} - ${e}</p>
              </div>
              <div class="formContainer col-6">
              </div>
          </section>
        </div>
      </div>
    `,i();return}try{if(c.media_type!=="video"){const{title:t,date:o,hdurl:e,explanation:r}=c;document.querySelector("main").innerHTML=`
        <div class="row justify-content-center m-0">
            <div class="col-12 col-md-10">
                <section class="sectionApod">
                    <div class='formHeader  d-flex flex-column align-items-center justify-content-center'>
                      <h1>Please select a date:</h1>
                      <div class="formContainer col-8 col-lg-4">
                      </div>
                    </div>
                    <div class="apodContainer">
                        <div class="apodHeader">
                            <h2>${t}</h2>
                            <h3>${o}</h3>
                        </div>
                        <div class="apodBody row">
                            <div class="col-12 col-xl-6">
                                <img class="rounded img-fluid" src="${e}"/>
                            </div>                   
                            <p class='col-12 col-xl-6'>
                                ${r}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        `,i(o)}else{const{title:t,date:o,url:e,explanation:r}=c;document.querySelector("main").innerHTML=`
        <div class="row justify-content-center m-0">
            <div class="col-12 col-md-10">
                <section class="sectionApod ">
                    <div class='formHeader  d-flex flex-column align-items-center justify-content-center'>
                      <h1>Please select a date:</h1>
                      <div class="formContainer col-8 col-lg-4">
                      </div>
                    </div>
                    <div class="apodContainer">
                        <div class="apodHeader">
                            <h2>${t}</h2>
                            <h3>${o}</h3>
                        </div>
                        <div class="apodBody d-flex flex-column-reverse flex-xl-row-reverse">
                            <p class='col-12 col-xl-6'>
                              ${r}
                            </p>
                            <div class="col-12 col-xl-6">
                              <div class="ratio ratio-16x9">
                                  <iframe src="${e}"/>
                              </div>
                            </div>                   
                        </div>
                    </div>
                </section>
            </div>
        </div>
        `,i(o)}}catch(t){const{code:o,message:e}=t;document.querySelector("main").innerHTML=`
      <div class="row justify-content-center m-0">
        <div class="col-12 col-md-10 col-lg-8">
          <section class="sectionError d-flex flex-column align-items-center justify-content-center">
              <div class='errorContainer col-12'>
                <p>Ground control to Major Tom</p>
                <p>Your request's dead, there's something wrong</p>
                <p>Error: ${o} - ${e}</p>
              </div>
              <div class="formContainer col-6">
              </div>
          </section>
        </div>
      </div>
    `,i(n)}}function y(){document.querySelector("main").innerHTML=`
      <div class="row justify-content-center m-0 ">
        <div class="col-12 col-md-10 col-lg-8">
            <section class="sectionHome d-flex flex-column align-items-center justify-content-center">
                <div class="bienvenidaContainer col-12">
                    <h1>Welcome Abord!</h1>
                    <p>I am on a quest to find the most beautiful photos provided daily by NASA. Enter a date in the input field below.</p>
                    <p>So, put your helmet on... Commencing  countdown... Engines on... Checks ignition... and may God's love be with you.</p>
                </div>
                <div class="formContainer col-6">
                </div>
            </section>
        </div>
      </div>
    `,i()}const h=window.location.search,g=new URLSearchParams(h),a=g.get("date");function x(){a?v(a):y()}document.querySelector("#app").innerHTML=`
  <header class="fixed-top header-app d-flex align-items-center justify-content-center">
  </header>
  <main class="d-flex flex-column justify-content-center p-0">
  </main>

`;l();x();
