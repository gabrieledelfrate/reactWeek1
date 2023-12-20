import React from 'react';
import { Row, Col, Container, Form, Button, Alert } from 'react-bootstrap';

/* Quali campi usiamo per la prenotazione?
1- nome: string obbligatorio
2- telefono: string obbligatorio
3- persone: number valore predefinito: 1
4- fumatori: boolean
5- data e ora: string obbligatorio
6- note: string
*/

class Prenotazione extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prenotazione: {
				nome: '',
				telefono: '',
				persone: 1,
				fumatori: false,
				dataOra: '',
				note: '',
			},
			showAlert: false,
		};
	}

	handleInputChange = (proprieta, valore) => {
		this.setState({
			prenotazione: { ...this.state.prenotazione, [proprieta]: valore },
		});
		// Se vogliamo utilizzare un parametro o una variabile come NOME di una proprietà di un oggetto dobbiamo valutare il contenuto del parametro o della variabile con le quadre []. In questo caso proprieta può essere nome, telefono, persone...
	};

	handleSubmit = async e => {
		e.preventDefaut();
		console.log('Invio prenotazione');
		// Fetch con metodo POST
		try {
			const res = await fetch(
				'https://striveschool-api.herokuapp.com/api/reservation',
				{
					method: 'POST',
					body: JSON.stringify(this.state.prenotazione),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			if (res.ok) {
				this.setState({
					prenotazione: {
						nome: '',
						telefono: '',
						persone: 1,
						fumatori: false,
						dataOra: '',
						note: '',
					},
					showAlert: true,
				});
			} else {
				throw new Error('Errore nel salvataggio della prenotazione');
			}
		} catch (error) {
			console.log('Errore:', error);
		}
	};

	render() {
		return (
			<Container>
				<Row className="justify-content-center mt-3">
					<Col md={6}>
						<h2 className="text-center">Modulo di prenotazione</h2>
						{/* {this.state.showAlert === true && (
                            <Alert variant="info">Prenotazione salvata!</Alert>
                        )} */}
						<Alert
							variant="info"
							className={
								this.state.showAlert ? 'd-block' : 'd-none'
							}>
							Prenotazione salvata!
						</Alert>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Prenotazione;