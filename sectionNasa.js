import inputFecha from './inputFecha'

const queryString = window.location.search
// Crear un objeto URLSearchParams para manejar los parámetros
const urlParams = new URLSearchParams(queryString)
const DATE = urlParams.get('date')
console.log(urlParams)
console.log(DATE)
const APIKEY = '9d3ii44W8GRaQvkghYy3Om9cRI7Chb3ZQM8jx1d0'

export default function sectionNasa () {
  if (DATE) {
    fetch(`https://api.nasa.gov/planetary/apod?date=${DATE}&api_key=${APIKEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 400) {
          throw Error(data.msg)
        }

        if (data.media_type !== 'video') {
          const { title, date, hdurl, explanation } = data
          document.querySelector('section').innerHTML = `
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
                          <h2>${title}</h2>
                          <h3>${date}</h3>
                          <p>${explanation}</p>
                        </div>
                        <div class='img-contenedor d-flex flex-column align-items-sm-center justify-content-lg-center '>
                          <img class='rounded' src=${hdurl}>
                        </div>
                </article>
              </div>
            </div>
          </div>
          `
          inputFecha(date)
        } else {
          const { title, date, url, explanation } = data
          document.querySelector('section').innerHTML = `
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
                          <h2>${title}</h2>
                          <h3>${date}</h3>
                          <p>${explanation}</p>
                        </div>
                        <div class='iframe-container d-flex flex-column justify-content-center '>
                          <iframe class='' src=${url}>
                        </div>
                </article>
              </div>
            </div>
          </div>
          `
          inputFecha(date)
        }
      })
      .catch((err) => {
        console.log(err)
        document.querySelector('section').innerHTML = `
        <h1>Error: ${err.message}</h1>
    `
      })
  } else {
    document.querySelector('section.section-form').innerHTML = `
    <div class='container-fluid'>
      <div class="row justify-content-center">
        <div class="col-4">
          <article class="articleForm">
          </article>
        </div>
      </div>
    </div>
      `
    inputFecha()
  }
}
