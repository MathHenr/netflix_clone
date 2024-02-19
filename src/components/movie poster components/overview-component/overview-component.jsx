export function OverviewComponent({ overview }) {
  return (
    <div className="col-span-2 flex items-center justify-center">
      <p className=" text-base font-medium">
        {overview && overview.length > 280
          ? overview.substring(0, 280) + '...'
          : overview}
      </p>
    </div>
  )
}
