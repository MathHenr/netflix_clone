import { useEffect, useState } from 'react'

import { useMovie } from '../../hooks/useMovie'
import { backdrop_url } from '../../api/tmdb/tmdb'

export function MovieHeader({ movie }) {
  const { runtime, getMovie } = useMovie()

  const [title, setTitle] = useState(null)
  const [overview, setOverview] = useState(null)
  const [backdrop, setBackdrop] = useState(null)
  const [date, setDate] = useState(null)

  useEffect(() => {
    async function load() {
      console.log(movie)
      await getMovie('tv', movie.id)

      setTitle(movie.name)

      setOverview(movie.overview)

      setBackdrop(movie.backdrop_path)

      setDate(movie.first_air_date)
    }
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie])

  return (
    <div className="relative w-full h-[95vh] flex items-center justify-center">
      <div className="absolute w-full h-full bg-transparent backdrop-path-gradient-top" />
      <div className="w-full h-[100%]">
        <img
          className="w-full h-full object-cover object-center"
          src={backdrop_url + backdrop}
          alt={title}
        />
      </div>

      <div className="absolute p-2 max-w-[800px] flex flex-col bg-transparent left-[7%] bottom-[30%]">
        <h2 className="text-6xl font-medium pointer-events-none"> {title} </h2>

        <div className="flex space-x-3 my-3">
          <span> {date && date.substring(0, 4)} </span>
          <span>
            {' '}
            {runtime > 1
              ? `${runtime} Temporadas`
              : `${runtime} Temporada`}{' '}
          </span>
        </div>

        <p className="text-base">{overview && overview}</p>
      </div>
    </div>
  )
}
