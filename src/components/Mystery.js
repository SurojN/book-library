import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import p11 from '../assets/images/p11.jpg';
import p12 from '../assets/images/p12.jpg';
import p13 from '../assets/images/p13.jpg';
import p14 from '../assets/images/p14.jpg';
import p15 from '../assets/images/p15.jpg';

function Mystery() {
	return (
		<Row className="py-5 mx-4" id="Mystery">
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						Glass Ware
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p11} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						Dark
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p12} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						High Output Management
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p13} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						Comics
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p14} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
			<Col>
				<Card border="primary" style={{ height: '390px' }}>
					<Card.Header className="text-center  mh-100 min-vh-10">
						East Eden
					</Card.Header>
					<Card.Body className="p-0" style={{ overflow: 'hidden' }}>
						<img src={p15} alt="" style={{ width: '100%', Height: '100%' }} />
					</Card.Body>
				</Card>
				<Button variant="info">Buy</Button>
			</Col>
		</Row>
	);
}

export default Mystery;
