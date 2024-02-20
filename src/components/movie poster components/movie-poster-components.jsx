import { OverviewComponent } from './overview-component/overview-component'
import { TimeStampComponent } from './timestamp-component/timestamp-component'
import { CreditsComponents } from './credits-components/credits-components'

export function MoviePosterComponents({ type, movie }) {
  return (
    <div className="my-12 space-y-3 px-5 grid grid-cols-3 gap-3">
      <h1 className="text-slate-50 text-[28px] font-bold col-span-3">
        {type === 'tv' ? movie.name : movie.title}
      </h1>

      {/* Timestamp component to show when the movie/tv where released */}
      <TimeStampComponent type={type} movie={movie} />

      <CreditsComponents type={type} movie={movie} />

      <OverviewComponent overview={movie.overview} />

      <div className="col-span-3 flex items-center justify-between px-2">
        <h1 className="text-[28px] font-medium">Episódios</h1>
        <select className="text-zinc-950 outline-none px-2 py-px rounded-sm">
          <option value="temporada1">Temporada 1</option>
          <option value="temporada1">Temporada 2</option>
          <option value="temporada1">Temporada 3</option>
        </select>
      </div>
    </div>
  )
}
