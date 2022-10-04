/* eslint-disable jsx-a11y/alt-text */
import { Image } from "react-datocms";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Testimonials = ({ testimonials }) => {
  return (
    <div className="pt-16">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={7000}
      >
        {testimonials.map((t) => (
          <div
            key={t.slug}
            className="flex flex-col items-center justify-around pt-16 "
          >
            <div className="h-32 w-32">
              <Image
                data={t.image.responsiveImage}
                className="h-32 w-32"
                pictureClassName="rounded-full object-cover max-w-md max-h-md"
              />
            </div>
            <p className="max-w-xs pt-8 sm:min-w-0">{t.content}</p>
            <h3 className="pt-4 ">{t.name}</h3>
            <p className="pb-16 text-gray-500 ">{t.company}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
