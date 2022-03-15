import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import p21 from '../assets/images/p21.jpg';
import p22 from '../assets/images/p22.jpg';
import p23 from '../assets/images/p23.jpg';
import p24 from '../assets/images/p24.jpg';
import p25 from '../assets/images/p25.jpg';

function Romance() {
	return (
		<Row className="py-5 mx-4" id="Romance">
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center mh-100 min-vh-10">
						Companion
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p21} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						Scooby-Doo
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p22} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						Sue Grafton
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p23} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						The 13th Move
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p24} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						Angel Of Square
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p25} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
		</Row>
	);
}

export default Romance;
