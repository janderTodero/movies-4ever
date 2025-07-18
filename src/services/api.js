const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const getPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
  const data = await res.json()
  return data.results
}

export const getNowPlaying = async () => {
  const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=1`)
  const data = await res.json()
  return data.results
}

export const getMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
  return res.json()
  
}

export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/multi?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(query)}&page=1&include_adult=false`)
  const data = await res.json()
  return data.results
}

export const getUpcoming = async () => {
  const res = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=pt-BR&page=1`)
  const data = await res.json()
  return data.results
}

export const topRatedMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`)
  const data = await res.json()
  return data.results
}

export const getPopularSeries = async () => {
  const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
  const data = await res.json()
  return data.results
}

export const getTvDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=pt-BR`)
  const data = await res.json()
  return data
}

export const getTopRatedTv = async () => {
  const res = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`)
  const data = await res.json()
  return data.results
}