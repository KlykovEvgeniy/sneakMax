import AppBar from './AppBar';
import Container from './Container';
import Hero from './Hero';

export default function Header() {
  return (
    <header className="header">
      <Container>
        <AppBar />
        <Hero />
      </Container>
    </header>
  );
}
