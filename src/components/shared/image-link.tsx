import { Link } from "react-router-dom";
import Image from "../form/Image";

interface Props {
  to?: string;
  src: string;
  alt?: string;
  title?: string;
  className?: string;
}

const ImageLink = (props: Props) => {
  return props.to && props.to !== "" ? (
    <Link to={props?.to} className="hover:scale-110 active:scale-90 duration-200">
      <Image
        src={props.src}
        alt={props?.alt || ""}
        title={props?.title || ""}
        className={props?.className || ""}
      />
    </Link>
  ) : (
    <Image
      src={props.src}
      alt={props?.alt || ""}
      title={props?.title || ""}
      className={props?.className || ""}
    />
  );
};

export default ImageLink;
