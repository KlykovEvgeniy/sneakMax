import { useRef, useState, useEffect } from 'react';
import Logo from '../img/logo (6).svg';
import Buy from '../img/buy.svg';
import BuyButton from './BuyButton';
import { IoMenu } from 'react-icons/io5';
import { IoCloseSharp } from 'react-icons/io5';
import Dropdown from './DropDown';
import useWindowWidth from '../hooks/useWindowWidth';



export default function AppBar() {
  const [vis, setVis] = useState(false);
  const size = useWindowWidth();
  const list = useRef();

  useEffect(() => {
    const style = list.current.style;
    if (size <= 1100) {
      style.display = 'none';
    } else {
      style.display = 'flex';
    }

    if (vis === true) {
      style.display = 'flex';
      style.position = 'absolute';
      style.background = '#484283';
      style.flexDirection = 'column';
      style.height = '100vh';
      document.body.style.overflow = 'hidden';
    } else {
      style.display = 'none';
      document.body.style.overflow = 'visible';
    }

    if (size >= 1100) {
      style.display = 'flex';
      style.position = 'static';
      style.background = 'none';
      style.padding = '0';
      style.flexDirection = 'row';
      style.height = '0';
      document.body.style.overflow = 'visible';
      style.alignItems = 'center';
      style.borderLeft = 'none';
      style.borderLeft = '3px solid black';
    }
  }, [size, vis]);

  const handleClick = () => {
    setVis((prev) => !prev);
    document.body.classList.toggle('visible');
  };

  return (
    <>
      <nav className="nav">
        <a className="logo-link" href="#">
          <img src={Logo} alt="sneakMax" role="logo" />
        </a>
        <ul ref={list} className="nav-list">
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
          <li>
            Корзина
            <BuyButton Buy={Buy} />
          </li>
        </ul>
        {size <= 1110 && <Dropdown img={<IoMenu />} handleClick={handleClick} second={<IoCloseSharp />} />}
      </nav>
      <hr />
    </>
  );
}
