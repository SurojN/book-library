import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import p16 from '../assets/images/p16.jpg';
import p17 from '../assets/images/p17.jpg';
import p18 from '../assets/images/p18.jpg';
import p19 from '../assets/images/p19.jpg';
import p20 from '../assets/images/p20.jpg';

function Thriller() {
	return (
		<Row className="py-5 mx-4" id="Thriller">
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						Harry Potter
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p16} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						The Habbit of Highly Effective People
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p17} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						The Botany Of Desire
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p18} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						Incest
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						{' '}
						<img src={p19} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						Automotive Encyclopedia
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						{' '}
						<img src={p20} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
		</Row>
	);
}

export default Thriller;
