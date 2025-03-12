export default function Dropdown({ img, handleClick, second }) {
  return (
    <button className="dropdown-button" onClick={handleClick} type="button">
      {document.body.classList.contains('visible') ? second : img}
    </button>
  );
}
