import { useState } from "react";
import { useLocalizer } from "@/core/Localization";
import * as Yup from "yup";
import { Button } from "@/components/ui/buttons/button";
import { Link } from "react-router-dom";
import { InputPassword } from "@/components/ui/inputs/input";
import { Lock } from "lucide-react";
import { programming_back } from "@/assets";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import { resetPassword } from "@/store-management/actions/oauth/oauth-actions";
import { AlertDanger } from "@/components/ui/alerts/alert";
import { FaSpinner } from "react-icons/fa";
import { appName } from "@/core/constants/common-constants";

const ResetPassword = () => {
  const commonLocalizer = useLocalizer("Common-ResCommon");
  const dispatch = useAppDispatch();

  const resetPasswordStore = useAppSelector((state) => state.resetPassword);

  const schema = Yup.object().shape({
    password: Yup.string(),
    confirmPassword: Yup.string(),
  });

  const [resetPasswordViewModel, setResetPasswordViewModel] =
    useState<ResetPasswordCommand>({
      password: "",
      confirmPassword: "",
    });

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setResetPasswordViewModel({
      ...resetPasswordViewModel,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ password: "", confirmPassword: "" });

    const values = await schema.validate(resetPasswordViewModel);

    if (values.password === "" || values.password !== values.confirmPassword) {
      let confirmPassword = "",
        password = "";
      if (values.password === "")
        password = commonLocalizer(
          "MODULES_Common_User_Validate_Command_Password_Required"
        );
      if (values.password !== values.confirmPassword)
        confirmPassword = "Les mots de passe diffèrent";

      setErrors({
        password: password,
        confirmPassword: confirmPassword,
      });
    } else {
      console.log("Authentication model: ", resetPasswordViewModel);
      dispatch(resetPassword(resetPasswordViewModel));
    }
  };

  window.document.title = "Réinitialisation de mot de passe" + " - " + appName;

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
        {resetPasswordStore?.errors?.length > 0 &&
          !resetPasswordStore?.pending &&
          resetPasswordStore?.errors.map((message, idx) => (
            <AlertDanger key={idx}>{message}</AlertDanger>
          ))}
        <div className="flex flex-col gap-6 w-full my-4">
          <div className="password w-full">
            <InputPassword
              id="password"
              name="password"
              icon={<Lock />}
              placeholder={commonLocalizer(
                "MODULE_COMMON_AUTHENTICATION_SCREEN_PASSWORD"
              )}
              className="login-input w-full outline-none border-none"
              value={resetPasswordViewModel.password}
              eye={false}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="error">{errors.password.toString()}</div>
            )}
          </div>
          <div className="confirmPassword  w-full">
            <InputPassword
              id="confirmPassword"
              name="confirmPassword"
              icon={<Lock />}
              placeholder={"Confirmer le mot de passe"}
              className="login-input w-full outline-none border-none"
              value={resetPasswordViewModel.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <div className="error">{errors.confirmPassword.toString()}</div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center w-full">
          <Button
            type="submit"
            className={"py-2 rounded-md w-full"}
            disabled={resetPasswordStore?.pending}
          >
            {resetPasswordStore?.pending && (
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

export default ResetPassword;
