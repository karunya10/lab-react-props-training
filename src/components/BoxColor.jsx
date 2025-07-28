function BoxColor({ r, g, b }) {
  return (
    <>
      <div
        className="boxColor"
        style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
      >
        <div>
          rgb({r},{g},{b})
        </div>
        <div> {`#${toHex(r)}${toHex(g)}${toHex(b)}`}</div>
      </div>
    </>
  );
}

function toHex(value) {
  return value.toString(16).padStart(2, "0");
}

export default BoxColor;
