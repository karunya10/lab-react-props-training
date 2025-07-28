function Random({ min, max }) {
  return (
    <>
      <div className="language">
        <p>
          Random Value between {min} and {max} {"=>"}{" "}
          {Math.floor(Math.random() * max + 1)}
        </p>
      </div>
    </>
  );
}

export default Random;
