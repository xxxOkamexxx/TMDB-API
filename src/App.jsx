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
import GenresPage from './pages/GenresPage'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'

// styles
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/popular" element={<PopularMoviesPage />} />
				<Route path="/top_rated" element={<TopRatedMoviesPage />} />
				<Route path="/now_playing" element={<NowPlayingMoviesPage />} />
				<Route path="/genres/:genre_id" element={<GenresPage />} />
				<Route path="/movie/:movie_id" element={<MoviePage />} />
				<Route path="/actor/:actor_id" element={<ActorPage />} />
				
			</Routes>

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
