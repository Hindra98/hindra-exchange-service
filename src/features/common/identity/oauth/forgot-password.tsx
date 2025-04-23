import { useState } from "react";
import { useLocalizer } from "@/core/Localization";
import * as Yup from "yup";
import { Button } from "@/components/ui/buttons/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/inputs/input";
import { Mail } from "lucide-react";
import { programming_back } from "@/assets";
import { isEmail } from "@/core/text/regex";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import { forgotPassword } from "@/store-management/actions/oauth/oauth-actions";
import { AlertDanger } from "@/components/ui/alerts/alert";
import { FaSpinner } from "react-icons/fa";
import { appName } from "@/core/constants/common-constants";

const ForgotPassword = () => {
  const commonLocalizer = useLocalizer("Common-ResCommon");
  const dispatch = useAppDispatch();

  const forgotPasswordStore = useAppSelector((state) => state.forgotPassword);

  const schema = Yup.object().shape({
    email: Yup.string(),
    confirmEmail: Yup.string(),
  });

  const [forgotPasswordViewModel, setForgotPasswordViewModel] =
    useState<ForgotPasswordCommand>({
      email: "",
      confirmEmail: "",
    });

  const [errors, setErrors] = useState({
    email: "",
    confirmEmail: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForgotPasswordViewModel({
      ...forgotPasswordViewModel,
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

    const values = await schema.validate(forgotPasswordViewModel);

    if (
      values.email === "" ||
      values.email !== values.confirmEmail ||
      !isEmail(values.email || "")
    ) {
      let confirmEmail = "",
        email = "";
      if (values.email === "")
        email = commonLocalizer(
          "MODULES_Common_User_Validate_Command_Password_Required"
        );
      if (!isEmail(values.email || ""))
        email = "Vous devez renseigner une adresse email valide";
      if (values.email !== values.confirmEmail)
        confirmEmail = "Les adresses email diffèrent";

      setErrors({
        email: email,
        confirmEmail: confirmEmail,
      });
    } else {
      console.log("Authentication model: ", forgotPasswordViewModel);
      dispatch(forgotPassword(forgotPasswordViewModel));
    }
  };

  window.document.title = "Mot de passe oublié" + " - " + appName;

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
        <div className="">
          <h1 className="font-bold text-xl underline py-2">{appName}</h1>
          <p className="line-clamp-2 w-5/6 text-sm italic">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            molestiae omnis hic recusandae. Id optio nostrum velit illum. Vero
            voluptatem pariatur libero? Exercitationem quis nihil voluptas
            inventore unde adipisci excepturi?
          </p>
        </div>
        {forgotPasswordStore?.errors?.length > 0 &&
          !forgotPasswordStore?.pending &&
          forgotPasswordStore?.errors.map((message, idx) => (
            <AlertDanger key={idx}>{message}</AlertDanger>
          ))}
        <div className="flex flex-col gap-6 w-full my-4">
          <div className="email w-full">
            <Input
              type="email"
              id="email"
              name="email"
              icon={<Mail />}
              placeholder={commonLocalizer(
                "MODULE_COMMON_AUTHENTICATION_SCREEN_EMAIL_ADDRESS"
              )}
              className="login-input w-full outline-none border-none"
              value={forgotPasswordViewModel.email}
              eye={false}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="error">{errors.email.toString()}</div>
            )}
          </div>
          <div className="confirmEmail  w-full">
            <Input
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              icon={<Mail />}
              placeholder={"Confirmer l'adresse e-mail"}
              className="login-input w-full outline-none border-none"
              value={forgotPasswordViewModel.confirmEmail}
              onChange={handleChange}
            />
            {errors.confirmEmail && (
              <div className="error">{errors.confirmEmail.toString()}</div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center w-full">
          <Button
            type="submit"
            className={"py-2 rounded-md w-full"}
            disabled={forgotPasswordStore?.pending}
          >
            {forgotPasswordStore?.pending && (
              <FaSpinner className="animate-spin" />
            )}
            Valider
          </Button>
          <div className="text-end">Avez-vous rétrouvé vos identifiants?</div>
          <p className="text-end pt-2">
            <Link to={"../login"} className="hover:underline">
              Connectez-vous
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
