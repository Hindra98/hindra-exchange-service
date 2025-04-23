import { createContext, useCallback, useMemo, useContext } from "react";
import { getStorage } from "../storage/storage";
import { Jwt } from "../security/jwt";
import { AuthenticationConstants } from "../constants/authentication-contants";
import { toInt } from "../text";

type GlobalContent = {
  languages: Language[];
  accessToken: string;
  rExpires?: number;
  isAccessTokenExpired?: boolean;
  claims: Map<Claims, string>;
};

const GlobalAppContext = createContext<GlobalContent>({
  languages: [],
  accessToken: "",
  rExpires: 0,
  isAccessTokenExpired: false,
  claims: new Map<Claims, string>(),
});

export const GlobalAppContextProvider = ({
  children,
  languages,
}: {
  children: React.ReactNode;
  languages: Language[];
}) => {
  const accessToken = getStorage<string>(AuthenticationConstants.ACCESS_TOKEN);

  const getUserClaim = useCallback(() => {
    return Jwt.getClaims(accessToken, [
      "userName",
      "userId",
      "role",
      "fullname",
      "userlanguage",
      "exp",
    ]);
  }, [accessToken]);

  const getRExpires = useCallback(() => {
    return accessToken && !Jwt.isAccessTokenExpired(accessToken)
      ? Jwt.getClaim(accessToken, "exp")
      : "0";
  }, [accessToken]);

  const getTokenExpired = useCallback(() => {
    return accessToken && Jwt.isAccessTokenExpired(accessToken);
  }, [accessToken]);

  const value = useMemo(
    () => ({
      languages: languages,
      accessToken: accessToken,
      rExpires: toInt(getRExpires()),
      isAccessTokenExpired: getTokenExpired() as boolean,
      claims: getUserClaim(),
    }),
    [languages, accessToken, getRExpires, getTokenExpired, getUserClaim]
  );

  return (
    <GlobalAppContext.Provider value={value}>
      {children}
    </GlobalAppContext.Provider>
  );
};

export const useGlobalAppContext = () => {
  return useContext(GlobalAppContext);
};
