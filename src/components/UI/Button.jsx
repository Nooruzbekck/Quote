import "./Button.css";

const Button = ({ children, onClick, type, ...props }) => {
  return (
    <button className="btn_contianed" type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
