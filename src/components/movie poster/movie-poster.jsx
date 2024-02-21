import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useTrailer } from '../../hooks/useTrailer'
import { backdrop_url } from '../../api/tmdb/tmdb'

import { MoviePosterComponents } from '../movie poster components/movie-poster-components'
import { useEffect } from 'react'

export function MoviePoster({ movie, type, posterPath }) {
  const { trailer, firstTrailer, loadTrailerInfo } = useTrailer()

  useEffect(() => {
    async function load() {
      await loadTrailerInfo(type, movie.id)
      return
    }
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie, type])

  return (
    <Dialog.Root>
      <div className="inline-block w-[250px] p-2">
        <Dialog.Trigger href="#">
          <img
            className="rounded-sm scale-95 hover:scale-105 duration-300 shadow-sm cursor-pointer "
            src={posterPath + movie.poster_path}
            alt={type === 'tv' ? movie.name : movie.title}
          />
        </Dialog.Trigger>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 bg-black/60 fixed shadow-lg shadow-white" />
        <Dialog.Content className="inset-auto z-40 overflow-y-auto outline-none fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-[90vh] bg-zinc-900 rounded-md">
          <div className="w-full z-20 absolute flex p-2 justify-end">
            <Dialog.Close className="bg-black/50 size-8 rounded-[50%] flex items-center justify-center duration-200 hover:bg-black/100">
              <X />
            </Dialog.Close>
          </div>
          <div className="w-full">
            {trailer && firstTrailer && (
              <div className="w-full h-[40vh] sm:h-[65vh] flex items-center justify-center shadow-sm">
                <div className="absolute w-full h-[40vh] sm:h-[66vh] trailer-gradient-top pointer-events-none" />
                <iframe
                  className="w-full h-[40vh] sm:h-[65vh] rounded-md shadow-sm"
                  src={`https://www.youtube.com/embed/${firstTrailer}?playlist=${trailer}&autoplay=1&controls=0`}
                  allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                ></iframe>
              </div>
            )}

            {firstTrailer && !trailer && (
              <div className="w-full h-[40vh] sm:h-[65vh] flex items-center justify-center shadow-sm">
                <div className="absolute w-full h-[40vh] sm:h-[66vh] trailer-gradient-top pointer-events-none" />
                <iframe
                  className="w-full h-[40vh] sm:h-[65vh] rounded-md shadow-sm"
                  src={`https://www.youtube.com/embed/${firstTrailer}?autoplay=1&controls=0`}
                  allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                ></iframe>
              </div>
            )}

            {!firstTrailer && !trailer && (
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="absolute w-full h-full backdrop-path-gradient-top" />
                <img
                  className="w-full h-full object-cover"
                  src={backdrop_url + movie.backdrop_path}
                  alt={type === 'tv' ? movie.name : movie.title}
                />
              </div>
            )}

            <MoviePosterComponents type={type} movie={movie} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
