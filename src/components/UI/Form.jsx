import "./Form.css";

import Button from "./Button";

import { TextArea } from "./TextArea";
import { FormInput } from "./FormInput";
export const Form = () => {
  return (
    <form className="Form">
      <div className="wrapper-con">
        <FormInput labelText={"Author" } />
      </div>

      <div className="wrapper-wrap">
        <label className="text-area-text">Text</label>
        <TextArea />
      </div>
      <Button>Add Quoetes</Button>
    </form>
  );
};
