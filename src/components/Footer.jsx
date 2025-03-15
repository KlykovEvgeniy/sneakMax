import Button from '../reuse/Button';
import Container from './Container';
import full from '../img/Group 61.png';
import insta from '../img/instagramm.svg';
import Logo from '../img/logo (6).svg';
import AppBar from './AppBar';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="form-wrapper">
          <form className="footer-form">
            <h2>Есть вопросы?</h2>
            <p>Заполните форму и наш менеджер свяжется с вами</p>
            <input type="text" name="name" placeholder="Ваше имя" />
            <input type="tel" name="number" placeholder="Номер телефона" />
            <Button text="Отправить" color="#F14F4F" textColor="white" />
          </form>
        </div>

        <div className="images-container">
          <img className="images-title" src={insta} alt="instagramm" />
          <img src={full} alt="big-picture" />
        </div>
      </Container>
      <div className="footer-bottom">
        <Container>
          <a className="logo-link" href="#">
            <img src={Logo} alt="sneakMax" role="logo" />
          </a>
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <a href="#">Каталог</a>
              </li>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Подбор товара</a>
              </li>
              <li>
                <a href="#">Наша команда</a>
              </li>
              <li>
                <a href="#">Доставка и оплата</a>
              </li>
              <li className="nav-item-li">
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
