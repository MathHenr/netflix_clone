import { useState } from 'react'
import { getCrewDetails } from '../api/tmdb/tmdb'

export const useGetCastMovie = () => {
  const [cast, setCast] = useState(null)

  const loadCrewMovieDetails = async (type, id) => {
    try {
      const castDetails = await getCrewDetails(id, type)
      const cast = []
      for (let i = 0; i < 4; i++) {
        cast[i] = castDetails.cast[i].name
      }
      setCast(cast)
      return
    } catch (error) {
      console.log(error)
      return null
    }
  }

  return { cast, loadCrewMovieDetails }
}
