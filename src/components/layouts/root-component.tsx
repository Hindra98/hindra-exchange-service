import { GlobalAppContextProvider } from "@/core/hooks/use-app-context";
import { useLoaderData, useOutlet } from "react-router-dom";
import "@/styles/layouts/_root-component-layout.scss"

const RootComponent = () => {
  const outlet = useOutlet();
  const result = useLoaderData() as SupportedLanguages;
  return (
    <GlobalAppContextProvider languages={result.languages}>
      {outlet}
    </GlobalAppContextProvider>
  );
};

export default RootComponent;
