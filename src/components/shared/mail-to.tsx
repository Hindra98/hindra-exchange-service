import { Link } from "react-router-dom";
import "../../styles/components/_mail-to.scss";

interface Props {
  children: React.ReactNode;
  email: string;
}

const MailTo: React.FC<Props> = (props) => {
  return (
    <Link to={`mailto:${props.email}`} className="send-mail">
      {props.children}
    </Link>
  );
};

export default MailTo;
