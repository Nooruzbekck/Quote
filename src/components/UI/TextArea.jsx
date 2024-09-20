import "./TextArea.css";
export const TextArea = ({ valur, onChange, ...props }) => {
  return (
    <textarea
      className="text-area"
      value={valur}
      onChange={onChange}
      {...props}
    ></textarea>
  );
};
