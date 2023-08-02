import PropTypes from "prop-types";

const ResuableInputfield = ({ value, onChange, placeholder, type }) => {
  const styles = {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    margin: "10px 0",
    width: "400px",
    minwidth: "100%",
  };

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={styles}
    />
  );
};

ResuableInputfield.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default ResuableInputfield;
