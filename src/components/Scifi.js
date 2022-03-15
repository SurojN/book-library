import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import p6 from '../assets/images/p6.jpg';
import p7 from '../assets/images/p7.jpg';
import p8 from '../assets/images/p8.jpg';
import p9 from '../assets/images/p9.jpg';
import p10 from '../assets/images/p10.jpg';

function Scifi() {
	return (
		<Row className="py-5 mx-4" id="Scifi">
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						Grand Babylon Hotel
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p6} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						Holi
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p7} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						The South Beach Diet
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p8} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						Crenshaw
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p9} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						Clara Barton
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p10} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
		</Row>
	);
}

export default Scifi;
