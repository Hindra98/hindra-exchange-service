import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import { useLocalizer } from "@/core/Localization";
import * as Yup from "yup";
import { Button } from "@/components/ui/buttons/button";
import { Link } from "react-router-dom";
import { Input, InputCheck, InputPassword } from "@/components/ui/inputs/input";
import { AlertDanger } from "@/components/ui/alerts/alert";
import { Lock, User } from "lucide-react";
import { programming_back } from "@/assets";
import { FaGoogle, FaLinkedinIn, FaSpinner } from "react-icons/fa";
import { isEmail } from "@/core/text/regex";
import { authenticateUser } from "@/store-management/actions/oauth/oauth-actions";
import { appName } from "@/core/constants/common-constants";

const Authentication = () => {
  const commonLocalizer = useLocalizer("Common-ResCommon");
  const dispatch = useAppDispatch();

  const authenticatedUserStore = useAppSelector(
    (state) => state.authenticatedUser
  );

  const schema = Yup.object().shape({
    email: Yup.string(),
    password: Yup.string(),
    saveSession: Yup.boolean(),
  });

  const [authenticationViewModel, setAuthenticationViewModel] =
    useState<AuthenticateUserCommand>({
      email: "",
      password: "",
      saveSession: false,
    });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAuthenticationViewModel({
      ...authenticationViewModel,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });

    const values = await schema.validate(authenticationViewModel);

    if (
      values.password === "" ||
      values.email === "" ||
      !isEmail(values.email || "")
    ) {
      let password = "",
        email = "";
      if (values.password === "")
        password = commonLocalizer(
          "MODULES_Common_User_Validate_Command_Password_Required"
        );
      if (values.email === "")
        email = commonLocalizer(
          "MODULES_Common_User_Validate_Command_UserName_Required"
        );
      if (!isEmail(values.email || ""))
        email = "Vous devez renseigner une adresse email valide";

      setErrors({
        email: email,
        password: password,
      });
    } else {
      console.log("Authentication model: ", authenticationViewModel);
      dispatch(authenticateUser(authenticationViewModel));
    }
  };

  window.document.title =
    commonLocalizer("MODULE_COMMON_AUTHENTICATION_SCREEN_LOGIN") +
    " - " +
    appName;

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

        {authenticatedUserStore?.errors?.length > 0 &&
          !authenticatedUserStore?.pending &&
          authenticatedUserStore?.errors.map((message, idx) => (
            <AlertDanger key={idx}>{message}</AlertDanger>
          ))}

        <div className="flex flex-col gap-6 w-full my-4">
          <div className="email w-full">
            <Input
              type="email"
              id="email"
              name="email"
              icon={<User />}
              placeholder={commonLocalizer(
                "MODULE_COMMON_AUTHENTICATION_SCREEN_EMAIL_ADDRESS"
              )}
              className=""
              value={authenticationViewModel.email}
              eye={false}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="error">{errors.email.toString()}</div>
            )}
          </div>
          <div className="password w-full">
            <InputPassword
              id="password"
              name="password"
              icon={<Lock />}
              placeholder={commonLocalizer(
                "MODULE_COMMON_AUTHENTICATION_SCREEN_PASSWORD"
              )}
              className=""
              value={authenticationViewModel.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="error">{errors.password.toString()}</div>
            )}
          </div>

          <div className="flex items-center gap-2 w-full">
            <InputCheck
              type="checkbox"
              name="saveSession"
              value={"saveSession"}
              checked={authenticationViewModel.saveSession}
              onChange={() =>
                setAuthenticationViewModel({
                  ...authenticationViewModel,
                  saveSession: !authenticationViewModel.saveSession,
                })
              }
              label={"Garder ma session ouverte"}
            />
          </div>
        </div>
        <div className="forgot text-end">
          <Link to={"../forgot-password"} className="hover:underline">
            {commonLocalizer(
              "MODULE_COMMON_AUTHENTICATION_SCREEN_I_FORGOT_MY_PASSWORD"
            )}
          </Link>
        </div>

        <div className="flex flex-col gap-2 justify-center w-full">
          <Button
            type="submit"
            className={"w-full"}
            disabled={authenticatedUserStore?.pending}
          >
            {authenticatedUserStore?.pending && (
              <FaSpinner className="animate-spin" />
            )}
            {commonLocalizer("MODULE_COMMON_AUTHENTICATION_SCREEN_SIGNIN")}
          </Button>

          <div className="text-center">Ou se connecter via</div>
          <div className="flex justify-center items-center gap-2 w-full">
            <Button type="button" className={"w-full"}>
              Google <FaGoogle />
            </Button>
            <Button type="button" className={"w-full"}>
              LinkedIn <FaLinkedinIn />
            </Button>
          </div>

          <p className="text-end pt-2">
            Compte inexistant?{" "}
            <Link to={"../register"} className="hover:underline">
              Créer un compte
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Authentication;
