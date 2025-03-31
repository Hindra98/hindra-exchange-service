import { Button as ShadButton } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
}: ButtonProps) => (
  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <ShadButton
      variant={variant}
      size={size}
      className={className}
      onClick={onClick}
    >
      {children}
    </ShadButton>
  </motion.button>
);
