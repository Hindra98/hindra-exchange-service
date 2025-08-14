
interface Prestation {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  location?: string;
  picture?: string;
  pictures?: string;

  author?: User;
}


interface BenefitModalProps {
  benefit?: Benefit;
  setBenefit?;
  open: boolean;
  onClose: () => void;
  onBenefitSuccess: () => void;
}

interface Benefit {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  category: string;
  price: string;
  location: string;
  avaibility?: string;
  pictures?: string[];
  created_at?: string;
  updated_at?: string;
}

interface BenefitsSuccessPayload {
  benefits: Benefit[];
  token: string;
  message: string;
  message_email?: string;
}

interface BenefitsResult {
  payload: BenefitsSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface BenefitCommand {
  id?: string;
}

interface BenefitResult {
  payload: BenefitSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface BenefitSuccessPayload {
  id: string;
  user_id?: string;
  title: string;
  description?: string;
  category: string;
  price: string;
  location: string;
  avaibility: string;
  pictures?: string[];
  created_at?: string;
  updated_at?: string;
  token: string;
  message: string;
  message_email?: string;
}

interface DeleteBenefitCommand {
  id: string[];
}
interface DeleteBenefitResult {
  payload: DeleteBenefitSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface DeleteBenefitSuccessPayload {
  benefits: Benefit[];
  token: string;
  message: string;
  message_email?: string;
}

interface UpdateBenefitCommand {
  id?: string;
  title: string;
  description?: string;
  category: string;
  price: string;
  location: string;
  avaibility: string;
  pictures?: File[];
  picturesStore?: string[]
}
interface UpdateBenefitResult {
  payload: UpdateBenefitSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface UpdateBenefitSuccessPayload {
  id?: string;
  title: string;
  description?: string;
  category: string;
  price: string;
  location: string;
  avaibility: string;
  pictures?: string[];
  token: string;
  message: string;
  message_email?: string;
}
