export function TimeStampComponent({ type, runtime, movie }) {
  return (
    <div className="flex items-center space-x-3 col-span-2">
      <p className="font-semibold">
        {' '}
        {type === 'tv'
          ? movie.first_air_date.substring(0, 4)
          : movie.release_date.substring(0, 4)}{' '}
      </p>
      {type === 'tv' ? (
        <p className="font-semibold">
          {' '}
          {runtime > 1 ? `${runtime} Temporadas` : `${runtime} Temporada`}{' '}
        </p>
      ) : (
        <p className="font-semibold"> {runtime} </p>
      )}
    </div>
  )
}
