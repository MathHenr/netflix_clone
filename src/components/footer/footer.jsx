export function Footer() {
  return (
    <footer className="my-12">
      <div className="pt-20 flex flex-col items-center gap-3">
        <h3>Built with passion and love</h3>
        <p>
          All rigths by{' '}
          <a
            className="text-sky-600 hover:underline"
            href="https://www.netflix.com/"
          >
            Netflix
          </a>
        </p>
        <p>
          Movie Database by{' '}
          <a
            className="text-sky-600 hover:underline"
            href="https://www.themoviedb.org/"
          >
            TMDB
          </a>
        </p>
      </div>
    </footer>
  )
}
