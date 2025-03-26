import { Link } from "react-router-dom";
import Image from "../form/Image";

interface Props {
    to: string;
    src: string;
    alt?: string;
    title: string;
    className: string;
}

const ImageLink = (props: Props) => {
    return(
        <Link to={props.to}>
            <Image src={props.src} alt={props?.alt || ""} title={ props.title } className={props.className}/>
       </Link>
    )
}

export default ImageLink;