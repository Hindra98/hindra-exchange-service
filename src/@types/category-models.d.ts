interface CategoryModalProps {
  category?: Category;
  setCategory?;
  open: boolean;
  onClose: () => void;
  onCategorySuccess: () => void;
}
interface Category {
  id: string;
  title: string;
  picture?: string;
  description?: string;
  destination?: "profile" | "benefit" | "categorie";
  created_at?: string;
  updated_at?: string;
}

interface CategoriesSuccessPayload {
  categories: Category[];
  token: string;
  message: string;
  message_email?: string;
}

interface CategoriesResult {
  payload: CategoriesSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface CategoryCommand {
  id?: string;
  userId?: string;
}

interface CategoryResult {
  payload: CategorySuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface CategorySuccessPayload {
  id: string;
  title: string;
  picture?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
  token: string;
  message: string;
  message_email?: string;
}

interface DeleteCategoryCommand {
  id: string[];
}
interface DeleteCategoryResult {
  payload: DeleteCategorySuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface DeleteCategorySuccessPayload {
  categories: Category[];
  token: string;
  message: string;
  message_email?: string;
}

interface UpdateCategoryCommand {
  id?: string;
  title: string;
  picture?: File;
  description?: string;
}
interface UpdateCategoryResult {
  payload: UpdateCategorySuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface UpdateCategorySuccessPayload {
  id: string;
  title: string;
  picture?: string;
  description?: string;
  token: string;
  message: string;
  message_email?: string;
}
interface AddCategorySuccessPayload {
  id: string;
  title: string;
  picture?: string;
  description?: string;
  token: string;
  message: string;
  message_email?: string;
}
