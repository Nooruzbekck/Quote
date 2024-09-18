import "./button.css";

const Button = ({ children, onClick, type }) => {
  return (
    <button className="git push origin feature" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
