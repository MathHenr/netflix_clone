const api_key = 'b5ef61d288d7dac66d35a86961e72641'
const api_url = 'https://api.themoviedb.org/3'
export const image_url = 'https://image.tmdb.org/t/p/w300'

async function fetchMovie(endpoint) {
  const res = await fetch(api_url + endpoint)
  const json = await res.json()
  return json
}

export async function getMovieList() {
  return [
    {
      tag: 'originalsNetflix',
      title: 'Séries Originais da Netflix',
      items: await fetchMovie(
        `/discover/tv?with_networks=213&sort_by=vote_count.desc&language=pt-BR&api_key=${api_key}`,
      ),
    },
    {
      tag: 'toprated',
      title: 'Destaques',
      items: await fetchMovie(
        `/tv/top_rated?&language=pt-BR&api_key=${api_key}`,
      ),
    },
    {
      tag: 'recommended',
      title: 'Recomendados',
      items: await fetchMovie(
        `/trending/all/week?language=pt-BR&api_key=${api_key}`,
      ),
    },
    {
      tag: 'adventure',
      title: 'Aventura',
      items: await fetchMovie(
        `/discover/movie?&with_genres=12&language=pt-BR&api_key=${api_key}`,
      ),
    },
    {
      tag: 'action',
      title: 'Ação',
      items: await fetchMovie(
        `/discover/movie?&with_genres=28&language=pt-BR&api_key=${api_key}`,
      ),
    },
    {
      tag: 'animation',
      title: 'Animação',
      items: await fetchMovie(
        `/discover/movie?&with_genres=16&language=pt-BR&api_key=${api_key}`,
      ),
    },
    {
      tag: 'comedy',
      title: 'Comédia',
      items: await fetchMovie(
        `/discover/movie?&with_genres=35&language=pt-BR&api_key=${api_key}`,
      ),
    },
    {
      tag: 'romance',
      title: 'Romance',
      items: await fetchMovie(
        `/discover/movie?&with_genres=10749&language=pt-BR&api_key=${api_key}`,
      ),
    },
    {
      tag: 'horror',
      title: 'Terror',
      items: await fetchMovie(
        `/discover/movie?&with_genres=27&language=pt-BR&api_key=${api_key}`,
      ),
    },
  ]
}
