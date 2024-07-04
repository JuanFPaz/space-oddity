import createSectionAPOD from './apod/sectionApod'
import createSectionHome from './apod/sectionHome'
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const DATE = urlParams.get('date')

export default function createMain () {
  if (DATE) {
    createSectionAPOD(DATE)
  } else {
    createSectionHome()
  }
}
