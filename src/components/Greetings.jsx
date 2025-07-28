function Greetings(props) {
  console.log(props);
  const { lang, children } = props;
  return (
    <>
      <div className="language">
        {lang === "de" ? (
          <div>Hallo {children}</div>
        ) : (
          <div>Bonjour {children}</div>
        )}
      </div>
    </>
  );
}

export default Greetings;
