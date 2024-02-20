import { useEffect } from 'react'
import { useMovie } from '../../../hooks/useMovie'

export function TimeStampComponent({ type, movie }) {
  const { runtime, getMovie } = useMovie()

  useEffect(() => {
    const loadRuntime = async () => {
      await getMovie(type, movie.id)
    }
    loadRuntime()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, movie])

  return (
    <div className="flex items-center space-x-3 col-span-2">
      <p className="font-semibold">
        {' '}
        {type === 'tv'
          ? movie.first_air_date.substring(0, 4)
          : movie.release_date.substring(0, 4)}{' '}
      </p>
      {type === 'tv' ? (
        <p className="font-semibold">
          {' '}
          {runtime > 1 ? `${runtime} Temporadas` : `${runtime} Temporada`}{' '}
        </p>
      ) : (
        <p className="font-semibold"> {runtime} </p>
      )}
    </div>
  )
}
