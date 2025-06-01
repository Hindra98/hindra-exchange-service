interface ButtonProps {
  children: React.ReactNode;
  variant?:
    | "default"
    | "blue"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  onClick?: () => void;
  id?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  title?: string;
  tabIndex?: number;
}

interface InputProps {
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  eye?: boolean;
  value?: string | number | readonly string[];
  title?: string;
  icon?: React.ReactNode;
  inverse?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  // onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

interface SelectProps {
  items: SelectItemsProps[];
  name?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
  title?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

interface SelectItemsProps {
  name?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
  value?: string | number | readonly string[];
  title?: string;
  selected?: boolean;
}

interface InputCheckProps {
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  id?: string;
  disabled?: boolean;
  checked: boolean;
  className?: string;
  label?: string;
  value?: string;
  title?: string;
  inverse?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

interface SwitchProps {
  name?: string;
  id?: string;
  disabled?: boolean;
  checked: boolean;
  className?: string;
  label?: string;
  value?: string;
  title?: string;
  inverse?: boolean;
  onChange?;
}
interface FilesUploadProps {
  allowedTypes?: string[];
  label?: string;
  className?: string;
  fileUrl?: string;
  capture?: "user" | "environment" | boolean;
  maxSize?: number; // en mega
  minFiles?: number;
  maxFiles?: number;
  required?: boolean;
  multiple?: boolean;
  onFilesChange?: (files: File[] | File) => void;
}

interface Imgrops extends React.HTMLImageElement {
  crossOrigin?: CrossOrigin;
  decoding?: "async" | "auto" | "sync" | undefined;
  fetchPriority?: "high" | "low" | "auto";
  loading?: "eager" | "lazy" | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  sizes?: string | undefined;

  src?: string;
  alt?: string | undefined;
  width?: number | string | undefined;
  height?: number | string | undefined;
  id?: string;
  className?: string;
  title?: string;
  onError?: React.ChangeEventHandler<HTMLImageElement>;
}

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (e) => void;
  href: string;
  title?: string;
  target?: string;
}

interface DropdownProps {
  name: React.ReactNode;
  elements: DropdownElementProps[];
  label?: string;
  className?: string;
  setChevron?: boolean;
  rounded?: boolean;
  isFulled?: boolean;
}
interface DropdownElementProps {
  name: React.ReactNode;
  className?: string;
  separator?: boolean;
  to?: string;
  selected?: boolean;
  onClick?;
}

interface AlertProps {
  children: React.ReactNode;
  variant?: "default" | "destructive";
  className?: string;
  id?: string;
}
interface NavbarProps {
  isConnect?: boolean;
  userLink?: DropdownElementProps[];
  profile?: ProfileUser;
}
interface NavbarLink {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: NavbarLink[];
}

interface CarouselSlide {
  height?: string;
  description?: string;
  picture?: string;
  title?: string;
  btn_title?: string;
  btn_url?: string;
}

interface CarouselProps {
  height?: string;
  canShowNextIcon?: boolean;
  canShowPreviousIcon?: boolean;
  canShowIndicators?: boolean;
  carouselSlides?: CarouselSlide[];
}

interface SidebarProps {
  title: React.ReactNode;
  position?: "fixed" | "absolute" | "sticky" | "static";
  link?: string;
  icon?: React.ReactNode;
  items?: SidebarItemsProps[];
}
interface SidebarItemsProps {
  separator?: boolean;
  title?: string;
  url?: string;
  description?: string;
  icon?: React.ReactNode;
  items?: SidebarItemsProps[];
}
