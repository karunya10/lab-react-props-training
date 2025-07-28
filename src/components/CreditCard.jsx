import visaImg from "../assets/images/visa.png";
import masterCardImg from "../assets/images/master-card.svg";

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  let secretCardNumber = number.toString();
  let newSecretNumber = secretCardNumber.slice(-4);

  return (
    <>
      <div className="creditCard-component">
        <div
          className="creditCard-container"
          style={{ backgroundColor: bgColor, color: color }}
        >
          <div className="typeImage">
            {type === "Visa" ? (
              <img src={visaImg} />
            ) : (
              <img src={masterCardImg} />
            )}
          </div>
          <div className="cardDetails">
            {" "}
            **** **** **** <span>{newSecretNumber}</span>
            {}
          </div>
          <div className="bankDetails">
            <div>
              Expires:{expirationMonth}/{expirationYear}
            </div>
            <div>{bank}</div>
          </div>
          <div>{owner}</div>
        </div>
      </div>
    </>
  );
}

export default CreditCard;
