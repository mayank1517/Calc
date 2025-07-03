function BtnsList({ Btns, setResult }) {
  const handleOnClick = (e) => {
    const value = e.target.innerText;
    if (value === "=") {
      try {
        setResult((prev) => eval(prev));
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("");
    } else {
      setResult((prev) => prev + value);
    }
  };
  return (
    <div className="btns-list">
      {Btns.map((btn) => (
        <button
          key={btn.id}
          onClick={handleOnClick}
          className="btn btn-primary"
        >
          {btn.value}
        </button>
      ))}
    </div>
  );
}
export default BtnsList;
