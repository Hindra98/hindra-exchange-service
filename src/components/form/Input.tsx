import { useState } from "react";
import "../../styles/components/_input.scss"

type Props={
  type?: string;
  name?: string
  id?: string
  placeholder?: string
  className?: string
  eye?: boolean
  cols?: number
  rows?: number
  multiple?: boolean
  readOnly?: boolean
  value?: string|number
  icon?: string;
  accept?: string;
  capture?: boolean | "user" | "environment";
  disabled?: boolean
  required?: boolean
}
export default function InputWithIcon({
  type='text',
  name='',
  id="",
  placeholder='',
  className="",
  eye=false,
  multiple=false,
  readOnly=false,
  value,
  accept,
  capture,
  icon="",
  disabled=false,
  required=false,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const iconeInput = icon !== "" && (
    <i className={"e-icons text-2xl font-medium " + icon}></i>
  );
  return (
    <>
      <div className={`text-md flex flex-row gap-0 items-center border px-2 py-1 input-dashboard ` + className}>
        {iconeInput}
        <input
          type={!eye ? type : showPassword ? "text" : "password"}
          id={id}
          name={name}
          placeholder={placeholder}
          className={"login-input w-full outline-none border-none bg-transparent"}
          value={value}
          accept={accept}
          capture={capture}
          multiple={multiple}
          autoComplete="off"
          readOnly={readOnly}
          disabled={disabled}
          required={required}
        />
        {eye &&
          (showPassword ? (
            <span
              className="icon eye-off-1icon- cursor-pointer text-2xl font-medium"
              onClick={() => setShowPassword(!showPassword)}
            ></span>
          ) : (
            <span
              className="icon eye-1icon- cursor-pointer text-2xl font-medium"
              onClick={() => setShowPassword(!showPassword)}
            ></span>
          ))}
      </div>
    </>
  );
}