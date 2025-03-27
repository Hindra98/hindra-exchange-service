import { createContext, useContext } from "react";
import { claim } from "../security/jwt";

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

export const useGlobalAppContext = () => {
  return useContext(GlobalAppContext);
};