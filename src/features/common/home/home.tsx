
import { useLocalizer } from "@/core/Localization";
import { PrestationList } from "../../management/prestation/prestations-list";
import Stats from "./components/stats";
import Banner from "./components/banner";

const Home = () => {
  const commonLocalizer = useLocalizer("Common-ResCommon");

  window.document.title = commonLocalizer("MODULE_COMMON_SIDEBAR_DASHBOARD");
  return (
    <div className="h-full flex flex-col justify-start mx-auto dashboard">
      <div className="px-10 pb-8">
        <div className="welcome flex md:flex-row xs:flex-col xs:mx-auto justify-between gap-4">
        <Banner />
        </div>

        <hr className="my-4 bg-gray-400 h-[1px]" />
        <PrestationList/>
        <hr className="my-4 bg-gray-400 h-[1px]" />
        <Stats />
      </div>
    </div>
  );
};

export default Home;
