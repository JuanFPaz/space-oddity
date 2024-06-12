import inputFecha from './inputFecha'

const queryString = window.location.search
// Crear un objeto URLSearchParams para manejar los parámetros
const urlParams = new URLSearchParams(queryString)
const DATE = urlParams.get('date')
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
          <div class='container-fluid'>
            <div class="row justify-content-center">
              <div class="col-8">
                <article class="articleNasa">
                        <div class='text-container'>
                          <h1>${title}</h1>
                          <h2>${date}</h2>
                          <p>${explanation}</p>
                        </div>
                        <div class='img-contenedor d-flex flex-column justify-content-center '>
                          <img class='rounded img-fluid' src=${hdurl}>
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
          `
          inputFecha()
        } else {
          console.log(data)
          const { title, date, url, explanation } = data
          document.querySelector('section').innerHTML = `
          <h1>${title}</h1>
          <h2>${date}</h2>
          <p>${explanation}</p>
          <div class="iframe-container">
          <iframe src=${url}>
          </div>
          `
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
