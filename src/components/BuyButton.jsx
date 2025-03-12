export default function BuyButton({Buy}) {
  return (
    <button className="buy-button button">
      <img src={Buy} alt="shop buy" role="buy" />
      <span>0</span>
    </button>
  );
}
