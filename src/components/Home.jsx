import React from 'react';
import menu from '../data/menu.json';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

class Home extends React.Component {
	state = { piattoSelezionato: menu[0] };

	render() {
		return (
			<Container>
				<Row className="justify-content-center">
					<Col md={6}>
						<Carousel
							className="mt-4"
							onSlid={indiceArray => {
								console.log(indiceArray);
								this.setState({
									piattoSelezionato: menu[indiceArray],
								});
							}}>
							{menu.map(piatto => {
								return (
									<Carousel.Item key={piatto.id}>
										<img
											src={piatto.image}
											alt="Tipo di piatto"
											className="w-100"
										/>
										<Carousel.Caption>
											<h3>{piatto.name}</h3>
											<p>{piatto.description}</p>
										</Carousel.Caption>
									</Carousel.Item>
								);
							})}
						</Carousel>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col md={6}>
						<ListGroup className="text-center">
							{this.state.piattoSelezionato.comments.map(
								commento => {
									return (
										<ListGroupItem key={commento.id}>
											{commento.author} |{' '}
											{commento.rating} -{' '}
											{commento.comment}
										</ListGroupItem>
									);
								}
							)}
						</ListGroup>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Home;