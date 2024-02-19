import { useState } from 'react'
import { getTrailerData } from '../api/tmdb/tmdb'

export const useGetTrailer = () => {
  const [trailer, setTrailer] = useState(null)
  const [firstTrailer, setFirstTrailer] = useState(null)

  const loadTrailerInfo = async (type, id) => {
    try {
      const trailerInfo = await getTrailerData(type, id)
      if (trailerInfo) {
        let trailerQuery = []
        for (let i = 0; i <= trailerInfo.length; i++) {
          trailerQuery[i] = trailerInfo[i].key
        }
        const firstVideo = trailerQuery.shift()
        setFirstTrailer(firstVideo)
        setTrailer(trailerQuery)
        trailerQuery = trailerQuery.join(',')
        return setTrailer(trailerQuery)
      }
      return
    } catch (error) {
      console.log(error)
      return
    }
  }

  return { trailer, firstTrailer, loadTrailerInfo }
}
