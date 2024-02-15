export function MoviePoster({ movie, posterPath }) {
  return (
    <div className="min-w-[250px] p-2">
      <img
        className="rounded-sm scale-90 hover:scale-100 duration-300 shadow-sm cursor-pointer"
        src={posterPath + movie.poster_path}
        alt={movie.name}
      />
    </div>
  )
}
