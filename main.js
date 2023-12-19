/* eslint-disable no-unused-vars */
import inputFecha from './inputFecha'
import sectionNasa from './sectionNasa'
import './style.css'

// function main () {
//   /* TODO: Crear un contenedor para la imagne */
//   document.querySelector('.main').innerHTML = `
//     ${datos.map(d => {
//       return `
//       <h1>${d.title}</h1>
//       <h2>${d.date}</h2>
//       <img src=${d.hdurl}>
//       <p>${d.explanation}</p>
//       `
//     })}
// }

document.querySelector('#app').innerHTML = `
  <div class="main">
    <header></header>
    <section></section>
  </div>
`

inputFecha()
sectionNasa()
