/* eslint-disable no-unused-vars */
import sectionNasa from './sectionNasa'
import './style.css'

document.querySelector('#app').innerHTML = `
    <header class="fixed-top header-app">           
     <h1>
      <a href='https://spaceoditty.jpaz.ar'>
           spaceoddity.jpaz.ar
      </a>
     </h1>
    </header>
  <main class="main">
    <section class='background-img section-form d-flex flex-sm-column justify-content-sm-around flex-lg-row align-items-lg-center'>
    </section>
  </main>
  <footer>
    2024
  </footer>
`

sectionNasa()
