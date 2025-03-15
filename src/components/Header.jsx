import AppBar from './AppBar';
import Container from './Container';
import Hero from './Hero';
import BuyDropdowm from './BuyDropdwon';
import { useSelector } from 'react-redux';

export default function Header() {
  const {isVisible} = useSelector((state) => state.isVisible);

  return (
    <header className="header">
      <Container>
        {isVisible && <BuyDropdowm />}
        <AppBar />
        <Hero />
      </Container>
    </header>
  );
}
