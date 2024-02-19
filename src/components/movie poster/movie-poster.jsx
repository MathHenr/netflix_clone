import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useGetTrailer } from '../../hooks/useGetTrailer'
import { backdrop_url } from '../../api/tmdb/tmdb'

export function MoviePoster({ movie, type, posterPath }) {
  const { trailer, firstTrailer, loadTrailerInfo } = useGetTrailer()

  function handleMovieCard() {
    loadTrailerInfo(type, movie.id)
  }

  return (
    <Dialog.Root>
      <div className="inline-block w-[250px] p-2">
        <Dialog.Trigger onClick={handleMovieCard} href="#">
          <img
            className="rounded-sm scale-95 hover:scale-105 duration-300 shadow-sm cursor-pointer "
            src={posterPath + movie.poster_path}
            alt={type === 'tv' ? movie.name : movie.title}
          />
        </Dialog.Trigger>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 bg-black/60 fixed shadow-lg shadow-white" />
        <Dialog.Content className="inset-auto z-20 outline-none p-6 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-[90vh] bg-slate-900 rounded-md space-y-6">
          <div className="w-full relative flex items-center justify-between">
            <h1 className="text-slate-50 text-[24px] font-bold">
              {type === 'tv' ? movie.name : movie.title}
            </h1>

            <Dialog.Close className="bg-black/50 size-9 rounded-[50%] flex items-center justify-center">
              <X />
            </Dialog.Close>
          </div>

          <div className="w-full h-[70%]">
            {trailer ? (
              <div className="w-full h-full flex items-center justify-center shadow-sm">
                <iframe
                  className="w-full h-full rounded-md shadow-sm"
                  src={`https://www.youtube.com/embed/${firstTrailer}?playlist=${trailer}&autoplay=1&controls=0`}
                  allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                ></iframe>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center relative shadow-sm">
                <div className="absolute w-full h-full backdrop-path-gradient-left shadow-sm" />
                <div className="absolute w-full h-full backdrop-path-gradient-right shadow-sm" />
                <img
                  className="w-full h-full object-cover"
                  src={backdrop_url + movie.backdrop_path}
                  alt={type === 'tv' ? movie.name : movie.title}
                />
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
