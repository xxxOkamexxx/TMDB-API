// components
import HomeCard from '../components/HomeCard'
import Popular from '../components/homepage/Popular'
import TopRated from '../components/homepage/TopRated'
import NowPlaying from '../components/homepage/NowPlaying'


// styles
import Container from 'react-bootstrap/Container'

const HomePage = () => {	

	return (
		<Container className="py-3">
			<div>
				<hr />
				<div>
					<Popular/>
				</div>			
			</div>

			<div>
				<hr />
				<div>
					<NowPlaying/>
				</div>
			</div>

			<div>
				<hr />
				<div>
					<TopRated/>
				</div>
			</div>
		</Container>
	)
}

export default HomePage
