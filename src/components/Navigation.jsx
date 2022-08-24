import { Link, NavLink } from 'react-router-dom'

// styles
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = () => {

	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">
					The Movie DB
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" >
					<Nav className="ms-auto">
						<NavDropdown 
								title="Movies" 
								iid="nav-dropdown-dark-example"
              					menuVariant="dark" >
								<NavDropdown.Item as={NavLink} to="/popular">Popular</NavDropdown.Item>
								<NavDropdown.Item as={NavLink} to="/now_playing">Now Playing</NavDropdown.Item>
								<NavDropdown.Item as={NavLink} to="/top_rated">Top Rated</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
