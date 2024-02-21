import { SimilarTitle } from './similar-title'

export function SimiliarComponent({ similars, title }) {
  return (
    <>
      <div className="col-span-3 space-y-4">
        <h1 className="w-full text-[28px] font-medium border-b-2 border-zinc-400 pb-4">
          Títulos Similares a {title}
        </h1>
        <div className="grid grid-cols-3 gap-3 auto-rows-auto">
          {similars &&
            similars.map((similar, index) => (
              <SimilarTitle key={index} similar={similar} />
            ))}
        </div>
      </div>
    </>
  )
}
