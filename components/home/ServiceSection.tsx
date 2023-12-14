import Image from "next/image";
import ServiceCard from "./ServiceCard";

import Image1 from "@/public/img/image1.jpg";
import Image2 from "@/public/img/image2.jpg";
import Image3 from "@/public/img/image3.jpg";

export default function ServiceSection() {
  return (
    <div
      className="pt-24 overflow-x-hidden pb-24 flex flex-col gap-8 md:[&>*]:justify-between"
      id="services"
    >
      <div className="flex flex-row pl-6 md:pl-16 gap-16">
        <div className="flex flex-col flex-1">
          <h5 className="text-xl font-semibold">Webdesign</h5>
          <p className="leading-6 pt-4">
            We design and create Websites for your Company that gets you more
            leads and actually converts
          </p>
        </div>
        <Image
          src={Image1}
          alt="Picture of the author"
          className=" rounded-l-xl flex-1 object-cover object-center max-w-[50%] sm:max-w-[66%] aspect-[2/1] md:aspect-[3/1]"
        />
      </div>
      <div className="flex flex-row-reverse pr-6 md:pr-16 gap-16">
        <div className="flex flex-col">
          <h5 className="text-xl font-semibold">Google My Business</h5>
          <p className="leading-6 pt-4">
            We help you with your Google My Business and Apple Business Connect
            Profile and make sure that you show up on the map
          </p>
        </div>
        <Image
          src={Image2}
          alt="Picture of the author"
          className=" rounded-r-xl flex-1 object-cover object-center max-w-[50%] sm:max-w-[66%] aspect-[2/1] md:aspect-[3/1]"
        />
      </div>
      <div className="flex flex-row pl-6 md:pl-16 gap-16">
        <div className="flex flex-col">
          <h5 className="text-xl font-semibold">Website Automation</h5>
          <p className="leading-6 pt-4">
            We automate your Website and make sure that you can focus on your
            Business
          </p>
        </div>
        <Image
          src={Image3}
          alt="Picture of the author"
          className=" rounded-l-xl flex-1 object-cover object-center max-w-[50%] sm:max-w-[66%] aspect-[2/1] md:aspect-[3/1]"
        />
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <ServiceCard
          title={"Web design & Development"}
          description={
            "We design and create Websites for your Company that gets you more leads and actually converts "
          }
        />
        <ServiceCard
          title={"Google My Business"}
          description={
            "We help you with your Google My Business and Apple Business Connect Profile and make sure that you show up on the map"
          }
        />
        <ServiceCard
          title={"Website Automation"}
          description={
            "We automate your Website and make sure that you can focus on your Business"
          }
        />
        <ServiceCard
          title={"Hosting"}
          description={
            "Optional. Website is offline? Not with us. We keep your Business online and running"
          }
        />
      </div> */}
    </div>
  );
}
