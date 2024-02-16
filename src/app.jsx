import { useEffect, useState } from 'react'
import { getMovieList, image_url } from './api/tmdb/tmdb'

// components
import { CategorySection } from './components/category/category-section'
import { Navbar } from './components/navbar/navbar'
import { Footer } from './components/footer/footer'

export function App() {
  const [itemsList, setItemsList] = useState([])

  useEffect(() => {
    async function loadMovieData() {
      const list = await getMovieList()
      setItemsList(list)
    }
    loadMovieData()
  }, [])

  return (
    <div>
      <Navbar />

      <div className="flex flex-col gap-6">
        {itemsList &&
          itemsList.map((item, index) => (
            <CategorySection key={index} item={item} posterPath={image_url} />
          ))}
      </div>

      <Footer />
    </div>
  )
}
