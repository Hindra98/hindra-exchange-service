import { GlobalAppContextProvider } from "@/core/hooks/use-app-context";
import { useLoaderData, useOutlet } from "react-router-dom";
import "@/styles/layouts/_root-component-layout.scss"
import { toast, TypeOptions } from "react-toastify";
import { useAppSelector } from "@/core/hooks/core-hooks";

const RootComponent = () => {
  const outlet = useOutlet();
  const result = useLoaderData() as SupportedLanguages;
  const toastNotification = useAppSelector(
    (state) => state.toastNotifications.value
  );
  toastNotification.forEach(val=>{
    toast(val.value, {type: val.type.toLowerCase() as TypeOptions, position: 'bottom-right'});
  });
  return (
    <GlobalAppContextProvider languages={result.languages}>
      {outlet}
    </GlobalAppContextProvider>
  );
};

export default RootComponent;
