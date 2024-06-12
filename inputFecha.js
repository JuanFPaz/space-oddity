export default function inputFecha () {
  document.querySelector('article.articleForm').innerHTML = `
  <form class="row row-cols-lg-auto g-3 align-items-center">
    <div class="col-12">
        <label for="input-date" >
          Buscar Por fecha:
        </label>
        <div class="input-group">
          <input
          class="form-control" id="input-date" aria-describedby="emailHelp"
          type="date"
          name="date"
          min="1996-06-16" 
          max=""
          required
          />    
        </div>

  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
  <form>
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
