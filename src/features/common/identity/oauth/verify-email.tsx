import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import { appName } from "@/core/constants/common-constants";
import { Link, useLocation } from "react-router-dom";
import { extractParamsUrl } from "@/core/text/regex";
import { verifyRegistration } from "@/store-management/actions/oauth/oauth-actions";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { AlertDanger } from "@/components/ui/alerts/alert";

const VerifyEmail = () => {
  const dispatch = useAppDispatch();

  const verifyRegistrationStore = useAppSelector(
    (state) => state.verifyRegistration
  );

  const { search } = useLocation();
  const [t, setT] = useState(0);

  let token = (extractParamsUrl(search) as VerifyRegistrationCommand).token;
  const otp = (extractParamsUrl(search) as VerifyRegistrationCommand).otp;

  token = token ? token.replace("%20", " ") : "";
  if (t < 1) {
    dispatch(verifyRegistration({ token, otp }));
    setT(1);
  }
  // if (token) {
  //   return <Navigate to={"/home"} replace />;
  // } else {
  //   if (authResultSuccess.length > 1) {
  //     return <Navigate to={"/verify-identity"} replace />;
  //   }
  // }

  window.document.title = "Verifier votre compte" + " - " + appName;

  return (
    <div className="flex flex-col gap-4 justify-between w-full h-full p-6 self-start">
      <h1 className="font-bold text-xl underline py-2">{appName}</h1>
      {verifyRegistrationStore.pending ? (
        <Skeleton className="h-56 bg-gray-100" />
      ) : verifyRegistrationStore.errors.length > 0 ? (
        <h2 className="w-full text-justify text-lg flex flex-col gap-4">
          Une erreur est survenue lors de la verification de vos credentials
          {verifyRegistrationStore?.errors?.length > 0 &&
            !verifyRegistrationStore?.pending &&
            verifyRegistrationStore?.errors.map((message, idx) => (
              <AlertDanger key={idx}>{message}</AlertDanger>
            ))}
        </h2>
      ) : (
        <div className="flex flex-col items-center gap-4 p-2 bg-gray-600/35 rounded-md">
          <h2 className="w-full text-justify text-lg">
            {verifyRegistrationStore?.value?.message}
          </h2>
          <Link to={"../login"} className="hover:underline">
            Connectez-vous
          </Link>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
