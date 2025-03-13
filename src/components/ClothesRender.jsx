import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllClothes } from '../redux/fetching/fetchAllClothes';
import ProductCard from './ProductCard';
import Button from '../reuse/Button';
import Container from './Container';

export default function ClothesRender() {
  const [curr, setCurr] = useState(1);
  const { entries } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllClothes(curr));
  }, [dispatch, curr]);

  const handleClick = () => {
    setCurr((prev) => prev + 5);
  };

  return (
    <section className="clothes">
      <Container>
        <div className="clothes-container">
          {entries.map((item) => {
            return <ProductCard key={item.company} product={item} />;
          })}
        </div>
        <Button click={handleClick} text="Показать еще" color="#F14F4F" textColor="white" />
      </Container>
    </section>
  );
}
