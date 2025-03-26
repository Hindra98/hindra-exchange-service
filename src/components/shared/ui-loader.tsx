import "../../styles/_spinner.scss";

const UILoader = () => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export const UISpinner = () => {
  return (
    <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-0 flex justify-center items-center z-10">
      <span className="icon spinnericon- text-5xl animate-spin block text-fxprimary"></span>
    </div>
  );
};

export const UISpinner2 = () => {
  return (
    <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-0 flex justify-center items-center z-10">
      <div className="chargementFx"></div>
    </div>
  );
};

export default UILoader;
