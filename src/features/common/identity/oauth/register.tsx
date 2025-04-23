import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import { useLocalizer } from "@/core/Localization";
import * as Yup from "yup";
import { Button } from "@/components/ui/buttons/button";
import { Link } from "react-router-dom";
import { Input, InputCheck, InputPassword } from "@/components/ui/inputs/input";
import { Lock, Mail, User } from "lucide-react";
import { programming_back } from "@/assets";
import { FaGoogle, FaLinkedinIn, FaSpinner } from "react-icons/fa";
import { isEmail } from "@/core/text/regex";
import { AlertDanger } from "@/components/ui/alerts/alert";
import { register } from "@/store-management/actions/oauth/oauth-actions";
import { appName } from "@/core/constants/common-constants";

const Register = () => {
  const commonLocalizer = useLocalizer("Common-ResCommon");
  const dispatch = useAppDispatch();

  const registerStore = useAppSelector((state) => state.register);

  const schema = Yup.object().shape({
    lastName: Yup.string(),
    firstName: Yup.string(),
    email: Yup.string(),
    password: Yup.string(),
    confirmPassword: Yup.string(),
    role: Yup.string(),
  });

  const [registerViewModel, setRegisterViewModel] = useState<RegisterCommand>({
    lastName: "",
    email: "",
    firstName: "",
    password: "",
    confirmPassword: "",
    checkedRole: false,
  });

  const [errors, setErrors] = useState<Partial<RegisterCommand>>({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setRegisterViewModel({
      ...registerViewModel,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    });

    const values = await schema.validate(registerViewModel);

    if (
      values.password === "" ||
      values.confirmPassword !== values.password ||
      values.email === "" ||
      !isEmail(values.email || "") ||
      values.firstName === "" ||
      values.lastName === ""
    ) {
      let password = "",
        firstName = "",
        lastName = "",
        confirmPassword = "",
        email = "";
      if (values.firstName === "")
        firstName = "Vous devez renseigner un prénom";
      if (values.lastName === "") lastName = "Vous devez renseigner un nom";
      if (values.password === "")
        password = commonLocalizer(
          "MODULES_Common_User_Validate_Command_Password_Required"
        );
      if (values.confirmPassword !== values.password)
        confirmPassword = "Les mots de passe sont différents";
      if (values.email === "")
        email = commonLocalizer(
          "MODULES_Common_User_Validate_Command_UserName_Required"
        );
      if (!isEmail(values.email || ""))
        email = "Vous devez renseigner une adresse email valide";

      setErrors({
        ...errors,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
    } else {
      console.log("Register model: ", registerViewModel);
      dispatch(register(registerViewModel));
    }
  };

  // if (token) {
  //   return <Navigate to={"/dashboard"} replace />;
  // } else {
  //   if (authResultSuccess.length > 1) {
  //     return <Navigate to={"/verify-identity"} replace />;
  //   }
  // }

  window.document.title = "Créer un compte" + " - " + appName;

  return (
    <div className="form-login w-full h-full flex items-center gap-0">
      <div className="md:w-2/3 w-0 h-full">
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

        {registerStore?.errors?.length > 0 &&
          !registerStore?.pending &&
          registerStore?.errors.map((message, idx) => (
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
              value={registerViewModel.email}
              eye={false}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="error">{errors.email.toString()}</div>
            )}
          </div>
          <div className="flex justify-between items-start md:flex-row flex-col gap-4 w-full">
            <div className="firstName w-full">
              <Input
                type="text"
                id="firstName"
                name="firstName"
                icon={<User />}
                placeholder={"Entrer votre prénom"}
                className="login-input w-full outline-none border-none"
                value={registerViewModel.firstName}
                eye={false}
                onChange={handleChange}
              />
              {errors.firstName && (
                <div className="error">{errors.firstName.toString()}</div>
              )}
            </div>
            <div className="lastName w-full">
              <Input
                type="text"
                id="lastName"
                name="lastName"
                icon={<User />}
                placeholder={"Entrer votre nom"}
                className="login-input w-full outline-none border-none"
                value={registerViewModel.lastName}
                eye={false}
                onChange={handleChange}
              />
              {errors.lastName && (
                <div className="error">{errors.lastName.toString()}</div>
              )}
            </div>
          </div>
          <div className="flex justify-between items-start md:flex-row flex-col gap-4 w-full">
            <div className="password  w-full">
              <InputPassword
                id="password"
                name="password"
                icon={<Lock />}
                placeholder={commonLocalizer(
                  "MODULE_COMMON_AUTHENTICATION_SCREEN_PASSWORD"
                )}
                className="login-input w-full outline-none border-none"
                value={registerViewModel.password}
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
                value={registerViewModel.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <div className="error">{errors.confirmPassword.toString()}</div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 w-full">
            <InputCheck
              type="checkbox"
              name="checkedRole"
              value={"checkedRole"}
              checked={registerViewModel.checkedRole}
              onChange={() =>
                setRegisterViewModel({
                  ...registerViewModel,
                  checkedRole: !registerViewModel.checkedRole,
                })
              }
              label={"Je suis un fournisseur de prestation"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center w-full">
          <Button
            type="submit"
            className={"py-2 rounded-md w-full"}
            disabled={registerStore?.pending}
          >
            {registerStore?.pending && <FaSpinner className="animate-spin" />}{" "}
            Créer un compte
          </Button>

          <div className="text-center">Ou se connecter via</div>
          <div className="flex justify-center items-center gap-2 w-full">
            <Button type="button" className={"py-2 rounded-md w-full"}>
              Google <FaGoogle />
            </Button>
            <Button type="button" className={"py-2 rounded-md w-full"}>
              LinkedIn <FaLinkedinIn />
            </Button>
          </div>

          <p className="text-end pt-2">
            Vous avez un compte?{" "}
            <Link to={"../login"} className="hover:underline">
              Connectez-vous
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
