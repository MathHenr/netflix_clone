import { useEffect } from 'react'
import { useMovie } from '../../../hooks/useMovie'

export function CreditsComponents({ type, movie }) {
  const { genres, cast, getMovie } = useMovie()

  // getting 4 casters and genres
  useEffect(() => {
    async function load() {
      await getMovie(type, movie.id)
    }
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie, type])

  return (
    <div className="col-span-1 row-span-2 flex flex-col items-start space-y-2  px-2">
      {cast && cast.length > 1 && (
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
      )}
      <p>
        <span className="font-medium">Genêros :</span>
        {genres &&
          genres.map((genre, index) => <span key={index}> {genre}, </span>)}
      </p>
    </div>
  )
}
