// api functions
import { getMovieDetails, getCastDetails } from '../api/tmdb/tmdb'

export function useFetchMovie() {
  const loadMovieData = async (type, id) => {
    try {
      const movie = await getMovieDetails(type, id)
      return movie
    } catch (error) {
      console.log(new Error())
      return
    }
  }

  const loadCastData = async (type, id) => {
    try {
      const cast = await getCastDetails(type, id)
      return cast
    } catch (error) {
      console.log(new Error())
      return null
    }
  }
  return { loadMovieData, loadCastData }
}
