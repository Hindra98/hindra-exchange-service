import { logo_blue } from "@/assets";
import { appName } from "@/core/constants/common-constants";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={`flex flex-col overflow-hidden justify-center items-center gap-2 py-2 px-8 w-full text-center max-md:px-5 max-md:max-w-full`}
    >
      <hr className="border border-gray-500 opacity-50 sm:mx-auto text-center w-full" />

      <div className="flex flex-col gap-0">
        <Link to={"/"} className="flex items-center gap-0">
          <img src={logo_blue} alt={appName} width={80} />
          <span className="font-bold">{appName}</span>
        </Link>

        <p className="text-sm font-light text-gray-400 pb-2">
          &copy; {currentYear} {appName} | Tous droits réservés
        </p>
        <div className="flex items-center justify-center gap-2">
          <Link to={"https://x.com/" + appName} className="group border rounded-full p-2 hover:border-[#0077B5]">
            <FaTwitter className="size-4 text-muted-foreground group-hover:text-[#0077B5] transition" />
          </Link>
          <Link to={"https://facebook.com/" + appName} className="group border rounded-full p-2 hover:border-[#0007BF]">
            <FaFacebookF className="size-4 text-muted-foreground group-hover:text-[#0007BF] transition" />
          </Link>
          <Link to={"https://linkedin.com/in/" + appName} className="group border rounded-full p-2 hover:border-[#0077B5]">
            <FaLinkedinIn className="size-4 text-muted-foreground group-hover:text-[#0077B5] transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
