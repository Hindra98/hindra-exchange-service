import { GlobalAppContextProvider } from "@/core/hooks/use-global-app-context";
import { useLoaderData, useOutlet } from "react-router-dom"

export const RootComponent = () => {
    const outlet = useOutlet();
    const result = useLoaderData() as SupportedLanguages;
    return(<>
       <GlobalAppContextProvider languages = { result.languages } >
         {outlet}
        </GlobalAppContextProvider>
    </>)
}