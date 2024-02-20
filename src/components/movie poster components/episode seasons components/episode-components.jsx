export function EpisodeComponets() {
  return (
    <div className="col-span-3 space-y-6">
      <div className="col-span-3 flex items-center justify-between px-2">
        <h1 className="text-[28px] font-medium">Episódios</h1>
        <select
          onChange={(e) => console.log(e.target.value)}
          className="text-zinc-950 outline-none px-2 py-px rounded-sm"
        >
          <option value="temporada1">Temporada 1</option>
          <option value="temporada2">Temporada 2</option>
          <option value="temporada3">Temporada 3</option>
        </select>
      </div>

      <div className="p-px grid grid-cols-3 items-center gap-12 rounded-md">
        <div className="col-span-1 h-[130px] bg-red-400 cursor-pointer" />
        <div className="col-span-2 space-y-3">
          <p className="font-medium">tempo de episodio</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            ratione dolorum, necessitatibus veniam exercitationem vel pariatur
            eligendi itaque quis laboriosam harum corporis delectus sunt
            provident reiciendis corrupti commodi amet libero.
          </p>
        </div>
      </div>
    </div>
  )
}
