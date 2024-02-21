// import components
import { Plus } from 'lucide-react'

// import variables
import { image_url, backdrop_url } from '../../../api/tmdb/tmdb'
import { useEffect, useState } from 'react'

export function SimilarTitle({ similar }) {
  const [image, setImage] = useState(null)
  const [overview, setOverview] = useState('')
  const [name, setName] = useState(undefined)

  useEffect(() => {
    function load() {
      if (!similar) return

      if (similar.overview) {
        const similarOverview =
          similar.overview.length > 200
            ? similar.overview.substring(0, 200) + '...'
            : similar.overview
        setOverview(similarOverview)
      }

      if (similar.name || similar.title) {
        setName(similar.name ? similar.name : similar.title)
      }

      if (similar.backdrop_path) {
        const imageUrl = backdrop_url + similar.backdrop_path
        setImage(imageUrl)
        return
      } else if (similar.poster_path) {
        const imageUrl = image_url + similar.poster_path
        setImage(imageUrl)
        return
      }
      setImage('https://placeholder.com/150')
      return
    }
    load()
  }, [similar])

  return (
    <>
      <div className="bg-transparent flex flex-col flex-1 justify-between space-y-4 p-3 rounded-sm duration-300 hover:bg-zinc-800">
        <img className="max-h-full" src={image} alt={name} />
        <h2 className="text-lg font-medium"> {name} </h2>
        <p>{overview}</p>
        <a
          className="flex items-center justify-center space-x-2"
          href={`https://www.google.com/search?q=${name}`}
          target="_blank"
        >
          <h1 className="text-[18px] hover:underline hover:text-zinc-300">
            Mais informções
          </h1>
          <Plus className="hover:text-zinc-300" size={24} />
        </a>
      </div>
    </>
  )
}
