import { useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch } from "@/core/hooks/core-hooks";
import { authenticateUserByLinkedin } from "@/store-management/actions/oauth/oauth-actions";

const LinkedinCallback = () => {
  
    const dispatch = useAppDispatch();
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (!code) {
      setError("Code LinkedIn manquant.");
      return;
    }
          console.log(code);
          dispatch(
            authenticateUserByLinkedin({
              code: code,
            })
          );


    axios
      .post("http://localhost:8080/api-exchange/api/login-linkedin", { code })
      .then((res) => {
        console.log("Res :: ", res);
        // navigate("/dashboard");
      })
      .catch(() => setError("Erreur lors de la connexion LinkedIn."));
  }, []);

  return (
    <div>
      {error ? <div>{error}</div> : <div>Connexion LinkedIn en cours...</div>}
    </div>
  );
};

export default LinkedinCallback;