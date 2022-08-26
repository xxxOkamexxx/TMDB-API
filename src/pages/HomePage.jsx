import Container from 'react-bootstrap/Container'

const HomePage = () => {
	return (
		<Container className="py-3">
			<div>
				<hr />
				<h4>Popular</h4>
				<div>movies are here...</div>
			</div>

			<div>
				<hr />
				<h4>Now Playing</h4>
				<div>movies are here...</div>
			</div>

			<div>
				<hr />
				<h4>Top Rated</h4>
				<div>movies are here...</div>
			</div>
		</Container>
	)
}

export default HomePage
