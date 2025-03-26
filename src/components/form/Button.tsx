import "../../styles/components/_button.scss"
type Props = {
  param?: ParamsButton;
};

export default function Button({ param = null }: Props) {
  return (
    <>
      <button
        type={param.type}
        id={param?.id}
        className={`p-2 rounded-md ${param?.css}`}
        disabled={param?.disabled}
        onClick={param.handleClick}
        title={param?.title}
        tabIndex={param?.tabIndex}
      >
        {param.name}
      </button>
    </>
  );
}
