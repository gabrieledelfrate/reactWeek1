import React from 'react';
import { Row, Col, Container, Form, Button, Alert } from 'react-bootstrap';

/* Quali campi usiamo per la prenotazione?
1- name: string obbligatorio
2- phone: string obbligatorio
3- numberOfPeople: number valore predefinito: 1
4- smoking: boolean
5- data e ora: string obbligatorio
6- specialRequests: string
*/

class Prenotazione extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prenotazione: {
				name: '',
				phone: '',
				numberOfPeople: 1,
				smoking: false,
				dateTime: '',
				specialRequests: '',
			},
			showAlert: false,
		};
	}

	handleInputChange = (proprieta, valore) => {
		this.setState({
			prenotazione: { ...this.state.prenotazione, [proprieta]: valore },
		});
		// Se vogliamo utilizzare un parametro o una variabile come NOME di una proprietà di un oggetto dobbiamo valutare il contenuto del parametro o della variabile con le quadre []. In questo caso proprieta può essere name, phone, numberOfPeople...
	};

	handleSubmit = async e => {
		e.preventDefault();
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
						name: '',
						phone: '',
						numberOfPeople: 1,
						smoking: false,
						dateTime: '',
						specialRequests: '',
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

	/* 	handleSubmit = e => {
        e.preventDefault();
		fetch('https://striveschool-api.herokuapp.com/api/reservation', {
			method: 'POST',
			body: JSON.stringify(this.state.prenotazione),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => {
				console.log('Risposta', res);
				if (res.ok) {
					this.setState({
						prenotazione: {
							name: '',
							phone: '',
							numberOfPeople: 1,
							smoking: false,
							dateTime: '',
							specialRequests: '',
						},
						showAlert: true,
					});
				} else {
					throw new Error(
						'Errore nel salvataggio della prenotazione'
					);
				}
			})
			.catch(err => {
				console.log('Errore:', err);
			});
	}; */

	render() {
		return (
			<Container>
				<Row className="justify-content-center mt-3">
					<Col md={6}>
						<h2 className="text-center">Modulo di prenotazione</h2>
                        {/* Con l'operatore SHORT CIRCUIT (&&) l'alert non viene inserito nel DOM finché showAlert è false */}
						{this.state.showAlert === true && (
                            <Alert variant="info">Prenotazione salvata!</Alert>
                        )}

                        {/* Con il ternario l'alert è comunque presente nel DOM con classe d-none, per cui non viene mostrato finché showAlert è false */}
						{/* <Alert
							variant="info"
							className={
								this.state.showAlert ? 'd-block' : 'd-none'
							}>
							Prenotazione salvata!
						</Alert> */}

						<Form onSubmit={this.handleSubmit}>
							<Form.Group className="mb-3">
								<Form.Label>Il tuo nome</Form.Label>
								<Form.Control
									type="text"
									placeholder="nome e cognome"
									required
									value={this.state.prenotazione.name}
									onChange={e => {
										this.setState({
											prenotazione: {
												...this.state.prenotazione,
												name: e.target.value,
											},
											// potremmo avere la tentazione di fare this.state.prenotazione.name = e.target.value, ma è VIETATISSIMO perché lo state è di sola lettura!
										});
									}}
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Recapito telefonico</Form.Label>
								<Form.Control
									type="tel"
									placeholder="xxxxxxxxxx"
									required
									value={this.state.prenotazione.phone}
									onChange={e => {
										this.handleInputChange(
											'phone',
											e.target.value
										);
										// Visto che tutti gli onChange fanno la stessa cosa, cioè settano una proprietà dell'oggetto nello state, chiamiamo il metodo handleInputChange (riga 29) passando la proprietà che deve essere settata, letta dal metodo tra parentesi quadre, e il valore
									}}
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Numero di coperti</Form.Label>
								<Form.Select
									aria-label="Quantità"
									required
									value={
										this.state.prenotazione.numberOfPeople
									}
									onChange={e => {
										this.handleInputChange(
											'numberOfPeople',
											e.target.value
										);
									}}>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
									<option>7</option>
									<option>8</option>
								</Form.Select>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Check
									type="checkbox"
									label="Tavolo fumatori"
									checked={this.state.prenotazione.smoking}
									onChange={e => {
										this.handleInputChange(
											'smoking',
											e.target.checked
										);
										// Le checkbox restituiscono un booleano
									}}
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Data prenotazione</Form.Label>
								<Form.Control
									type="datetime-local"
									required
									value={this.state.prenotazione.dateTime}
									onChange={e => {
										this.handleInputChange(
											'dateTime',
											e.target.value
										);
									}}
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>
									Note particolari &#40;allergie,
									intolleranze...&#41;
								</Form.Label>
								<Form.Control
									as="textarea"
									rows={3}
									placeholder="allergie, intolleranze..."
									value={
										this.state.prenotazione.specialRequests
									}
									onChange={e => {
										this.handleInputChange(
											'specialRequests',
											e.target.value
										);
									}}
								/>
							</Form.Group>
							<Button variant="primary" type="submit">
								Prenota!
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Prenotazione;