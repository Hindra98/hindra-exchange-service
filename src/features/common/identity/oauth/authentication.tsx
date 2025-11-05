import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import { useLocalizer } from "@/core/Localization";
import { useGoogleLogin } from "@react-oauth/google";
import * as Yup from "yup";
import { Button } from "@/components/ui/buttons/button";
import { Link, Navigate } from "react-router-dom";
import { Input, InputCheck, InputPassword } from "@/components/ui/inputs/input";
import { AlertDanger, AlertSuccess } from "@/components/ui/alerts/alert";
import { Lock, User } from "lucide-react";
import { FaGoogle, FaLinkedinIn, FaSpinner } from "react-icons/fa";
import { isEmail } from "@/core/text/regex";
import {
  authenticateUser,
  authenticateUserByGoogle,
} from "@/store-management/actions/oauth/oauth-actions";
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

  const handleChange = (e) => {
    const { name, value } = e.target;

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
      dispatch(authenticateUser(authenticationViewModel));
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      dispatch(
        authenticateUserByGoogle({
          code: codeResponse.code,
        })
      );
    },
    onError: (errorResponse) => {
      console.log(errorResponse);
    },
    onNonOAuthError: (errorResponse) => {
      console.log(errorResponse);
    },
    flow: "auth-code",
  });

  const loginWithLinkedin = () => {
    const clientId = "78cksln55ythia";
    const redirectUri = encodeURIComponent(
      "http://localhost:5173/oauth/linkedin-callback"
    );
    const scope = encodeURIComponent("r_liteprofile");
    const state = Math.random().toString(36).substring(2, 15); // Pour la sécurité

    window.location.href =
      `https://www.linkedin.com/oauth/v2/authorization?response_type=code` +
      `&client_id=${clientId}` +
      `&redirect_uri=${redirectUri}` +
      `&scope=${scope}` +
      `&state=${state}`;
  };

  // const { linkedInLogin } = useLinkedIn({
  //   clientId: "78cksln55ythia",
  //   redirectUri: `http://localhost:5173/oauth/linkedin-callback`,
  //   onSuccess: (code) => {
  //     console.log("Success: ", code);
  //   },
  //   onError: (error) => {
  //     console.log("Erreur: ", error);
  //   },
  // });

  window.document.title =
    commonLocalizer("MODULE_COMMON_AUTHENTICATION_SCREEN_LOGIN") +
    " - " +
    appName;

  return (
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

      {authenticatedUserStore?.value?.message?.length > 0 &&
        !authenticatedUserStore?.value?.is_verified &&
        !authenticatedUserStore?.pending && (
          <AlertSuccess>{authenticatedUserStore?.value?.message}</AlertSuccess>
        )}

      {authenticatedUserStore?.value?.is_verified &&
        authenticatedUserStore?.value?.is_verify_2fa &&
        !authenticatedUserStore?.pending && (
          <Navigate to={"../verify-identity"} replace />
        )}

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

        <span
          style={
            {
              "--dynamic-content": `'${commonLocalizer(
                "MODULE_COMMON_AUTHENTICATION_SCREEN_OR"
              )}'`,
            } as React.CSSProperties
          }
          className={`or text-nowrap relative h-6 before:absolute before:content-[''] before:z-0 before:top-1/2 before:left-0 before:-translate-y-1/2 before:h-[1px] before:w-full before:bg-foreground after:absolute after:content-[var(--dynamic-content)] after:z-1 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-background after:text-foreground after:px-4`}
        ></span>
        <div className="flex justify-center items-center gap-2 w-full">
          <Button
            type="button"
            className={"w-full"}
            onClick={() => loginWithGoogle()}
          >
            Google <FaGoogle />
          </Button>
          <Button
            type="button"
            className={"w-full"}
            onClick={() => loginWithLinkedin()}
          >
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
  );
};

export default Authentication;
