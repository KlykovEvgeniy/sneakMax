import { useDispatch, useSelector } from 'react-redux';
import { setVisible } from '../redux/slices/visible';

export default function BuyButton({ Buy }) {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.buy);
  const handleClick = () => {
    dispatch(setVisible());
  };
  return (
    <button onClick={handleClick} className="buy-button">
      <img src={Buy} alt="shop buy" role="buy" />
      <span>{value}</span>
    </button>
  );
}
