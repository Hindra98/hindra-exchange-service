import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Dropdown = ({ name = "", label = "", elements = [] }: DropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        data-slot="button"
        className={cn(
          buttonVariants({
            variant: "default",
            size: "default",
            className: "flex gap-1 items-center select-none cursor-pointer",
          })
        )}
      >
        {name} <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {label && label.length > 0 && (
          <>
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        {elements?.map((lng, idx) =>
          lng.to && lng.to.length > 0 ? (
            <DropdownMenuItem key={idx}>
              <Link to={lng.to}>{lng.name}</Link>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuCheckboxItem
              className="cursor-pointer"
              key={idx}
              checked={lng.selected || false}
              onClick={lng.onClick}
              onCheckedChange={undefined}
            >
              {lng.name}
            </DropdownMenuCheckboxItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
