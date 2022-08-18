import { Routes, Route } from 'react-router-dom'

// components
import Navigation from './components/Navigation'

// pages
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import MoviesPage from './pages/MoviesPage'

// styles
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/movie/:type" element={<MoviesPage />} />
			</Routes>
		</div>
	)
}

export default App
