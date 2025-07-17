import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import App from './App'
import MovieDetails from './pages/MovieDetails'
import SearchResults from './pages/SearchResults'
import TvDetails from './pages/TvDetails'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/tv/:id" element={<TvDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
