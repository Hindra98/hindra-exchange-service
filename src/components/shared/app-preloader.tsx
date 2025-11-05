import Image from "../form/Image";
import UILoader from "./ui-loader";
import { logo_blue } from "@/assets";


export default function AppPreloader () {

    return(
        <div className="form-base flex flex-col justify-center w-full">
            <div className="flex flex-col gap-6 justify-center min-h-[490px]">
            <div className="logo mx-auto py-4">
            <Image
                src={logo_blue}
                alt="HINDRA-EXCHANGE"
                title=""
                className="p-4"
            />
            </div>
            <div className="child flex justify-center items-center">
                <UILoader/>
            </div>
          </div>
        </div>
    );
};