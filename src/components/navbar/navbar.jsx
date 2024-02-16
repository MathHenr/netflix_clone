export function Navbar() {
  return (
    <>
      <nav className="bg-slate-950 text-slate-900 flex justify-between px-10 items-center py-5 w-[100%] relative z-10">
        <div className="flex items-center justify-between w-full">
          <h2>
            <img
              className="w-[100px]"
              src="./netflix_logo.svg"
              alt="Netflix Logo"
            />
          </h2>
          <ul className="flex gap-3 text-slate-50">
            <li>
              <a href="#">Series</a>
            </li>
            <li>
              <a href="#">Filmes</a>
            </li>
            <li>
              <a href="#">Usuário</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
