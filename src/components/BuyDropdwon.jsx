import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generate } from 'shortid';
import picture from '../img/clothes-photo.jpg';
import trash from '../img/trash 1.svg';
import { remove } from '../redux/slices/buy';
import Button from '../reuse/Button';

export default function BuyDropdowm() {
  const { entries } = useSelector((state) => state.buy);
  const [total, setTotal] = useState(0);
  const dispacth = useDispatch();

  const sorted = entries.map(({ cost }) => {
    return Number(cost);
  });

  useEffect(() => {
    if (sorted.length === 0) {
      setTotal(0)
      return;
    } else {
      setTotal(sorted.reduce((acc, cur) => acc + cur));
    }
  });

  return (
    <div className="buy-dropdown">
      {entries.map(({ name, cost }, index) => {
        return (
          <article key={generate()}>
            <div className="article-main">
              <img src={picture} alt="product-picure" />
              <div className="buy-text">
                <p>{name}</p>
                <h3>{cost} р</h3>
              </div>
            </div>
            <button
              onClick={() => {
                dispacth(remove(index));
              }}
              type="button"
            >
              <img className="trash-icon" src={trash} alt="trash" />
            </button>
          </article>
        );
      })}
      <div className="buy-drop-bottom">
        <div className="buy-bottom">
          <p>Итого:</p>
          <p>{total}</p>
        </div>
        <Button text="Перейти к оплате" color="#F14F4F" textColor="white" />
      </div>
    </div>
  );
}
