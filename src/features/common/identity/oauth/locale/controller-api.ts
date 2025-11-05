import { useDebounced } from "@/core/hooks";
import { HttpClient } from "@/http/http-client";

const authenticateUser = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/login", payload);

  const result: AuthenticateUserResult = response.data;

  return response !== undefined
    ? (result as AuthenticateUserResult)
    : undefined;
};

const authenticateUserByGoogle =
  (http: HttpClient) => async (payload: object) => {
    const response = await http.post("/login-google", payload);

    const result: AuthenticateUserResult = response.data;

    return response !== undefined
      ? (result as AuthenticateUserResult)
      : undefined;
  };

const authenticateUserByLinkedin =
  (http: HttpClient) => async (payload: object) => {
    const response = await http.post("/login-linkedin", payload);

    const result: AuthenticateUserResult = response.data;

    return response !== undefined
      ? (result as AuthenticateUserResult)
      : undefined;
  };

const register = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/register", payload);

  return response.data as RegisterResult;
};

const verifyIdentity = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/verify-identity", payload);

  return response.data as VerifyIdentityResult;
};

const resendPinCode = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/resend-pincode", payload);

  return response.data as ResendPinCodeResult;
};

const verifyRegistration = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/verify-registration", payload);

  const result: UpdateStrictResult = response.data;

  return response !== undefined ? (result as UpdateStrictResult) : undefined;
};

const forgotPassword = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/forgot-password", payload);

  const result: UpdateStrictResult = response.data;

  return response !== undefined ? (result as UpdateStrictResult) : undefined;
};

const resetPassword = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/reset-password", payload);

  const result: UpdateStrictResult = response.data;

  return response !== undefined ? (result as UpdateStrictResult) : undefined;
};

const signOut = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/sign-out", payload);

  const result: UpdateStrictResult = response.data;

  return response !== undefined ? (result as UpdateStrictResult) : undefined;
};

export class ControllerApi {
  private readonly http = new HttpClient();

  public readonly authenticateUser = Object.assign(
    authenticateUser(this.http),
    {
      useResponse: (
        handler: (result: AuthenticateUserResult | undefined) => unknown,
        args: Parameters<ReturnType<typeof authenticateUser>>[0]
      ) =>
        useDebounced(
          () => this.authenticateUser(args).then(handler),
          Object.values(args),
          500
        ),
    }
  );

  public readonly authenticateUserByGoogle = Object.assign(
    authenticateUserByGoogle(this.http),
    {
      useResponse: (
        handler: (result: AuthenticateUserResult | undefined) => unknown,
        args: Parameters<ReturnType<typeof authenticateUserByGoogle>>[0]
      ) =>
        useDebounced(
          () => this.authenticateUserByGoogle(args).then(handler),
          Object.values(args),
          500
        ),
    }
  );

  public readonly authenticateUserByLinkedin = Object.assign(
    authenticateUserByLinkedin(this.http),
    {
      useResponse: (
        handler: (result: AuthenticateUserResult | undefined) => unknown,
        args: Parameters<ReturnType<typeof authenticateUserByLinkedin>>[0]
      ) =>
        useDebounced(
          () => this.authenticateUserByLinkedin(args).then(handler),
          Object.values(args),
          500
        ),
    }
  );

  public readonly register = Object.assign(register(this.http), {
    useResponse: (
      handler: (result: RegisterResult) => unknown,
      args: Parameters<ReturnType<typeof register>>[0]
    ) =>
      useDebounced(
        () => this.register(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly verifyIdentity = Object.assign(verifyIdentity(this.http), {
    useResponse: (
      handler: (result: VerifyIdentityResult) => unknown,
      args: Parameters<ReturnType<typeof verifyIdentity>>[0]
    ) =>
      useDebounced(
        () => this.verifyIdentity(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly resendPinCode = Object.assign(resendPinCode(this.http), {
    useResponse: (
      handler: (result: ResendPinCodeResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof resendPinCode>>[0]
    ) =>
      useDebounced(
        () => this.resendPinCode(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly forgotPassword = Object.assign(forgotPassword(this.http), {
    useResponse: (
      handler: (result: UpdateStrictResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof forgotPassword>>[0]
    ) =>
      useDebounced(
        () => this.forgotPassword(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly verifyRegistration = Object.assign(
    verifyRegistration(this.http),
    {
      useResponse: (
        handler: (result: UpdateStrictResult | undefined) => unknown,
        args: Parameters<ReturnType<typeof verifyRegistration>>[0]
      ) =>
        useDebounced(
          () => this.verifyRegistration(args).then(handler),
          Object.values(args),
          500
        ),
    }
  );

  public readonly resetPassword = Object.assign(resetPassword(this.http), {
    useResponse: (
      handler: (result: UpdateStrictResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof resetPassword>>[0]
    ) =>
      useDebounced(
        () => this.resetPassword(args).then(handler),
        Object.values(args),
        500
      ),
  });
  public readonly signOut = Object.assign(signOut(this.http), {
    useResponse: (
      handler: (result: UpdateStrictResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof signOut>>[0]
    ) =>
      useDebounced(
        () => this.signOut(args).then(handler),
        Object.values(args),
        500
      ),
  });
}
