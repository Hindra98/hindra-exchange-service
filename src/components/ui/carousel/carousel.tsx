import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const CustomSlide = ({
  description,
  picture,
  title,
  btn_title,
  btn_url,
  height,
}: CarouselSlide) => (
  <section
    className={`relative custom-slide w-full ${height}`}
    style={{
      background: `url(${picture}) no-repeat center center`,
      backgroundSize: `cover`,
    }}
  >
    <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

    <div className="relative mx-auto flex items-center px-10 h-full">
      <div className="text-center mx-auto space-y-6 ltr:sm:text-left rtl:sm:text-right">
        {title && (
          <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            {title}
          </h1>
        )}
        {description && (
          <p className="hidden text-white/90 sm:block sm:text-lg sm:leading-relaxed w-2/3">
            {description}
          </p>
        )}
        {btn_url && (
          <div className="flex flex-wrap gap-4 text-center">
            <Link
              to={btn_url as string}
              className="block w-full rounded bg-background px-12 py-3 focus:outline-none focus:ring sm:w-auto p-2 text-xl duration-200 font-bold"
            >
              {btn_title || "Consulter"}
            </Link>
          </div>
        )}
      </div>
    </div>
  </section>
);

const Carousel = ({
  canShowNextIcon = true,
  canShowPreviousIcon = true,
  canShowIndicators = true,
  carouselSlides = [],
  height="h-[550px]",
}: CarouselProps) => {
  return (
    <div className="w-full bg-transparent mx-auto">
      <ShadCarousel opts={{ align: "center", loop: true }}>
        <CarouselContent>
          {carouselSlides.map((slide, idx) => (
            <CarouselItem key={idx}>
              <CustomSlide {...slide} height={height} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {canShowPreviousIcon && <CarouselPrevious />}
        {canShowNextIcon && <CarouselNext />}
        {canShowIndicators && <CarouselIndicators />}
      </ShadCarousel>
    </div>
  );
};

export default Carousel;
