import { Label, TextInput } from "flowbite-react";

const Input = ({ id, label, type, placeholder }) => {
  return (
    <div className="my-3">
      <div className="mb-1 block">
        <Label htmlFor={id} value={label} />
      </div>
      <TextInput id={id} type={type} sizing="md" placeholder={placeholder} />
    </div>
  );
};

export default Input;
