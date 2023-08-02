import PropTypes from "prop-types";

const ReusableAlertbox = ({ type, message }) => {
  const alertBoxStyles = {
    padding: "1rem",
    border: type === "warning" ? "2px solid red" : "2px solid green",
    color: type === "warning" ? "1px solid red" : "1px solid green",
    borderRadius: "5px",
    background: type === "warning" ? "#8C3333" : "#7A9D54",
    margin: "1rem 0",
  };
  return (
    <div style={alertBoxStyles}>
      <p>{message}</p>
    </div>
  );
};

ReusableAlertbox.propTypes = {
  type: PropTypes.oneOf(["warning", "success"]).isRequired,
  message: PropTypes.string.isRequired,
};

export default ReusableAlertbox;
