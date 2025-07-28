function IdCard(props) {
  return (
    <div className="userData">
      <div className="profilePicture">
        <img src={props.picture} />
      </div>
      <div className="userDetails">
        <div>
          <b>First Name:</b> {props.firstName}
        </div>
        <div>
          <b>Last Name:</b> {props.lastName}
        </div>
        <div>
          <b>Gender:</b> {props.gender}
        </div>
        <div>
          <b>Height:</b>
          {props.height}
        </div>
        <div>
          <b>Birth:</b> {props.birth.toDateString()}
        </div>
      </div>
    </div>
  );
}

export default IdCard;
