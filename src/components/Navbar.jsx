import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand href="#intro" className='Navbrand'>JAHNAVI GADDE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#intro">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#works">Works</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://drive.google.com/file/d/1MMJmRui4BNsOf1RdDbEPsRxvPoW4ZWj-/view?usp=drive_link" target='_blank'><button>Resume</button> </Nav.Link>
            <Nav.Link href="#contact"><button> Contact me</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;