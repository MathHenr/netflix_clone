import { useEffect, useState } from 'react'
import { Menu, Search } from 'lucide-react'

export function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [scrollHeight, setScrollHeight] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 440) {
        setScrollHeight(true)
      } else {
        setScrollHeight(false)
      }
    }

    const resizeListener = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('scroll', scrollListener)
    window.addEventListener('resize', resizeListener)
  }, [])

  return (
    <>
      {scrollHeight ? (
        <nav className="duration-300 fixed bg-zinc-950 flex justify-between px-10 items-center py-5 w-[100%] z-30">
          <div className="w-full flex items-center space-x-12">
            <h2>
              <a href="#">
                <img
                  className="w-[100px] cursor-pointer"
                  src="./netflix_logo.svg"
                  alt="Netflix Logo"
                />
              </a>
            </h2>
            {windowWidth > 700 ? (
              <ul className="flex items-center gap-3 w-full text-zinc-50 text-lg font-medium">
                <li className="hover:underline">
                  <a href="#">Series</a>
                </li>
                <li className="hover:underline">
                  <a href="#">Filmes</a>
                </li>
                <div className="w-full flex items-center justify-end space-x-3">
                  <li className="flex items-center">
                    <input
                      type="text"
                      className="bg-transparent border-b-2 border-b-zinc-500 outline-none placeholder:text-zinc-500"
                      placeholder="Pesquisar"
                    />
                    <Search className="cursor-pointer text-zinc-300" />
                  </li>
                  <li>
                    <img
                      className="w-10 rounded-sm cursor-pointer duration-100"
                      src="./netflix_user_icon.png"
                      alt="Icone de usuário"
                    />
                  </li>
                </div>
              </ul>
            ) : (
              <div className="w-full flex justify-end">
                <Menu size={28} />
              </div>
            )}
          </div>
        </nav>
      ) : (
        <nav className="duration-300 fixed bg-transparent flex justify-between px-10 items-center py-5 w-[100%] z-30">
          <div className="w-full flex items-center space-x-12">
            <h2>
              <a href="#">
                <img
                  className="w-[100px] cursor-pointer"
                  src="./netflix_logo.svg"
                  alt="Netflix Logo"
                />
              </a>
            </h2>
            {windowWidth > 700 ? (
              <ul className="flex items-center gap-3 w-full text-zinc-50 text-lg font-medium">
                <li className="hover:underline">
                  <a href="#">Series</a>
                </li>
                <li className="hover:underline">
                  <a href="#">Filmes</a>
                </li>
                <div className="w-full flex items-center justify-end space-x-3">
                  <li className="flex items-center">
                    <input
                      type="text"
                      className="bg-transparent border-b-2 outline-none placeholder:text-zinc-300"
                      placeholder="Pesquisar"
                    />
                    <Search className="cursor-pointer" />
                  </li>
                  <li>
                    <img
                      className="w-10 rounded-sm cursor-pointer duration-100"
                      src="./netflix_user_icon.png"
                      alt="Icone de usuário"
                    />
                  </li>
                </div>
              </ul>
            ) : (
              <div className="w-full flex justify-end">
                <Menu size={28} />
              </div>
            )}
          </div>
        </nav>
      )}
    </>
  )
}
