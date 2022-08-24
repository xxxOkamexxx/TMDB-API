import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'

// components
import Navigation from './components/Navigation'

// pages
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import PopularMoviesPage from './pages/PopularMoviesPage'
import TopRatedMoviesPage from './pages/TopRatedMoviesPage'
import NowPlayingMoviesPage from './pages/NowPlayingMoviesPage'
import DiscoverMoviePage from './pages/DiscoverMoviePage'
import MoviePage from './pages/MoviePage'
import PersonPage from './pages/PersonPage'

// styles
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/movie/popular" element={<PopularMoviesPage />} />
				<Route path="/movie/top_rated" element={<TopRatedMoviesPage />} />
				<Route path="/movie/now_playing" element={<NowPlayingMoviesPage />} />
				<Route path="/discover/movie" element={<DiscoverMoviePage />} />
				<Route path="/movie/:id" element={<MoviePage />} />
				<Route path="/person/:id" element={<PersonPage />} />
				
			</Routes>

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
