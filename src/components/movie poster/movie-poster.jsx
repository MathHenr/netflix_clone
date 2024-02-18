import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

export function MoviePoster({ movie, type, posterPath }) {
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
        <Dialog.Overlay className="inset-0 bg-black/60 fixed" />
        <Dialog.Content className="inset-auto z-20 outline-none p-6 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4/6 h-[90vh] bg-slate-700 rounded-md space-y-6">
          <div className="w-full relative flex items-center justify-between">
            <h1 className="text-slate-50 text-[24px] font-bold">
              {type === 'tv' ? movie.name : movie.title}
            </h1>

            <Dialog.Close className="bg-black/50 size-9 rounded-[50%] flex items-center justify-center">
              <X />
            </Dialog.Close>
          </div>

          <div className="w-full h-[55%] flex items-center justify-center outline"></div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
