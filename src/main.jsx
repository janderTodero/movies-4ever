import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import './index.css'
import Movie from './pages/Movie'
import TopMovies from './pages/TopMovies'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/topmovies" element={<TopMovies />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
