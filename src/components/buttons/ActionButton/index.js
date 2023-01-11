import "./styles.scss";

const ActionButton = ({ onClick, type, children }) => {
  return (
    <button
      className="action-button"
      type={type ? type : "button"}
      onClick={onClick ? onClick : null}
    >
      {children}
    </button>
  );
};

export default ActionButton;
