import "../../styles/components/_mail-to.scss";

interface Props{
    children: React.JSX.Element | string;
    email: string;
}

const MailTo: React.FC<Props> = (props: Props) => {

    return (
        <>
           <a href={`mailto:${props.email}`} className="send-mail">
                {props.children}
            </a>
        </>
    )
}

export default MailTo;