export function CreditsComponents({ genres, cast }) {
  return (
    <div className="col-span-1 row-span-2 flex flex-col items-start space-y-2  px-2">
      {cast && cast.length > 1 && (
        <p>
          <span className="font-medium">Elenco :</span>
          {cast &&
            cast.map((caster, index) => (
              <span className="font-medium text-zinc-300" key={index}>
                {' '}
                {caster},{' '}
              </span>
            ))}
          ...
        </p>
      )}
      <p>
        <span className="font-medium">Genêros :</span>
        {genres &&
          genres.map((genre, index) => <span key={index}> {genre}, </span>)}
      </p>
    </div>
  )
}
