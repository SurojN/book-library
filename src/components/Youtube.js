import React from 'react';
import 'animate.css';
import { Accordion } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

/* defining how our Array Object show be look like */
const filmsArray = [
	{
		name: "first"
	}
]

const Youtube = () => {

	const [films, setFilms] = useState(filmsArray);

	useEffect(() => {
		axios.get('https://reqres.in/api/unknown')
			.then(res => {

				let filmData = res.data.data;  // Json API bata aako value yesmah hunxa, jun chai filmsArray mah direct rakhna mildain, kinaki data types mildaina 

				//so yo tala ko chai shirf JSON file ko Name single single gari Hamro Films mah rakhneko matra ho, bro
				for (var i = 0; i<filmData.length; i++){
					setFilms((prevFilms) => [
						...prevFilms,
						{
							name: filmData[i].name,
						},
					]);
				};
			})  /* just error handling - doont edit down this part */
			.catch(err => {
				console.log(err);
			})
	}, []);

	return (
		<div className="d-flex">
			<iframe
				src="https://www.youtube.com/embed/pRTWFqhEDeo"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header>Fantasy</Accordion.Header>
					<Accordion.Body>
						{/* yo chai bro k gareko bhene, films array (list) lai single single gari haleko . direct sab halna mildaina*/ }
						{films.map((film, index) =>(
							<span key={index}>{film.name} + </span>
						))}
						<a href="#Fantasy">Go to</a>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>Sci-Fi</Accordion.Header>
					<Accordion.Body>
						{films.map((film, index) =>(
							<span key={index}>Name: {film.name}</span>
						))}
						<a href="#Scifi">Go to</a>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>Mystery</Accordion.Header>
					<Accordion.Body>
						{films.map((film, index) =>(
							<span key={index}>Name: {film.name}</span>
						))}
						<a href="#Mystery">Go to</a>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="3">
					<Accordion.Header>Thriller</Accordion.Header>
					<Accordion.Body>
						{films.map((film, index) =>(
							<span key={index}>Name: {film.name}</span>
						))}
						<a href="#Thriller">Go to</a>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="4">
					<Accordion.Header>Romance</Accordion.Header>
					<Accordion.Body>
						{films.map((film, index) =>(
							<span key={index}>Name: {film.name}</span>
						))}
						<a href="#Romance">Go to</a>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
			
	);
}

export default Youtube;
