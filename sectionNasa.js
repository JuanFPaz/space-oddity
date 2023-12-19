const queryString = window.location.search
// Crear un objeto URLSearchParams para manejar los parámetros
const urlParams = new URLSearchParams(queryString)
const DATE = urlParams.get('date')
const APIKEY = '9d3ii44W8GRaQvkghYy3Om9cRI7Chb3ZQM8jx1d0'

export default function sectionNasa () {
  fetch(`https://api.nasa.gov/planetary/apod?date=${DATE}&api_key=${APIKEY}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.code === 400) {
        throw Error(data.msg)
      }
      const { title, date, hdurl, explanation } = data
      document.querySelector('div.main section').innerHTML = `
        <h1>${title}</h1>
        <h2>${date}</h2>
        <img src=${hdurl}>
        <p>${explanation}</p>
    `
    })
    .catch((err) => {
      console.log(err)
      document.querySelector('div.main section').innerHTML = `
        <h1>Error: ${err.message}</h1>
    `
    })
}
