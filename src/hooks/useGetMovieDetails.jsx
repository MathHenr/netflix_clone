import { useState } from 'react'
import { getMovieDetails } from '../api/tmdb/tmdb'

export const useGetMovieDetails = () => {
  const [runtime, setRuntime] = useState(undefined)

  const loadMovieDetails = async (type, id) => {
    try {
      const movieDetails = await getMovieDetails(id, type)
      if (type === 'tv') {
        return setRuntime(movieDetails.number_of_seasons)
      } else if (type === 'movie') {
        const runtimeMovie = convertMinutesToHours(movieDetails.runtime)
        return setRuntime(runtimeMovie)
      }
    } catch (error) {
      console.log(error)
      return null
    }
  }

  function convertMinutesToHours(minutesRuntime) {
    const hours = minutesRuntime / 60
    const minutes = (hours - Math.floor(hours)) * 60
    return `${Math.floor(hours)}h ${Math.round(minutes)}min`
  }

  return { runtime, loadMovieDetails }
}
