import PropTypes from "prop-types";

const ReusableBtn = ({ label, onClick, disabled }) => {
  const btnStyles = {
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
    background: "#333",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <button style={btnStyles} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

ReusableBtn.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ReusableBtn;
