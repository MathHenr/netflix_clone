import { useState } from 'react'
import { getTrailerData } from '../api/tmdb/tmdb'

export const useTrailer = () => {
  const [trailer, setTrailer] = useState(null)
  const [firstTrailer, setFirstTrailer] = useState(null)

  const loadTrailerInfo = async (type, id) => {
    try {
      const trailerInfo = await getTrailerData(type, id)
      if (trailerInfo) {
        let trailerQuery = []
        for (let i = 0; i < trailerInfo.length; i++) {
          trailerQuery[i] = trailerInfo[i].key
        }
        const firstVideo = trailerQuery.shift()
        setFirstTrailer(firstVideo)
        trailerQuery = trailerQuery.join(',')
        setTrailer(trailerQuery)
        return
      }
      return
    } catch (error) {
      console.log(error)
      return
    }
  }

  return { trailer, firstTrailer, loadTrailerInfo }
}
