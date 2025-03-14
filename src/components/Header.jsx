import AppBar from './AppBar';
import Container from './Container';
import Hero from './Hero';
import BuyDropdowm from './BuyDropdwon';
import { useSelector } from 'react-redux';

export default function Header() {
  const state = useSelector((state) => state);

  return (
    <header className="header">
      <Container>
        {state.isVisible.isVisible && <BuyDropdowm />}
        <AppBar />
        <Hero />
      </Container>
    </header>
  );
}
