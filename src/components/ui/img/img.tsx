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
    console.log("Img: ", e)
    e.target.src = logo;
    e.target.width = 200;
    e.target.height = 200;
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
