import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import 'animate.css';
function Top() {
	return (
		<div className="d-flex">
			<Navbar expand="lg">
				<Container fluid>
					<Navbar.Brand href="/">
						<h1 className="p-3 text-dark bg-primary rounded-pill animate__animated animate__rollIn animate__infinite animate__slower animate__delay-5s">
							{' '}
							Books Liberty
						</h1>
					</Navbar.Brand>
				</Container>
			</Navbar>
			<h2 class="p-4 rounded-pill animate__animated animate__bounce animate__infinite	infinite text-center text-primary bg-dark">
				{' '}
				Books liberty is the site for all the readers around the world.
			</h2>
		</div>
	);
}

export default Top;
