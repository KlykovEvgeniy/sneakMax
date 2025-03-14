import { useState } from 'react';
import productImage from '../img/clothes-photo.jpg';
import show from '../img/Show.svg';
import buySecond from '../img/buy-2.svg';
import { useDispatch } from 'react-redux';
import { add } from '../redux/slices/buy';

export default function ProductCard({ product }) {
  const [curr, setCurr] = useState(null);
  const { name, cost, company } = product;
  const dispacth = useDispatch();

  const onMouseEnter = (event) => {
    setCurr(event.currentTarget.classList[0]);
  };
  const onMouseLeave = () => {
    setCurr(null);
  };

  const handleClick = (event) => {
    const objMain = event.currentTarget.classList;

    const obj = {
      name: objMain[0],
      cost: objMain[1]
    };
    dispacth(add(obj));
  };

  return (
    <article onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`product-card-${product.id}`}>
      <img src={productImage} alt="productImage" />
      <p>{name}</p>
      <h3>{cost} р</h3>
      {curr && (
        <div className="controls">
          <button type="button">
            <img src={show} alt="Show product" />
          </button>
          <button className={`${name} ${cost} ${company} `} onClick={handleClick} type="button">
            <img src={buySecond} alt="Buy product" />
          </button>
        </div>
      )}
    </article>
  );
}
