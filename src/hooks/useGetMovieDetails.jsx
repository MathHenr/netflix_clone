import { useState } from 'react'
import { getMovieDetails } from '../api/tmdb/tmdb'

export const useGetMovieDetails = () => {
  const [runtime, setRuntime] = useState(undefined)
  const [genres, setGenres] = useState([])
  const [homepage, setHomepage] = useState(null)

  const loadMovieDetails = async (type, id) => {
    try {
      const movieDetails = await getMovieDetails(id, type)
      if (type === 'tv') {
        setRuntime(movieDetails.number_of_seasons)

        const arrayGenres = arrayOfGenres(movieDetails.genres)
        setGenres(arrayGenres)

        movieDetails.homepage.length > 0 && setHomepage(movieDetails.homepage)
        return
      } else if (type === 'movie') {
        const runtimeMovie = convertMinutesToHours(movieDetails.runtime)
        setRuntime(runtimeMovie)

        const arrayGenres = arrayOfGenres(movieDetails.genres)
        setGenres(arrayGenres)

        movieDetails.homepage.length > 0 && setHomepage(movieDetails.homepage)
        return
      }
    } catch (error) {
      console.log(error)
      return null
    }
    return
  }

  function arrayOfGenres(obj) {
    const genresArr = []
    for (let i = 0; i < obj.length; i++) {
      genresArr[i] = obj[i].name
    }
    return genresArr
  }

  function convertMinutesToHours(minutesRuntime) {
    const hours = minutesRuntime / 60
    const minutes = (hours - Math.floor(hours)) * 60
    return `${Math.floor(hours)}h ${Math.round(minutes)}min`
  }

  return { runtime, genres, homepage, loadMovieDetails }
}
