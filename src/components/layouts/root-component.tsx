import { useLoaderData, useOutlet } from "react-router-dom"
import { GlobalAppContextProvider } from "../../core/hooks/use-app-context"

export const RootComponent = () => {
    const outlet = useOutlet();
    const result = useLoaderData() as SupportedLanguages;
    return(<>
       <GlobalAppContextProvider languages = { result.languages } >
         {outlet}
        </GlobalAppContextProvider>
    </>)
}