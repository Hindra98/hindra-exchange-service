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
import React from "react";

const Dropdown = ({
  name = "",
  elements = [],
  
  label = "",
  className = "",
  setChevron = false,
  rounded = false,
  isFulled = false,
}: DropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        data-slot="button"
        className={cn(
          buttonVariants({
            variant: "default",
            size: "default",
            className: (rounded?"rounded-full":"")+" flex gap-1 items-center select-none cursor-pointer " + className,
          })
        )}
      >
        {name} {setChevron && <ChevronDown />}
      </DropdownMenuTrigger>
      <DropdownMenuContent className={isFulled? "w-full":"w-56"}>
        {label && label.length > 0 && (
          <>
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        {elements?.map((lng, idx) =>
          lng.to && lng.to.length > 0 ? (
            <React.Fragment key={idx}>
              {lng.separator && <DropdownMenuSeparator />}
              <DropdownMenuItem
                key={idx}
                className={lng.className + " !p-0 cursor-pointer"}
              >
                <Link to={lng.to} className="block w-full h-full px-2 py-1.5">{lng.name}</Link>
              </DropdownMenuItem>
            </React.Fragment>
          ) : (
            <React.Fragment key={idx}>
              {lng.separator && <DropdownMenuSeparator />}
              <DropdownMenuCheckboxItem
                className={lng.className + " cursor-pointer"}
                key={idx}
                checked={lng.selected || false}
                onClick={lng.onClick}
                onCheckedChange={undefined}
              >
                {lng.name}
              </DropdownMenuCheckboxItem>
            </React.Fragment>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
