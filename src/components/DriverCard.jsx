import Rating from "./Rating";

function DriverCard(props) {
  const {
    name,
    rating,
    img,
    car: { model, licensePlate },
  } = props;
  //   const stars = Math.round(rating);
  //   const filledStars = new Array(stars).fill("★");
  //   const notFilledStars = new Array(5 - stars).fill("☆");
  //   const newArr = [...filledStars, ...notFilledStars];
  //   const newRating = newArr.join("");

  return (
    <>
      <div className="driverContainer">
        <div className="driverImage">
          <img src={img} />
        </div>

        <div className="driverDetails">
          <div>{name}</div>
          <Rating>{rating}</Rating>

          <div className="carDetail">
            <div>{model}&nbsp;</div>
            <div> - {licensePlate}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DriverCard;
