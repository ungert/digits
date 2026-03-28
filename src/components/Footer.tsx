import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 text-light" style={{ backgroundColor: '#0d3b66' }}>
    <Container>
      <Col className="text-center">
        Department of Information and Computer Sciences
        <br />
        University of Hawaii
        <br />
        Honolulu, HI 96822
        <br />
        <a
          href="http://ics-software-engineering.github.io/nextjs-application-template"
          className="text-light"
        >
          Template Home Page
        </a>
      </Col>
    </Container>
  </footer>
);

export default Footer;
