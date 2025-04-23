// 676 180 2773w
interface ButtonProps {
  children: React.ReactNode;
  variant?:
    | "default"
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
  className?: string;
  eye?: boolean;
  value?: string | number | readonly string[];
  title?: string;
  icon?: React.ReactNode;
  inverse?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
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
  userLink?: DropdownElementProps[]
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
};

 interface CarouselProps {
  height?: string;
  canShowNextIcon?: boolean;
  canShowPreviousIcon?: boolean;
  canShowIndicators?: boolean;
  carouselSlides?: CarouselSlide[]
 }
