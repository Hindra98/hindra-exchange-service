import {
  aisite,
  bg,
  computer_program,
  illustration,
  programming_collage,
  programming_sitting,
} from "@/assets";
import Carousel from "@/components/ui/carousel/carousel";

const Banner = () => {
  const slides:CarouselSlide[] = [
    {
      picture: aisite,
      title: "Pas d'inspi",
      description:
        "Avec les costumes de AfroShop, lorem ipsum dolor sit amet et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap",
      btn_url: "/contact",
      btn_title: "Contact-us",
    },
    {
      picture: bg,
      title: "Restez droit dans vos bottes",
      description:
        "Avec les bottes de AfroShop, lorem ipsum dolor sit amet et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap",
      btn_url: "/offer",
      btn_title: "Voir",
    },
    {
      picture: illustration,
      title: "Nos nouveaux manteaux contre le froid",
      description:
        "Avec les manteaux de AfroShop, lorem ipsum dolor sit amet et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap",
      btn_url: "/shop",
      btn_title: "About-us",
    },
    {
      picture: programming_sitting,
      title: "Epuiseeeeeeeeeee",
      description:
        "Avec les costumes de AfroShop, lorem ipsum dolor sit amet et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap",
      btn_url: "/contact",
      btn_title: "Contact-us",
    },
    {
      picture: programming_collage,
      title: "Noblesse, Dignite, elegance",
      description:
        "Avec les costumes de AfroShop, lorem ipsum dolor sit amet et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap",
      btn_url: "/contact",
      btn_title: "Contact-us",
    },
    {
      picture: computer_program,
      title: "Epuiseeeeeeeeeee",
      description:
        "Avec les costumes de AfroShop, lorem ipsum dolor sit amet et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap",
      btn_url: "/contact",
      btn_title: "Contact-us",
    },
  ];
  return (
    <div className="w-full bg-transparent mx-auto">
      <Carousel carouselSlides={slides} />
    </div>
  );
};

export default Banner;
