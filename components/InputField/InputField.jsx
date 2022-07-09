import { FormControl, Input } from "./inputFieldStyle";

const InputField = ({ onChange, placeholder, type, icon, bgColor }) => {
  return (
    <FormControl>
      <Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        bgColor={bgColor}
      />
      {icon}
    </FormControl>
  );
};

export default InputField;
