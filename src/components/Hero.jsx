import Button from '../reuse/Button';
import bk from '../img/back-текст.svg';

export default function Hero() {
  return (
    <div className="hero">
      <img src={bk} alt={bk} className="bkHero" />
      <h1 className="title">Кроссовки известных брендов с доставкой по России и СНГ</h1>
      <p className="hero-description">
        Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам
      </p>
      <Button color="#F14F4F" textColor="#FFFFFF" text="Перейти к покупкам" />
    </div>
  );
}
