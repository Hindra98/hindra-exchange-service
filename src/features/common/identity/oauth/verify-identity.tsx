import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import { useLocalizer } from "@/core/Localization";
import { Button } from "@/components/ui/buttons/button";
import { Navigate, useNavigate } from "react-router-dom";
import { AlertDanger } from "@/components/ui/alerts/alert";
import { programming_back } from "@/assets";
import { FaSpinner } from "react-icons/fa";
import {
  resendPinCode,
  verifyIdentity,
} from "@/store-management/actions/oauth/oauth-actions";
import { appName } from "@/core/constants/common-constants";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";

const VerifyIdentity = () => {
  const commonLocalizer = useLocalizer("Common-ResCommon");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authenticatedUserStore = useAppSelector(
    (state) => state.authenticatedUser
  );

  const verifyIdentityStore = useAppSelector((state) => state.verifyIdentity);

  const [verifyViewModel, setVerifyViewModel] = useState("");
  const [errors, setErrors] = useState("");
  const [resendPinCodeMessage, setResendPinCodeMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors("");

    if (verifyViewModel.length !== 6) {
      setErrors("Le code de verification doit contenir 6 chiffres");
    } else {
      dispatch(
        verifyIdentity({
          id: authenticatedUserStore?.value?.id,
          otp: verifyViewModel,
          token: authenticatedUserStore?.value?.token,
        })
      );
    }
  };

  const handleResendPinCode = async (e) => {
    e.preventDefault();

    let cpt = 30;
    const resendPinCodeInterval = setInterval(() => {
      setResendPinCodeMessage(
        `${commonLocalizer("MODULES_COMMON_Authentication_In")} ${cpt}s`
      );
      cpt -= 1;
      if (cpt === -1) {
        clearInterval(resendPinCodeInterval);
        setResendPinCodeMessage("");
      }
    }, 1000);

    dispatch(
      resendPinCode({
        id: authenticatedUserStore?.value?.id,
        email: authenticatedUserStore?.value?.email,
        token: authenticatedUserStore?.value?.token,
        type: 0,
      })
    );
  };

  if (
    authenticatedUserStore?.value?.token?.length < 1 ||
    authenticatedUserStore?.value?.id?.length < 1 ||
    authenticatedUserStore?.value?.email?.length < 1
  ) {
    navigate("../login", { replace: true });
  }

  window.document.title = "Verification a deux facteurs" + " - " + appName;

  return (
    <div className="form-login w-full h-full flex items-center gap-0">
      <div className="md:w-full w-0 h-full">
        <img
          src={programming_back}
          alt="Login form"
          className="w-full h-full object-fill"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-between w-full h-full px-6"
      >
        <div className="w-56">
          <h1 className="font-bold text-xl underline py-2">{appName}</h1>
          <p className="line-clamp-4 w-5/6 text-sm italic">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            molestiae omnis hic recusandae. Id optio nostrum velit illum. Vero
            voluptatem pariatur libero? Exercitationem quis nihil voluptas
            inventore unde adipisci excepturi?
          </p>
        </div>

        {verifyIdentityStore?.errors?.length > 0 &&
          !verifyIdentityStore?.pending &&
          verifyIdentityStore?.errors.map((message, idx) => (
            <AlertDanger key={idx} className="w-56">
              {message}
            </AlertDanger>
          ))}

        {verifyIdentityStore?.value?.id.length > 0 &&
          verifyIdentityStore?.value?.email.length > 0 &&
          verifyIdentityStore?.value?.is_verified &&
          !verifyIdentityStore?.pending && <Navigate to={"../../home"} replace />}

        <div className="flex flex-col gap-2 items-center w-56 my-4">
          <InputOTP
            className="w-full"
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS}
            value={verifyViewModel}
            onChange={(value) => {
              setVerifyViewModel(value);
              setErrors("");
            }}
          >
            <InputOTPGroup className="">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          {errors && <div className="error">{errors.toString()}</div>}
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <a
            href="resend-pin-code"
            className={
              (resendPinCodeMessage !== "" && "disabled text-gray-500") + " underline hover:font-semibold"
            }
            onClick={handleResendPinCode}
          >
            {commonLocalizer("MODULE_COMMON_AUTHENTICATION_RESEND_PIN_CODE")}{" "}
            {resendPinCodeMessage.toLowerCase()}
          </a>
        </div>

        <div className="flex flex-col gap-2 justify-center w-56">
          <Button
            type="submit"
            className={"w-full"}
            disabled={
              verifyIdentityStore?.pending || verifyViewModel.length < 6
            }
          >
            {verifyIdentityStore?.pending && (
              <FaSpinner className="animate-spin" />
            )}
            {commonLocalizer("MODULE_COMMON_AUTHENTICATION_VERIFY")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VerifyIdentity;
