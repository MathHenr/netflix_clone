import { useState } from 'react'
import { getCrewDetails } from '../api/tmdb/tmdb'

export const useGetCastMovie = () => {
  const [cast, setCast] = useState([])

  const loadCrewMovieDetails = async (type, id) => {
    try {
      const castDetails = await getCrewDetails(id, type)
      const casters = getCasting(castDetails)
      setCast(casters)
      return
    } catch (error) {
      console.log(error)
      return null
    }
  }

  function getCasting(castDetails) {
    const cast = []
    if (castDetails.cast) {
      for (let i = 0; i < 4; i++) {
        cast[i] = castDetails.cast[i].name
      }
    }
    return cast
  }

  return { cast, loadCrewMovieDetails }
}
