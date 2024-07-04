export default function inputFecha (date = null) {
  document.querySelector('.formContainer').innerHTML = `
                 <form class="d-flex flex-column">
                    <label for="input-date" id="label-date" class="d-block">
                      <input
                        class="form-control"
                        id="input-date"
                        type="date"
                        name="date"
                        min="1995-06-16"
                        max="2024-06-14"
                        required=""
                      />
                    </label>
                    <button
                      type="submit"
                      id="submit-input"
                      class="btn btn-outline-light"
                    >
                      Buscar
                    </button>
                  </form>
      `

  actualizarFechaMax()
  establecerCurrentValue(date)
}

// Utilities : Establecer atributo MAX con fecha actual
function obtenerFechaActual () {
  const today = new Date()
  const dd = String(today.getDate() + 1).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') // Enero es 0!
  const yyyy = today.getFullYear()
  return `${yyyy}-${mm}-${dd}`
}

function obtenerFechaIngresada (date) {
  const currentDate = new Date(date)
  const dd = String(currentDate.getDate() + 1).padStart(2, '0')
  const mm = String(currentDate.getMonth() + 1).padStart(2, '0') // Enero es 0!
  const yyyy = currentDate.getFullYear()
  return `${yyyy}-${mm}-${dd}`
}

// Actualiza dinámicamente el atributo max
function actualizarFechaMax () {
  const inputFecha = document.getElementById('input-date')
  inputFecha.max = obtenerFechaActual()
}

function establecerCurrentValue (date) {
  const inputFecha = document.getElementById('input-date')
  if (!date) {
    return
  }
  inputFecha.value = obtenerFechaIngresada(date)
}
