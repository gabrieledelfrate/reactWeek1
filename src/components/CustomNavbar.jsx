

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/* import { Container, Navbar, Nav } from 'react-bootstrap'; è meno efficiente perchè per trovarli react deve scorrere tutto il contenuto per trovarli*/

const CustomNavbar = (props) =>{
    console.log('Le props sono', props);

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home">
                    Ristorante - {props.testoAddizionale}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href="#menu">Menu</Nav.Link>
                        <Nav.Link href="#prezzi">Prezzi</Nav.Link>
                        <Nav.Link href="#mappa">Come raggiungerci</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CustomNavbar;