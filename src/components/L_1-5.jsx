const BtnFieldComponent = () => {
  const cont_styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #000",
    padding: "10px",
    background: "#333",
  };

  const el_styles = {
    padding: "20px",
    margin: "10px",
    color: "#fff",
  };
  return (
    <div style={cont_styles}>
      <div className="btn-container">
        <button className="btn" style={el_styles}>
          Click Me
        </button>
      </div>
      <div className="inputfeild-container" style={el_styles}>
        <form action=" ">
          <label htmlFor="Email">Enter Email</label>
          <input type="email" name="Email" id="Email" />
        </form>
      </div>
    </div>
  );
};

export default BtnFieldComponent;
