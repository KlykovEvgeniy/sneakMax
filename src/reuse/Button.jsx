export default function Button({ color, textColor, text, click }) {
  return (
    <button onClick={click} className="button" type="button" style={{ color: textColor, backgroundColor: color }}>
      {text}
    </button>
  );
}
