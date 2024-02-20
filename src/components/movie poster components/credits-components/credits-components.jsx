import { useEffect } from 'react'
import { useGetCastMovie } from '../../../hooks/useGetCastMovie'
import { useGetMovieDetails } from '../../../hooks/useGetMovieDetails'

export function CreditsComponents({ type, movie }) {
  const { cast, loadCrewMovieDetails } = useGetCastMovie()
  const { genres, loadMovieDetails } = useGetMovieDetails()

  // getting 4 casters and genres
  useEffect(() => {
    async function load() {
      await loadCrewMovieDetails(type, movie.id)
      await loadMovieDetails(type, movie.id)
    }
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie])

  return (
    <div className="col-span-1 row-span-2 flex flex-col items-start space-y-2  px-2">
      <p>
        <span className="font-medium">Elenco :</span>
        {cast &&
          cast.map((caster, index) => (
            <span className="font-medium text-zinc-300" key={index}>
              {' '}
              {caster},{' '}
            </span>
          ))}
        ...
      </p>
      <p>
        <span className="font-medium">Genêros :</span>
        {genres &&
          genres.map((genre, index) => <span key={index}> {genre}, </span>)}
      </p>
    </div>
  )
}
