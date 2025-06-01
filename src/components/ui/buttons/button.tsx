import { Button as ShadButton } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  id,
  disabled = false,
  title = "",
  type = "button",
  onClick,
}: ButtonProps) => (
  <motion.div
    whileHover={{ scale: disabled ? 1 : 1.05 }}
    whileTap={{ scale: disabled ? 1 : 0.95 }}
    className={`${!disabled && "cursor-pointer overflow-hidden"} ${className}`}
  >
    <ShadButton
      variant={variant}
      size={size}
      id={id}
      type={type}
      title={title}
      disabled={disabled}
      className={
        className + " py-2 rounded-md cursor-pointer flex items-center gap-1 overflow-hidden"
      }
      onClick={onClick}
    >
      {children}
    </ShadButton>
  </motion.div>
);
