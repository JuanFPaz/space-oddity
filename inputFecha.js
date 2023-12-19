export default function inputFecha () {
  document.querySelector('div.main header').innerHTML = `
    <form>
        <label class="form-date__label" for="input-date" >Buscar Por fecha:
        <input
        class="form-date__input"
        type="date"
        id="input-date"
        name="date"
        min="1996-06-16" 
        max=""
        required
        />
        </label>

        <button type="submit">Buscar</button>
  </form>
      `

  actualizarFechaMax()
}

// Utilities : Establecer atributo MAX con fecha actual
function obtenerFechaActual () {
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') // Enero es 0!
  const yyyy = today.getFullYear()
  return `${yyyy}-${mm}-${dd}`
}

// Actualiza dinámicamente el atributo max
function actualizarFechaMax () {
  const inputFecha = document.getElementById('input-date')
  inputFecha.max = obtenerFechaActual()
}
