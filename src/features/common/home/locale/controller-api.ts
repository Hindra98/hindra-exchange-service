import { useDebounced } from "@/core/hooks";
import { HttpClient } from "@/http/http-client";

const authenticateUser = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/v1/oauth/authenticate", payload);

  const result: AuthenticateUserResult = response.data;

  return response !== undefined
    ? (result as AuthenticateUserResult)
    : undefined;
};

const register = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/v1/oauth/register", payload);

  return response.data as RegisterResult;
};

const forgotPassword = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/v1/oauth/forgot-password", payload);

  const result: UpdateStrictResult = response.data;

  return response !== undefined ? (result as UpdateStrictResult) : undefined;
};

const resetPassword = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/v1/oauth/reset-password", payload);

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

}
