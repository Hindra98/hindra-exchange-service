import { useDebounced } from "@/core/hooks";
import { HttpClient } from "@/http/http-client";

const category = (http: HttpClient) => async (payload: object) => {
  const response = await http.get("/category", payload);

  const result: CategoryResult = response.data;

  return response !== undefined ? (result as CategoryResult) : undefined;
};

const categories = (http: HttpClient) => async (payload: object) => {
  const response = await http.get("/categories", payload);

  const result: CategoriesResult = response.data;

  return response !== undefined ? (result as CategoriesResult) : undefined;
};

const deleteCategory = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/delete-category", payload);

  const result: DeleteCategoryResult = response.data;

  return response !== undefined ? (result as DeleteCategoryResult) : undefined;
};

const updateCategory = (http: HttpClient) => async (payload: object) => {
  const response = await http.post("/update-category", payload);

  return response.data as UpdateCategoryResult;
};


export class ControllerApi {
  private readonly http = new HttpClient();

  public readonly category = Object.assign(category(this.http), {
    useResponse: (
      handler: (result: CategoryResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof category>>[0]
    ) =>
      useDebounced(
        () => this.category(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly categories = Object.assign(categories(this.http), {
    useResponse: (
      handler: (result: CategoriesResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof categories>>[0]
    ) =>
      useDebounced(
        () => this.categories(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly deleteCategory = Object.assign(deleteCategory(this.http), {
    useResponse: (
      handler: (result: DeleteCategoryResult | undefined) => unknown,
      args: Parameters<ReturnType<typeof deleteCategory>>[0]
    ) =>
      useDebounced(
        () => this.deleteCategory(args).then(handler),
        Object.values(args),
        500
      ),
  });

  public readonly updateCategory = Object.assign(updateCategory(this.http), {
    useResponse: (
      handler: (result: UpdateCategoryResult) => unknown,
      args: Parameters<ReturnType<typeof updateCategory>>[0]
    ) =>
      useDebounced(
        () => this.updateCategory(args).then(handler),
        Object.values(args),
        500
      ),
  });

}
