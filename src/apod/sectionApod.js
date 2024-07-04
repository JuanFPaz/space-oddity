import inputFecha from '../input/inputFecha'

const APIKEY = '9d3ii44W8GRaQvkghYy3Om9cRI7Chb3ZQM8jx1d0'

async function createSectionAPOD (date) {
  let data
  try {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${APIKEY}`)
    console.log(res)
    if (!res.ok) {
      const { status } = res
      const err = new Error('Ocurrio un error obteniendo los datos de la API Nasa')
      err.code = status
      throw err
    }
    data = await res.json()
  } catch (err) {
    const { code, message } = err
    document.querySelector('main').innerHTML = `
    <div class="row justify-content-center m-0" >
        <div class="col-12 col-md-10 col-lg-8">
          <section class="sectionError d-flex flex-column align-items-center justify-content-center">
              <div class='errorContainer col-12'>
                <p>Ground control to Major Tom</p>
                <p>Your request's dead, there's something wrong</p>
                <p>Error: ${code} - ${message}</p>
              </div>
              <div class="formContainer col-6">
              </div>
          </section>
        </div>
      </div>
    `
    inputFecha()
    return
  }

  try {
    if (data.media_type !== 'video') {
      const { title, date, hdurl, explanation } = data

      document.querySelector('main').innerHTML = `
        <div class="row justify-content-center m-0">
            <div class="col-12 col-md-10">
                <section class="sectionApod">
                    <div class='formHeader  d-flex flex-column align-items-center justify-content-center'>
                      <h1>Buscar nueva fecha:</h1>
                      <div class="formContainer col-8 col-lg-4">
                      </div>
                    </div>
                    <div class="apodContainer">
                        <div class="apodHeader">
                            <h2>${title}</h2>
                            <h3>${date}</h3>
                        </div>
                        <div class="apodBody row">
                            <div class="col-12 col-xl-6">
                                <img class="rounded img-fluid" src="${hdurl}"/>
                            </div>                   
                            <p class='col-12 col-xl-6'>
                                ${explanation}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        `
      inputFecha(date)
    } else {
      const { title, date, url, explanation } = data
      document.querySelector('main').innerHTML = `
        <div class="row justify-content-center m-0">
            <div class="col-12 col-md-10">
                <section class="sectionApod ">
                    <div class='formHeader  d-flex flex-column align-items-center justify-content-center'>
                      <h1>Buscar nueva fecha:</h1>
                      <div class="formContainer col-8 col-lg-4">
                      </div>
                    </div>
                    <div class="apodContainer">
                        <div class="apodHeader">
                            <h2>${title}</h2>
                            <h3>${date}</h3>
                        </div>
                        <div class="apodBody d-flex flex-column-reverse flex-xl-row-reverse">
                            <p class='col-12 col-xl-6'>
                              ${explanation}
                            </p>
                            <div class="col-12 col-xl-6">
                              <div class="ratio ratio-16x9">
                                  <iframe src="${url}"/>
                              </div>
                            </div>                   
                        </div>
                    </div>
                </section>
            </div>
        </div>
        `
      inputFecha(date)
    }
  } catch (err) {
    const { code, message } = err
    document.querySelector('main').innerHTML = `
      <div class="row justify-content-center m-0">
        <div class="col-12 col-md-10 col-lg-8">
          <section class="sectionError d-flex flex-column align-items-center justify-content-center">
              <div class='errorContainer col-12'>
                <p>Ground control to Major Tom</p>
                <p>Your request's dead, there's something wrong</p>
                <p>Error: ${code} - ${message}</p>
              </div>
              <div class="formContainer col-6">
              </div>
          </section>
        </div>
      </div>
    `
    inputFecha(date)
  }
}

export default createSectionAPOD
