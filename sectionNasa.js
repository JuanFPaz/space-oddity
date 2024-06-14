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
          console.log(data)
          const { code, msg } = data
          const err = new Error(msg)
          err.code = code
          throw err
        }
        if (data.code === 404) {
          console.log(data)
          const { code, msg } = data
          const err = new Error(msg)
          err.code = code
          throw err
        }

        if (data.media_type !== 'video') {
          const { title, date, hdurl, explanation } = data
          console.log(data)
          document.querySelector('section').innerHTML = `
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
                        <h2>${title}</h2>
                        <h3>${date}</h3>
                    </header>
                    <div class="text-container">
                      <p>
                        ${explanation}
                      </p>
                    </div>
                    <div class='img-flex d-flex justify-content-center'>
                      <div class="ratio ratio-16x9">
                        <iframe src="${url}"/>
                      </div>
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
        const { code, message } = err
        document.querySelector('section').innerHTML = `
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
                        <p>Error: ${code} - ${message}</p>
                        <p></p>
                    </div>
                </article>
              </div>
            </div>
          </div>
    `
        inputFecha()
      })
  } else {
    document.querySelector('section.section-form').innerHTML = `
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
      `
    inputFecha()
  }
}
