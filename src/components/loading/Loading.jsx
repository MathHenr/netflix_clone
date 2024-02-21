export function Loading() {
  return (
    <div className="inline-block relative w-20 h-20">
      <div className="absolute left-2 top-8 w-4 h-4 bg-zinc-100 rounded-[50%] animate-ellipse1"></div>
      <div className="absolute left-2 top-8 w-4 h-4 bg-zinc-100 rounded-[50%] animate-ellipse2"></div>
      <div className="absolute left-8 top-8 w-4 h-4 bg-zinc-100 rounded-[50%] animate-ellipse2"></div>
      <div className="absolute left-14 top-8 w-4 h-4 bg-zinc-100 rounded-[50%] animate-ellipse3"></div>
    </div>
  )
}
