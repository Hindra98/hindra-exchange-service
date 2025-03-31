import { useNavigate} from "react-router-dom";
import { useGlobalAppContext } from "../../core/hooks/use-app-context";
import { useCallback } from "react";

interface Props{
  children: any
}

export const PrivateRoute = (props: Props) => {
  
  const { accessToken, rExpires } = useGlobalAppContext();
  const navigate = useNavigate();

  const close = useCallback(() => {
    // dispatch(signOut());
    // Deconnexion
    setTimeout(() => navigate("/login", { replace: true }), 300);
  },[navigate])

  if(accessToken){
    if((rExpires !== null && rExpires !== undefined && rExpires * 1000 < Date.now()) 
      || rExpires === 0 
      || rExpires === undefined){
      close();
    }
  }
  else{
    close();
  }
    return props.children;
}