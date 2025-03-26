import { useNavigate} from "react-router-dom";
import { useAppDispatch } from "../../core/hooks/core-hooks";
import { useGlobalAppContext } from "../../core/hooks/use-app-context";
import { useCallback } from "react";
import { signOut } from "../../store-management/actions/oauth/oauth-actions";

interface Props{
  children: any
}

export const PrivateRoute = (props: Props) => {
  
  const dispatch = useAppDispatch();
  const { accessToken, rExpires } = useGlobalAppContext();
  const navigate = useNavigate();

  const close = useCallback(() => {
    dispatch(signOut());
    setTimeout(() => navigate("/login", { replace: true }), 300);
  },[dispatch, navigate])

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