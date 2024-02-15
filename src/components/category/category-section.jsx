import { MoviePoster } from '../movie poster/movie-poster'

export function CategorySection({ item, posterPath }) {
  return (
    <div className="py-3 w-full min-h-[350px]">
      <h1 className="text-lg sm:text-[30px] font-semibold px-[2%]">
        {item.title}
      </h1>

      <div className="flex flex-1 w-full">
        {item &&
          item.items.results.map((movie) => (
            <MoviePoster key={movie.id} movie={movie} posterPath={posterPath} />
          ))}
      </div>
    </div>
  )
}
