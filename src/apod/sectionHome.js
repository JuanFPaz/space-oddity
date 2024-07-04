import inputFecha from '../input/inputFecha'

function createSectionHome () {
  document.querySelector('main').innerHTML = `
      <div class="row justify-content-center m-0 ">
        <div class="col-12 col-md-10 col-lg-8">
            <section class="sectionHome d-flex flex-column align-items-center justify-content-center">
                <div class="bienvenidaContainer col-12">
                    <h1>Hola, bienvenide.</h1>
                    <p>Estoy en busqueda de las fotos mas bonitas que sube la Nasa a diario.</p>
                    <p>Asi que si te interesa en ayudarme a buscar las fotos mas bonitas de todas, avisame y enviamelas por correo :D</p>
                </div>
                <div class="formContainer col-6">
                </div>
            </section>
        </div>
      </div>
    `
  inputFecha()
}

export default createSectionHome
