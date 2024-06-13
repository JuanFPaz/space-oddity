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
          console.log(data)
          document.querySelector('section').innerHTML = `
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
                        <h2>${title}</h2>
                        <h3>${date}</h3>
                        <div class='img-flex d-flex justify-content-center'>
                            <div class="img-contenedor">
                                <img class="rounded img-fluid" src="${hdurl}"/>
                            </div>
                        </div>
                    </header>
                  <div class="text-container">
                    <p>
                      ${explanation}
                    </p>
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
                        <h2>${title}</h2>
                        <h3>${date}</h3>
                        <div class='img-flex d-flex justify-content-center'>
                            <div class="iframe-container">
                                <iframe msrc="${url}"/>
                            </div>
                        </div>
                    </header>
                  <div class="text-container">
                    <p>
                      ${explanation}
                    </p>
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
        <div class="col-6">
          <header class="headerHome">
            <h1>Hola, bienvenide.</h1>
            <p>Estoy en busqueda de las fotos mas bonitas que sube la Nasa a diario.</p>
            <p>Asi que si te interesa en ayudarme a buscar las fotos mas bonitas de todas, avisame y enviamelas por correo :D</p>
          </header>
          <article class="articleForm articleHome d-flex justify-content-center">
          </article>
        </div>
      </div>
    </div>
      `
    inputFecha()
  }
}
