import { useEffect, useState } from 'react'
import { useMovie } from '../../../hooks/useMovie'

// Import variables
import { backdrop_url } from '../../../api/tmdb/tmdb'

// import components
import { Loading } from '../../loading/Loading'

export function EpisodeComponets({ runtime, movieData }) {
  const { getEpisodesForEachSeason, getSeason } = useMovie()

  const [options, setOptions] = useState()
  const [episodesForSeason, setEpisodesForSeason] = useState([])
  const [episodes, setEpisodes] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function createOptionArray() {
      setLoading(true)

      const arr = new Array(runtime).fill(null)
      setOptions(arr)

      movieData &&
        setEpisodesForSeason(getEpisodesForEachSeason(movieData.seasons))

      movieData && setEpisodes(await getSeason(movieData.id, 1))

      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
    createOptionArray()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieData, runtime])

  async function handleSeason(chosenSeason) {
    setLoading(true)

    const seasonTarget = movieData.seasons.filter((season) => {
      return Number(chosenSeason) === season.season_number
    })
    setEpisodes(await getSeason(movieData.id, seasonTarget[0].season_number))

    setLoading(false)
    return
  }

  function convertMinutesToHours(minutesRuntime) {
    const hours = minutesRuntime / 60
    const minutes = (hours - Math.floor(hours)) * 60
    return `${Math.floor(hours)}h ${Math.round(minutes)}min`
  }

  return (
    <div className="col-span-3 space-y-6">
      <div className="col-span-3 flex items-center justify-between">
        <h1 className="text-[28px] font-medium">
          Episódios da Temporada {episodes && episodes.season_number}{' '}
        </h1>
        <select
          onChange={(e) => handleSeason(e.target.value)}
          className="text-zinc-50 outline-none p-2 rounded-md bg-zinc-600"
        >
          {options &&
            options.map((option, index) => (
              <option
                className="text-base font-medium"
                key={index}
                value={index + 1}
              >
                Temporada {index + 1}
                {' | '}
                {episodesForSeason && episodesForSeason[0] !== null
                  ? episodesForSeason[index]
                  : episodesForSeason[0] === null
                    ? episodesForSeason[index + 1]
                    : null}{' '}
                episódios
              </option>
            ))}
        </select>
      </div>

      {loading && (
        <div className="w-full flex items-center justify-center p-2 h-20">
          <Loading />
        </div>
      )}

      {!loading && !episodes && (
        <p className="my-12 flex items-center justify-center text-red-600 font-medium text-[20px]">
          Algo ocorreu errado, tente novamente mais tarde.
        </p>
      )}
      {!loading &&
        episodes &&
        episodes.episodes.map((episode, index) => (
          <div
            key={index}
            className="transition-all duration-300 p-2 grid grid-cols-3 items-center gap-12 rounded-md group hover:bg-zinc-800"
          >
            <div className="col-span-1 flex items-center justify-center h-[170px]">
              <img
                className="h-full rounded-sm duration-200 group-hover:scale-105"
                src={backdrop_url + episode.still_path}
                alt=""
              />
            </div>
            <div className="col-span-2 space-y-2">
              <h3 className="font-medium text-[18px]"> {episode.name} </h3>
              <p>
                {' '}
                {episode.runtime > 60
                  ? convertMinutesToHours(episode.runtime)
                  : episode.runtime + ' min'}
              </p>
              <p className="pr-2">{episode.overview}</p>
            </div>
          </div>
        ))}
    </div>
  )
}
