import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

import { useState } from "react";

export const Input = ({
  type = "text",
  name = "",
  id = "",
  placeholder = "",
  className = "",
  value = "",
  disabled = false,
  title="",
  icon = "",
  inverse = false,
  onChange,
}: InputProps) => {
  return (
    <motion.div
      whileFocus={{ scale: 1.05 }}
      className={`text-md flex gap-2 items-center border-b border-primary pb-2 ${
        inverse ? "flex-row" : "flex-row-reverse"
      }`}
      title={title}
    >
      <motion.input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={className+" login-input w-full outline-none border-none outline-0 ring-0 border-0 focus-visible:ring-0 focus-visible:border-none"}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      {icon}
    </motion.div>
  );
};

export const InputPassword = ({
  type = "password",
  name = "",
  id = "",
  placeholder = "",
  className = "",
  disabled = false,
  title="",
  eye = true,
  value = "",
  icon = "",
  onChange,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <motion.div
        whileFocus={{ scale: 1.05 }}
        className={`text-md flex flex-row gap-2 items-center border-b border-primary pb-2`}
        title={title}
      >
        {icon}
        <motion.input
          type={!eye ? type : showPassword ? "text" : "password"}
          id={id}
          name={name}
          placeholder={placeholder}
          className={className+" login-input w-full outline-none border-none outline-0 ring-0 border-0 focus-visible:ring-0 focus-visible:border-none"}
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
        {eye &&
          (showPassword ? (
            <EyeOff
              onClick={() => setShowPassword(!showPassword)}
              className="icon cursor-pointer active:scale-90 duration-100"
            />
          ) : (
            <Eye
              onClick={() => setShowPassword(!showPassword)}
              className="icon cursor-pointer active:scale-90 duration-100"
            />
          ))}
      </motion.div>
    </>
  );
};


export const InputCheck = ({
  type = "checkbox",
  name = "",
  id,
  disabled = false,
  checked = false,
  className = "",
  value = "",
  label = "",
  title = "",
  inverse = false,
  onChange,
}: InputCheckProps) => {
  return (
    <motion.label
      whileFocus={{ scale: 1.05 }}
      className={`text-md flex gap-2 items-center cursor-pointer w-full ${
        inverse ? "flex-row" : "flex-row-reverse"
      }`}
      title={title}
    >
      <span className="w-full">{label}</span>
      <motion.input
        type={type}
        id={id}
        name={name}
        className={className+" login-input w-fit outline-none border-none outline-0 ring-0 border-0 focus-visible:ring-0 focus-visible:border-none"}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
    </motion.label>
  );
};
