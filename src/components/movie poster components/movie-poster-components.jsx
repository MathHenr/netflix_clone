import { OverviewComponent } from './overview-component/overview-component'
import { TimeStampComponent } from './timestamp-component/timestamp-component'
import { CreditsComponents } from './credits-components/credits-components'
import { EpisodeComponets } from './episode seasons components/episode-components'
import { Similiar } from './similar component/similar'
import { PlayMovieComponent } from './play movie component/play-movie-component'

// import hooks
import { useMovie } from '../../hooks/useMovie'
import { useEffect } from 'react'

export function MoviePosterComponents({ type, movie }) {
  const {
    movie: movieData,
    runtime,
    genres,
    cast,
    homepage,
    getMovie,
  } = useMovie()

  useEffect(() => {
    async function load() {
      await getMovie(type, movie.id)
    }
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, movie])

  return (
    <div className="my-12 space-y-3 px-5 grid grid-cols-3 gap-3">
      <h1 className="text-slate-50 text-[28px] font-bold col-span-3">
        {type === 'tv' ? movie.name : movie.title}
      </h1>

      {/* Timestamp component to show when the movie/tv where released */}
      <TimeStampComponent type={type} runtime={runtime} movie={movie} />

      <CreditsComponents genres={genres} cast={cast} />

      <OverviewComponent overview={movie.overview} />

      <PlayMovieComponent homepage={homepage} type={type} movie={movie} />

      {type === 'tv' ? (
        <EpisodeComponets runtime={runtime} movieData={movieData} />
      ) : (
        <Similiar />
      )}
    </div>
  )
}
