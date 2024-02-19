import { useState } from 'react'

import { MoviePoster } from '../movie poster/movie-poster'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function CategorySection({ item, posterPath }) {
  const [scrollX, setScrollX] = useState(0)

  function handleLeftArrow() {
    let scrolling = scrollX + Math.round(window.innerWidth / 2)
    if (scrolling > 0) {
      scrolling = 0
    }
    setScrollX(scrolling)
  }

  function handleRightArrow() {
    let scrolling = scrollX - Math.round(window.innerWidth / 2)
    let listWidth = item.items.results.length * 250
    if (window.innerWidth - listWidth > scrolling) {
      // eslint-disable-next-line prettier/prettier
      scrolling = (window.innerWidth - listWidth) - 40
    }
    setScrollX(scrolling)
  }

  return (
    <div className="p-2 relative overflow-x-hidden">
      <h1 className="text-[30px] font-bold"> {item.title} </h1>

      <div
        className="flex items-center group"
        style={{
          width: 20 * 250,
        }}
      >
        <div
          onClick={handleLeftArrow}
          className="absolute h-[80%] left-[1%] z-10 flex items-center cursor-pointer px-[.5%] bg-[rgba(0,0,0,.3)] sm:opacity-100 md:opacity-0 duration-300 group-hover:opacity-100"
        >
          <ChevronLeft className="size-[50px] text-zinc-50" />
        </div>

        <div
          onClick={handleRightArrow}
          className="absolute h-[80%] right-[1%] z-10 flex items-center cursor-pointer px-[.5%] bg-[rgba(0,0,0,.3)] sm:opacity-100 md:opacity-0 duration-300 group-hover:opacity-100"
        >
          <ChevronRight className="size-[50px] text-zinc-50" />
        </div>

        <div
          className="duration-500 transition-all"
          style={{
            marginLeft: scrollX,
          }}
        >
          {item &&
            item.items.results.map((movie) => (
              <MoviePoster
                key={movie.id}
                type={item.type}
                movie={movie}
                posterPath={posterPath}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
