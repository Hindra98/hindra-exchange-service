import { useDebounced } from "@/core/hooks";
import { HttpClient } from "@/http/http-client";

const profileUser = (http: HttpClient) => async () => {
  const response = await http.get("/my-profile");

  const result: ProfileUserResult = response.data;

  return response !== undefined ? (result as ProfileUserResult) : undefined;
};

const profiles = (http: HttpClient) => async (payload: object) => {
  const response = await http.get("/profiles", payload);

  const result: ProfilesResult = response.data;

  return response !== undefined ? (result as ProfilesResult) : undefined;
};

const deleteProfile = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/delete-profile", payload);

  const result: DeleteProfileResult = response.data;

  return response !== undefined ? (result as DeleteProfileResult) : undefined;
};

const updateProfile = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/update-profile", payload);

  return response.data as UpdateProfileResult;
};

const updateParams = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/update-params", payload);

  return response.data as UpdateParamsResult;
};

const updateEmail = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/update-email", payload);

  return response.data as UpdateEmailResult;
};

const updateOtpEmail = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/update-otp-email", payload);

  const result: UpdateOtpEmailResult = response.data;

  return response !== undefined ? (result as UpdateOtpEmailResult) : undefined;
};

const updatePhone = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/update-phone", payload);

  const result: UpdatePhoneResult = response.data;

  return response !== undefined ? (result as UpdatePhoneResult) : undefined;
};

const updateWebsite = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/update-website", payload);

  const result: UpdateWebsiteResult = response.data;

  return response !== undefined ? (result as UpdateWebsiteResult) : undefined;
};

const updateNotification = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/update-notification", payload);

  const result: UpdateNotificationResult = response.data;

  return response !== undefined
    ? (result as UpdateNotificationResult)
    : undefined;
};

const updatePicture = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/update-picture", payload);

  const result: UpdatePictureResult = response.data;

  return response !== undefined ? (result as UpdatePictureResult) : undefined;
};

export class ControllerApi {
  private readonly http = new HttpClient();

  public readonly profileUser = Object.assign(profileUser(this.http), {
    useResponse: (
      handler: (result: ProfileUserResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof profileUser>>[]
    ) =>
      useDebounced(
        () => this.profileUser().then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly profiles = Object.assign(profiles(this.http), {
    useResponse: (
      handler: (result: ProfilesResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof profiles>>[0]
    ) =>
      useDebounced(
        () => this.profiles(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly deleteProfile = Object.assign(deleteProfile(this.http), {
    useResponse: (
      handler: (result: DeleteProfileResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof deleteProfile>>[0]
    ) =>
      useDebounced(
        () => this.deleteProfile(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly updateProfile = Object.assign(updateProfile(this.http), {
    useResponse: (
      handler: (result: UpdateProfileResult) => unknown,
      args: Parameters<ReturnType<typeof updateProfile>>[0]
    ) =>
      useDebounced(
        () => this.updateProfile(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly updateParams = Object.assign(updateParams(this.http), {
    useResponse: (
      handler: (result: UpdateParamsResult) => unknown,
      args: Parameters<ReturnType<typeof updateParams>>[0]
    ) =>
      useDebounced(
        () => this.updateParams(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly updateEmail = Object.assign(updateEmail(this.http), {
    useResponse: (
      handler: (result: UpdateEmailResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof updateEmail>>[0]
    ) =>
      useDebounced(
        () => this.updateEmail(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly updateOtpEmail = Object.assign(updateOtpEmail(this.http), {
    useResponse: (
      handler: (result: UpdateOtpEmailResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof updateOtpEmail>>[0]
    ) =>
      useDebounced(
        () => this.updateOtpEmail(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly updatePhone = Object.assign(updatePhone(this.http), {
    useResponse: (
      handler: (result: UpdatePhoneResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof updatePhone>>[0]
    ) =>
      useDebounced(
        () => this.updatePhone(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly updateWebsite = Object.assign(updateWebsite(this.http), {
    useResponse: (
      handler: (result: UpdateWebsiteResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof updateWebsite>>[0]
    ) =>
      useDebounced(
        () => this.updateWebsite(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly updateNotification = Object.assign(
    updateNotification(this.http),
    {
      useResponse: (
        handler: (result: UpdateNotificationResult | undefined) => unknown,
        args: Parameters<ReturnType<typeof updateNotification>>[0]
      ) =>
        useDebounced(
          () => this.updateNotification(args).then(handler),
          Object.values(args),
          500
        ),
    }
  );

  public readonly updatePicture = Object.assign(updatePicture(this.http), {
    useResponse: (
      handler: (result: UpdatePictureResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof updatePicture>>[0]
    ) =>
      useDebounced(
        () => this.updatePicture(args).then(handler),
        Object.values(args),
        500
      ),
  });
}
