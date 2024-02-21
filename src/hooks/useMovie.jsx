import { useEffect, useState } from 'react'
import { useFetchMovie } from './useFetchMovie'

export const useMovie = () => {
  const { loadMovieData, loadCastData, loadSeasonData } = useFetchMovie()

  const [movie, setMovie] = useState(null)
  const [type, setType] = useState(null)
  const [runtime, setRuntime] = useState(undefined)
  const [genres, setGenres] = useState([])
  const [cast, setCast] = useState([])
  const [homepage, setHomepage] = useState(null)

  useEffect(() => {
    function load() {
      if (!movie || !type) return

      getRuntime(type)

      getGenres()

      getCasters(cast)

      getHomepage()
    }
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie])

  // Setting everthing up in there own useStates
  const getMovie = async (type, id) => {
    try {
      const movieData = await loadMovieData(type, id)
      const casters = await loadCastData(type, id)
      setType(type)
      setCast(casters)
      setMovie(movieData)
    } catch (error) {
      console.log(error.message)
      return null
    }
  }

  // Getting season details
  const getSeason = async (id, season) => {
    try {
      const seasonData = await loadSeasonData(id, season)
      return seasonData
    } catch (error) {
      console.log(new Error())
      return null
    }
  }

  // Getting genres
  const getGenres = () => {
    setGenres(arrayOfGenres(movie.genres))
    return
  }

  function arrayOfGenres(obj) {
    const genresArr = []
    for (let i = 0; i < obj.length; i++) {
      genresArr[i] = obj[i].name
    }
    return genresArr
  }

  // Getting runtime in minutes and convert to hours and minutes for movies request
  const getRuntime = (type) => {
    switch (type) {
      case 'tv':
        setRuntime(movie.number_of_seasons)
        break
      case 'movie':
        setRuntime(convertMinutesToHours(movie.runtime))
        break
      default:
        return null
    }
    return
  }

  function convertMinutesToHours(minutesRuntime) {
    const hours = minutesRuntime / 60
    const minutes = (hours - Math.floor(hours)) * 60
    return `${Math.floor(hours)}h ${Math.round(minutes)}min`
  }

  // Getting casters
  const getCasters = (castersList) => {
    const casters = arrayOfCasters(castersList)
    setCast(casters)
    return
  }

  function arrayOfCasters(castersList) {
    const casters = []
    if (castersList.cast.length > 0) {
      if (castersList.cast.length > 4) {
        for (let i = 0; i < 4; i++) {
          casters[i] = castersList.cast[i].name
        }
      } else {
        for (let i = 0; i < castersList.cast.length; i++) {
          casters[i] = castersList.cast[i].name
        }
      }
    } else if (castersList.crew.length > 0) {
      if (castersList.crew.length > 4) {
        for (let i = 0; i < 4; i++) {
          casters[i] = castersList.crew[i].name
        }
      } else {
        for (let i = 0; i < castersList.crew.length; i++) {
          casters[i] = castersList.crew[i].name
        }
      }
    }
    return casters
  }

  // Getting movie homepage
  const getHomepage = () => {
    movie.homepage.length > 0 && setHomepage(movie.homepage)
    return
  }

  // Getting number of episodes for each season
  const getEpisodesForEachSeason = (seasons) => {
    const numberOfEpisodes = []
    for (const season in seasons) {
      if (!seasons[season].air_date) continue
      seasons[season].season_number !== 0
        ? (numberOfEpisodes[season] = seasons[season].episode_count)
        : (numberOfEpisodes[season] = null)
    }
    return numberOfEpisodes
  }

  return {
    movie,
    runtime,
    genres,
    homepage,
    cast,
    getMovie,
    getSeason,
    getEpisodesForEachSeason,
  }
}
