import createHeader from './src/header'
import createMain from './src/main'
import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="fixed-top header-app d-flex align-items-center justify-content-center">
  </header>
  <main class="d-flex flex-column justify-content-center p-0">
  </main>

`
createHeader()
createMain()
