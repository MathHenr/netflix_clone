// api functions
import {
  getMovieDetails,
  getCastDetails,
  getSeasonDetail,
  getSimilarTitleDetails,
} from '../api/tmdb/tmdb'

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

  const loadSeasonData = async (id, season) => {
    try {
      const seasonData = await getSeasonDetail(id, season)
      return seasonData
    } catch (error) {
      console.log(new Error())
      return null
    }
  }

  const loadSimilarTitleData = async (type, id) => {
    try {
      const similar = await getSimilarTitleDetails(type, id)
      return similar.results
    } catch (error) {
      console.log(new Error())
      return null
    }
  }

  return { loadMovieData, loadCastData, loadSeasonData, loadSimilarTitleData }
}
