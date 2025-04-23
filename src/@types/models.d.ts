interface ErrorMessageItem {
  memberNames: string[];
  errorMessage: string;
}

interface UpdateStrictResult {
  payload: UpdateStrictSuccessPayload;
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}
interface UpdateStrictSuccessPayload {
  message: string;
}

interface ServerErrorMessageItem {
  detail: string;
  instance: string;
  message: string;
  status: number;
  title: string;
  type: string;
}

type Claims =
  | "userName"
  | "userId"
  | "role"
  | "fullname"
  | "userlanguage"
  | "exp";

// Define the structure of a retry queue item
interface RetryQueueItem {
  resolve: (value?: unknown) => void;
  reject: (error?: unknown) => void;
  config: AxiosRequestConfig;
}

type ServerNotificationTypes = "Success" | "Error" | "Warning" | "Info";

interface ServerNotification {
  time: number;
  type: ServerNotificationTypes;
  message: string;
}

interface SetServerNotificationAction {
  type: string;
  payload: ServerNotification;
}

type ParamsLink = {
  name?: React.JSX.Element | string;
  css?: string;
  disabled?: boolean;
  handleClick?: (e) => void;
  href: string;
  target: string;
};

type FooterItemData = {
  name: string;
  position: FooterItemPosition;
  to: string;
};
type FooterItemPosition = "left" | "center" | "right";

type NativeDigits = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
