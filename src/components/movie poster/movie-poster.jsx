export function MoviePoster({ movie, posterPath }) {
  return (
    <div className="inline-block w-[250px] p-2">
      <img
        className="rounded-sm scale-95 hover:scale-105 duration-300 shadow-sm cursor-pointer"
        src={posterPath + movie.poster_path}
        alt={movie.name}
      />
    </div>
  )
}
