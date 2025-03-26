type Props = {
  cols?: number;
  rows?: number;
  name?: string;
  id?: string;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?;
  onBlur?;
  onInput?;
  disabled?: boolean;
};

export default function TextArea({
  cols=30,
  rows=9,
  name,
  id = "",
  placeholder,
  className = "",
  readOnly = false,
  value,
  defaultValue,
  onChange,
  onBlur,
  onInput,
  disabled = false,
}: Props) {
  return (
    <textarea
      cols={cols}
      rows={rows}
      id={id}
      name={name}
      placeholder={placeholder}
      className={
        "w-full outline-none bg-transparent" + className
      }
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onInput={onInput}
      onBlur={onBlur}
      autoComplete="off"
      readOnly={readOnly}
      disabled={disabled}
    ></textarea>
  );
}
