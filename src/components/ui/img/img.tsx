import { logo } from "@/assets";
import { motion } from "framer-motion";
export const Img = ({
  className = "",
  src = "",
  alt = "",
  id = "",
  width = "",
  height = "",
  loading = null,
  title = "",
  onError,
}: Imgrops) => {
  const handleError = (e) => {
    e.target.src = logo;
  };
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`${className}`}
      title={title}
      id={id}
      width={width}
      height={height}
      onError={onError??handleError}
      loading={loading}
    />
  );
};
