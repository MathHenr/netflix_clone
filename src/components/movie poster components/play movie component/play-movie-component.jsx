import { useEffect, useState } from 'react'
import { useMovie } from '../../../hooks/useMovie'

import { Play, Plus } from 'lucide-react'

export function PlayMovieComponent({ type, movie }) {
  const { homepage, getMovie } = useMovie()
  const [title, setTitle] = useState('')

  useEffect(() => {
    async function load() {
      await getMovie(type, movie.id)
      type === 'tv' ? setTitle(movie.name) : setTitle(movie.title)
      return
    }
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie, type])

  return (
    <div className="col-span-2 flex items-center justify-about p-px space-x-2">
      {homepage && (
        <>
          <h1 className="text-[18px] pointer-events-none hover:text-[whitesmoke]">
            Assistir no site oficial
          </h1>
          <a className="cursor-pointer" href={homepage} target="_blank">
            <Play fill="whitesmoke" />
          </a>
        </>
      )}
      {!homepage && (
        <a
          className="flex items-center space-x-2"
          href={`https://www.google.com/search?q=${title}`}
          target="_blank"
        >
          <h1 className="text-[18px] hover:underline hover:text-zinc-300">
            Mais informções
          </h1>
          <Plus className="hover:text-zinc-300" size={24} />
        </a>
      )}
    </div>
  )
}
