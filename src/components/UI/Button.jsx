import "./button.css";

const Button = ({ children, onClick, type }) => {
  return (
    <button className="btn_contianed" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
