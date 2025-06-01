import React from "react";

type UpdateLayoutType = {
  id: string;
  title: string;
  children?: React.ReactNode;
};

const UpdateLayout = (props: UpdateLayoutType) => {
  return (
    <section
      id={props?.id}
      className="w-full flex flex-col gap-2 p-4 shadow-lg bg-primary/10 rounded-sm"
    >
      <h1 className="font-semibold text-lg underline">{props?.title}</h1>
      {props?.children}
    </section>
  );
};

export default UpdateLayout;
