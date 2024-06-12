/* eslint-disable no-unused-vars */
import sectionNasa from './sectionNasa'
import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="main">
    <header class="fixed-top">           
     <h1>cassini.jpaz.ar</h1>
    </header>
    <section class='background-img section-form d-flex align-items-center'>
    </section>
  </main>
  <footer>
    2024
  </footer>
`

sectionNasa()
