import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import * as Yup from "yup";
import { Button } from "@/components/ui/buttons/button";
import { Inputs } from "@/components/ui/inputs/input";
import { FaSpinner } from "react-icons/fa";
import { useLocalizer } from "@/core/Localization";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { isEmail } from "@/core/text/regex";
import { Mail } from "lucide-react";
import {
  updateEmail,
  updateOtpEmail,
} from "@/store-management/actions/profile/profile-actions";
import { resendPinCode } from "@/store-management/actions/oauth/oauth-actions";

const UpdateEmail = () => {
  const commonLocalizer = useLocalizer("Common-ResCommon");
  const dispatch = useAppDispatch();

  const profileUserStoreEmail = useAppSelector(
    (state) => state.profileUser.value.email
  );
  const updateEmailStore = useAppSelector((state) => state.updateEmail);

  const updateOtpEmailStore = useAppSelector((state) => state.updateOtpEmail);

  const authenticatedUserStoreId = useAppSelector(
    (state) => state.authenticatedUser.value.id
  );

  const schema = Yup.object().shape({
    email: Yup.string(),
    confirmEmail: Yup.string(),
  });

  const [emailViewModel, setEmailViewModel] = useState<UpdateEmailCommand>({
    email: profileUserStoreEmail,
    confirmEmail: profileUserStoreEmail,
  });
  const [errors, setErrors] = useState({
    email: "",
    confirmEmail: "",
  });

  const [otpViewModel, setOtpViewModel] = useState<UpdateOtpEmailCommand>({
    email: "",
    otp: "",
  });
  const [otpError, setOtpError] = useState("");
  const [resendPinCodeMessage, setResendPinCodeMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmailViewModel({
      ...emailViewModel,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: "", confirmEmail: "" });

    const values = await schema.validate(emailViewModel);

    if (
      values.confirmEmail !== values.email ||
      values.email === "" ||
      !isEmail(values.email || "")
    ) {
      let confirmEmail = "",
        email = "";
      if (values.confirmEmail !== values.email)
        confirmEmail = "L'adresse email et la confirmation sont differentes";
      if (!isEmail(values.email || ""))
        email = "Vous devez renseigner une adresse email valide";
      setErrors({
        email: email,
        confirmEmail: confirmEmail,
      });
    } else {
      console.log("emailViewModel: ", emailViewModel);
      setOtpViewModel({ ...otpViewModel, email: emailViewModel.email });
      dispatch(updateEmail(emailViewModel));
    }
  };

  const handleConfirmOtp = async (e) => {
    e.preventDefault();
    setOtpError("");
    if (otpViewModel.otp.length !== 6) {
      setOtpError("Le code de verification doit contenir 6 chiffres");
    } else {
      console.log("otpViewModel: ", otpViewModel);
      dispatch(updateOtpEmail(otpViewModel));
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
        id: authenticatedUserStoreId,
        email: otpViewModel.email,
        token: updateEmailStore?.value?.token,
        type: 1,
      })
    );
  };

  return (
    <div className="w-full flex flex-col gap-6 py-2">
      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="email w-full flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          {errors.email && (
            <div className="error">{errors.email.toString()}</div>
          )}
          <Inputs
            type="email"
            id="email"
            name="email"
            icon={<Mail />}
            placeholder={"Email"}
            className={(errors.email && "error") + " max-w-72"}
            value={emailViewModel.email}
            onChange={handleChange}
          />
        </div>
        <div className="confirmEmail w-full flex flex-col gap-1">
          <label htmlFor="confirmEmail">Confirmer l'adresse email</label>
          {errors.confirmEmail && (
            <div className="error">{errors.confirmEmail.toString()}</div>
          )}
          <Inputs
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            icon={<Mail />}
            placeholder={"Confirmer l'adresse email"}
            className={(errors.confirmEmail && "error") + " max-w-72"}
            value={emailViewModel.confirmEmail}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          className={"w-fit"}
          disabled={updateEmailStore?.pending}
        >
          {updateEmailStore?.pending && <FaSpinner className="animate-spin" />}
          {commonLocalizer("MODULE_COMMON_AUTHENTICATION_VERIFY")}
        </Button>
      </form>

      {!updateEmailStore.pending &&
        updateEmailStore.errors.length === 0 &&
        updateEmailStore.value.email === emailViewModel.email && (
          <form
            className="w-full flex flex-col gap-2"
            onSubmit={handleConfirmOtp}
          >
            <p className="line-clamp-4 w-5/6 text-sm italic flex gap-1 items-center">
              Verifiez vos mails et renseignez le code de verification recu par
              mail
            </p>
            <div className="otp w-full">
              {otpError && <div className="error">{otpError.toString()}</div>}
              <InputOTP
                className="w-full"
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS}
                value={otpViewModel.otp}
                onChange={(value) => {
                  setOtpViewModel({ ...otpViewModel, otp: value });
                  setOtpError("");
                }}
              >
                <InputOTPGroup className="">
                  <InputOTPSlot index={0} className="border-primary" />
                  <InputOTPSlot index={1} className="border-primary" />
                  <InputOTPSlot index={2} className="border-primary" />
                  <InputOTPSlot index={3} className="border-primary" />
                  <InputOTPSlot index={4} className="border-primary" />
                  <InputOTPSlot index={5} className="border-primary" />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="flex flex-col gap-2 justify-center w-fit">
              <a
                href="resend-pin-code"
                className={
                  (resendPinCodeMessage !== "" && "disabled text-gray-500") +
                  " underline hover:font-semibold"
                }
                onClick={handleResendPinCode}
              >
                {commonLocalizer(
                  "MODULE_COMMON_AUTHENTICATION_RESEND_PIN_CODE"
                )}{" "}
                {resendPinCodeMessage.toLowerCase()}
              </a>
            </div>
            <Button
              type="submit"
              className={"w-full md:w-fit"}
              disabled={updateOtpEmailStore?.pending}
            >
              {updateOtpEmailStore?.pending && (
                <FaSpinner className="animate-spin" />
              )}
              Sauvegarder
            </Button>
          </form>
        )}
    </div>
  );
};

export default UpdateEmail;
