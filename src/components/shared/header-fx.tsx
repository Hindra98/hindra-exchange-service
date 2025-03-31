import React from "react";
import Button from "../form/Button";
import Breadcrumb from "./breadcrumb";

type Props = {
  breadcrumb: LinkBredcrumb[];
  title: string;
  btnList?: ParamsButton[];
  btnOther?: React.JSX.Element;
};

interface LinkBredcrumb {
  title?: string;
  link?: string;
}

const HeaderFx = (props: Props) => {
  return (
    <div
      className={`text-3xl align-top flex flex-col lg:flex-row justify-between w-full ps-10 pe- pt-4 flex-wrap my-2 gap-4 transition-all`}
    >
      <div className="flex flex-col justify-start">
        <h1 className="">
          {props?.breadcrumb[props.breadcrumb.length - 1]?.title}
        </h1>
        <Breadcrumb items={props.breadcrumb} />
      </div>
      {/** Buttons */}
      {((props?.btnList || [])?.length > 0 || props?.btnOther) && (
        <div className="flex flex-row gap-2 items-center justify-start lg:justify-end footer lg:ms-auto transition-all">
          {(props?.btnList || [])?.length > 0 &&
            (props?.btnList || []).map((btn, key) => (
              <Button key={key} param={btn} />
            ))}
          {props?.btnOther}
        </div>
      )}
    </div>
  );
};

export default HeaderFx;
