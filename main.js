/* eslint-disable no-unused-vars */
import sectionNasa from './sectionNasa'
import './style.css'

document.querySelector('#app').innerHTML = `
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

`

sectionNasa()
