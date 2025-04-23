import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useAppDispatch } from "../../core/hooks/core-hooks";
import { useGlobalAppContext } from "../../core/hooks/use-app-context";
import { toast } from "react-toastify";

interface Props {
  children?: any;
}

export const AdminRoute = (props: Props) => {
  const dispatch = useAppDispatch();
  const { accessToken, rExpires, claims } = useGlobalAppContext();
  const navigate = useNavigate();

  const close = useCallback(() => {
    // dispatch(signOut());
    setTimeout(() => navigate("/oauth/login", { replace: true }), 10);
  }, [dispatch, navigate]);

  if (
    accessToken &&
    accessToken.length > 9 &&
    rExpires !== null &&
    rExpires !== undefined &&
    rExpires * 1000 > Date.now() &&
    claims.get('role') === "ADMIN"
  ) {
    return props.children;
  } else {
    if (
      accessToken &&
      accessToken.length > 9 &&
      rExpires !== null &&
      rExpires !== undefined &&
      rExpires * 1000 > Date.now()
    ) {
      toast("Vous n'avez pas les access requis");
      setTimeout(() => navigate("/home", { replace: true }), 10);
    } else {
      close();
    }
  }
};
