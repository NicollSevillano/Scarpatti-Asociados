import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navbar.module.css'
import SA from '../img/SA.png'
import phone from '../img/vc/phone.png'

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" id={styles.contentNav}>
            <Container>
                <Navbar.Brand href="#home"><img className={styles.img} src={SA}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={styles.nLink} href="#home">Consultora</Nav.Link>
                        <Nav.Link className={styles.nLink} href="#link">Scarpatti</Nav.Link>
                        <Nav.Link className={styles.nLink} href="#link">¿Por qué elegirnos?</Nav.Link>
                    </Nav>
                    <Nav>
                        <a><img src={phone} className={styles.imgContact} alt="" /></a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;