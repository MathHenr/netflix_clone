const api_key = 'b5ef61d288d7dac66d35a86961e72641'
const api_url = 'https://api.themoviedb.org/3'
export const image_url = 'https://image.tmdb.org/t/p/w300'
export const backdrop_url = 'https://image.tmdb.org/t/p/original'

async function fetchMovie(endpoint) {
  const res = await fetch(api_url + endpoint)
  const json = await res.json()
  return json
}

export async function getMovieList() {
  return [
    {
      tag: 'originalsNetflix',
      title: 'Originais Netflix',
      items: await fetchMovie(
        `/discover/tv?with_networks=213&sort_by=vote_count.desc&language=pt-BR&api_key=${api_key}`,
      ),
      type: 'tv',
    },
    {
      tag: 'toprated',
      title: 'Destaques',
      items: await fetchMovie(
        `/tv/top_rated?&language=pt-BR&api_key=${api_key}`,
      ),
      type: 'tv',
    },
    {
      tag: 'recommended',
      title: 'Recomendados',
      items: await fetchMovie(
        `/trending/all/week?language=pt-BR&api_key=${api_key}`,
      ),
      type: 'movie',
    },
    {
      tag: 'adventure',
      title: 'Aventura',
      items: await fetchMovie(
        `/discover/movie?&with_genres=12&language=pt-BR&api_key=${api_key}`,
      ),
      type: 'movie',
    },
    {
      tag: 'action',
      title: 'Ação',
      items: await fetchMovie(
        `/discover/movie?&with_genres=28&language=pt-BR&api_key=${api_key}`,
      ),
      type: 'movie',
    },
    {
      tag: 'animation',
      title: 'Animação',
      items: await fetchMovie(
        `/discover/movie?&with_genres=16&language=pt-BR&api_key=${api_key}`,
      ),
      type: 'movie',
    },
    {
      tag: 'comedy',
      title: 'Comédia',
      items: await fetchMovie(
        `/discover/movie?&with_genres=35&language=pt-BR&api_key=${api_key}`,
      ),
      type: 'movie',
    },
    {
      tag: 'romance',
      title: 'Romance',
      items: await fetchMovie(
        `/discover/movie?&with_genres=10749&language=pt-BR&api_key=${api_key}`,
      ),
      type: 'movie',
    },
    {
      tag: 'horror',
      title: 'Terror',
      items: await fetchMovie(
        `/discover/movie?&with_genres=27&language=pt-BR&api_key=${api_key}`,
      ),
      type: 'movie',
    },
  ]
}

export async function getTrailerData(type, id) {
  let trailerData = null
  let trailer = null
  switch (type) {
    case 'tv':
      // eslint-disable-next-line no-case-declarations
      trailerData = await fetchMovie(
        // eslint-disable-next-line prettier/prettier
        `/tv/${id}/videos?language=pt-br&api_key=${api_key}`
      )
      trailer = await getTrailer(trailerData)
      return trailer
    case 'movie':
      trailerData = await fetchMovie(
        // eslint-disable-next-line prettier/prettier
        `/movie/${id}/videos?language=pt-br&api_key=${api_key}`
      )
      trailer = await getTrailer(trailerData)
      return trailer
    default:
      return
  }
}

const getTrailer = (trailerData) => {
  if (!trailerData.results || Object.keys(trailerData.results).length === 0)
    return
  const getOfficialItems = trailerData.results.filter((item) => {
    if (
      item.id === '64ce9d2a4d679100c52c1930' ||
      item.id === '64ce9d14549dda0139328b2f'
    )
      return
    return (
      item.official === true &&
      (item.type === 'Trailer' || item.type === 'Teaser')
    )
  })
  return getOfficialItems.length > 0 ? getOfficialItems : null
}
