import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import p4 from '../assets/images/p4.jpg';
import p5 from '../assets/images/p5.jpg';

function Fantasy() {
	return (
		<Row className="py-5 mx-4" id="Fantasy">
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						The Alcemist
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p1} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						Marvelous Land of Oz
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p2} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						Piers Plowman
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p3} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						Jorge Isaaxs Maria
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p4} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						The Street Of Seven Stars
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p5} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
		</Row>
	);
}

export default Fantasy;
