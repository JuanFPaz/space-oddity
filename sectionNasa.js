import cat from './cat.jpg'

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
          document.querySelector('div.main section').innerHTML = `
          <h1>${title}</h1>
          <h2>${date}</h2>
          <img src=${hdurl}>
          <p>${explanation}</p>
          `
        } else {
          console.log(data)
          const { title, date, url, explanation } = data
          document.querySelector('div.main section').innerHTML = `
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
        document.querySelector('div.main section').innerHTML = `
        <h1>Error: ${err.message}</h1>
    `
      })
  } else {
    document.querySelector('div.main section').innerHTML = `
        <h1>Busca una Fecha en la barrita de busqueda, y mira la foto q sale :D</h1>
        <img id=cat src=${cat}>
        `
  }
}
