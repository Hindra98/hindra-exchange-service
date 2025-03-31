
import { createContext, useCallback, useMemo, useContext } from "react";
import { getStorage } from "../storage/storage";
import { Jwt, claim } from "../security/jwt";
import { AuthenticationConstants } from "../constants/authentication-contants";


type GlobalContent = {
  languages: Language[];
  accessToken: string;
  rExpires?: number;
  tExpires?: number;
  claims: Map<claim, string>;
}

const GlobalAppContext = createContext<GlobalContent>({
  languages: [],
  accessToken: "",
  rExpires: 0,
  tExpires: 0,
  claims: new Map<claim, string>()
});

export const GlobalAppContextProvider = ({ children, languages }) => {

  const accessToken = getStorage<string>(AuthenticationConstants.ACCESS_TOKEN);
  const rExpires: number|null = getStorage<number>("r_expires");
  const tExpires: number|null = getStorage<number>("t_expires");

  const getUserClaim = useCallback(() =>{
    if(accessToken){
      return Jwt.getClaims(accessToken, ['name', 'contactmedia', 'nameidentifier', 'role', 'fullname', 'userlanguage', 'tenantid']);
    } else 
    return Jwt.getClaims(accessToken, ['name', 'contactmedia', 'nameidentifier', 'role', 'fullname', 'userlanguage', 'tenantid']);

}, [accessToken])

  const value = useMemo(
      () => ({
        languages: languages,
        accessToken: accessToken,
        rExpires: rExpires,
        tExpires: tExpires,
        claims: getUserClaim()
      }),
      [languages, accessToken, rExpires, tExpires, getUserClaim]
    );

  return <GlobalAppContext.Provider value={value}>{children}</GlobalAppContext.Provider>;
};


export const useGlobalAppContext = () => {
  return useContext(GlobalAppContext);
};