function Rating({ children }) {
  const result = Math.round(parseInt(children));
  const filledStars = new Array(result).fill("★");
  const notFilledStars = new Array(5 - result).fill("☆");
  const newArr = [...filledStars, ...notFilledStars];
  const newRating = newArr.join("");
  return (
    <>
      <div>{newRating}</div>
    </>
  );
}

export default Rating;
