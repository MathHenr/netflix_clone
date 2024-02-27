import { useEffect, useState } from 'react'
import { getMovieList, image_url } from './api/tmdb/tmdb'

// components
import { CategorySection } from './components/category/category-section'
import { Navbar } from './components/navbar/navbar'
import { Footer } from './components/footer/footer'
import { MovieHeader } from './components/header/movie-header'

export function App() {
  const [itemsList, setItemsList] = useState([])
  const [movieHeader, setMovieHeader] = useState(null)

  useEffect(() => {
    async function loadMovieData() {
      const list = await getMovieList()
      setItemsList(list)
      const number = Math.floor(Math.random() * list[0].items.results.length)
      setMovieHeader(list[0].items.results[number])
    }
    loadMovieData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Navbar />

      {movieHeader && <MovieHeader movie={movieHeader} />}

      <div className="-mt-28 flex flex-col gap-6">
        {itemsList &&
          itemsList.map((item, index) => (
            <CategorySection key={index} item={item} posterPath={image_url} />
          ))}
      </div>

      <Footer />
    </div>
  )
}
