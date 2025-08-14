import { useDebounced } from "@/core/hooks";
import { HttpClient } from "@/http/http-client";

const benefit = (http: HttpClient) => async (payload: object) => {
  const response = await http.get("/benefit", payload);

  const result: BenefitResult = response.data;

  return response !== undefined ? (result as BenefitResult) : undefined;
};

const benefits = (http: HttpClient) => async () => {
  const response = await http.get("/benefits");

  const result: BenefitsResult = response.data;

  return response !== undefined ? (result as BenefitsResult) : undefined;
};

const deleteBenefit = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/delete-benefit", payload);

  const result: DeleteBenefitResult = response.data;

  return response !== undefined ? (result as DeleteBenefitResult) : undefined;
};

const updateBenefit = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/update-benefit", payload);

  return response.data as UpdateBenefitResult;
};


export class ControllerApi {
  private readonly http = new HttpClient();

  public readonly benefit = Object.assign(benefit(this.http), {
    useResponse: (
      handler: (result: BenefitResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof benefit>>[0]
    ) =>
      useDebounced(
        () => this.benefit(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly benefits = Object.assign(benefits(this.http), {
    useResponse: (
      handler: (result: BenefitsResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof benefits>>[]
    ) =>
      useDebounced(
        () => this.benefits().then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly deleteBenefit = Object.assign(deleteBenefit(this.http), {
    useResponse: (
      handler: (result: DeleteBenefitResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof deleteBenefit>>[0]
    ) =>
      useDebounced(
        () => this.deleteBenefit(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly updateBenefit = Object.assign(updateBenefit(this.http), {
    useResponse: (
      handler: (result: UpdateBenefitResult) => unknown,
      args: Parameters<ReturnType<typeof updateBenefit>>[0]
    ) =>
      useDebounced(
        () => this.updateBenefit(args).then(handler),
        Object.values(args),
        500
      ),
  });

}
