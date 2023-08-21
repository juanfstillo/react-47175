import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <p>&copy; {new Date().getFullYear()} Solo Deportes.</p>
      </Container>
    </footer>
  );
}


export default Footer