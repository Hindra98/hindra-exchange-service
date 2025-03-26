import { getStorage } from "../../core/storage/storage";
import octopusfx from "../../assets/image-octopusfx/Logo Octopus-col_Plan de travail 1.png";
import Image from "../../components/form/Image";

type Props = {
  header?: React.JSX.Element | string;
  body?: React.JSX.Element | string;
  footer?: React.JSX.Element | string;
  logo?: string;
  tenant?: string;
  agency?: string;
  slogan?: string;
};
export const PrintCoreLayout = (props: Props) => {
  const tenant = getStorage<string>("subscription_key");

  return (
    <div
      className="flex flex-col justify-between gap-4 w-full h-screen mx-auto bg-white px-5 py-7 text-xs"
      id="printCoreService"
    >
      {props?.header || (
        <div className="flex flex-col gap-2 justify-center items-center text-center header">
          <Image
            src={props?.logo || octopusfx}
            alt="OCTOPUSFX"
            title=""
            className="w-1/3 p-0 m-0"
          />
          <span>{props?.tenant || tenant}</span>
          <span>{props?.agency || ""}</span>
        </div>
      )}

      <div className="w-full flex flex-col gap-2">{props?.body || ""}</div>
      {props?.footer || (
        <div className="flex flex-col gap-5 justify-center items-center text-center">
          <span>{props?.slogan || "Agréable journée (Slogan)."}</span>
        </div>
      )}
    </div>
  );
};

export const ViewPrintCoreLayout = (props: Props) => {
  const tenant = getStorage<string>("subscription_key");

  return (
    <div
      className="flex flex-col justify-between items-center text-center gap-4 w-auto mx-auto bg-white px-5 py-7 text-xs border border-fxgray rounded-md"
      id="printCoreServiceView"
    >
      {props?.header || (
        <div className="flex flex-col gap-2 justify-center items-center text-center header">
          <Image
            src={props?.logo || octopusfx}
            alt="OCTOPUSFX"
            title=""
            className="w-1/3 p-0 m-0"
          />
          <span>{props?.tenant || tenant}</span>
          <span>{props?.agency || ""}</span>
        </div>
      )}
      <div className="w-full flex flex-col gap-2">{props?.body || ""}</div>
      {props?.footer || (
        <div className="flex flex-col gap-5 justify-center items-center text-center">
          <span>{props?.slogan || "Agréable journée (Slogan)."}</span>
        </div>
      )}
    </div>
  );
};
