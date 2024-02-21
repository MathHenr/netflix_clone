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

      <div className="relative w-full h-[95vh] flex items-center justify-center bg-gray-500">
        <div className="w-full h-[100%] bg-green-500/30"></div>

        <div className="absolute p-2 max-w-[800px] flex flex-col bg-red-500 left-[7%] bottom-[30%]">
          <h2 className="text-6xl font-medium pointer-events-none">Título</h2>

          <div className="flex space-x-3 my-3">
            <span>Ano de lançamento</span>
            <span>Temporadas ou Horas de Filme</span>
          </div>

          <p className="text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            officiis non molestias consequatur ab, corrupti libero sint rem
            architecto aut maiores illo nemo, labore iste atque molestiae eum
            doloremque modi?
          </p>
        </div>
      </div>

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
