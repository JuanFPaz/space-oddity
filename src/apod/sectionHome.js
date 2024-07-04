import inputFecha from '../input/inputFecha'

function createSectionHome () {
  document.querySelector('main').innerHTML = `
      <div class="row justify-content-center m-0 ">
        <div class="col-12 col-md-10 col-lg-8">
            <section class="sectionHome d-flex flex-column align-items-center justify-content-center">
                <div class="bienvenidaContainer col-12">
                    <h1>Welcome Abord!</h1>
                    <p>I am on a quest to find the most beautiful photos provided daily by NASA. Enter a date in the input field below.</p>
                    <p>So, put your helmet on... Commencing  countdown... Engines on... Checks ignition... and may God's love be with you.</p>
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
