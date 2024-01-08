import Image from "next/image";
import ServiceCard from "./ServiceCard";

import Image1 from "@/public/img/image1-mini.webp";
import Image2 from "@/public/img/image2.webp";
import Image3 from "@/public/img/image3.webp";

export default function ServiceSection() {
  return (
    <div
      className="flex flex-col gap-8 overflow-x-hidden pb-24 pt-24 md:[&>*]:justify-between"
      id="dienstleistungen"
    >
      <div className="flex flex-row gap-16 pl-6 md:pl-16">
        <div className="flex flex-1 flex-col">
          <h5 className="text-xl font-semibold">Webdesign</h5>
          <p className="pt-4 leading-6">
            Wir designen und erstellen Websites für Ihr Unternehmen, die Ihnen
            mehr Kunden einbringen und tatsächlich konvertieren, falls nicht
            gibt es eine Geld-zurück-Garantie.
          </p>
        </div>
        <Image
          src={Image1}
          alt="Picture of the author"
          className=" aspect-[2/1] max-w-[50%] flex-1 rounded-l-xl object-cover object-center sm:max-w-[66%] md:aspect-[3/1]"
        />
      </div>
      <div className="flex flex-row-reverse gap-16 pr-6 md:pr-16">
        <div className="flex flex-col">
          <h5 className="text-xl font-semibold">Google My Business</h5>
          <p className="pt-4 leading-6">
            Wir helfen Ihnen bei Ihrem Google My Business und Apple Business
            Connect Profil und stellen sicher, dass Sie auf der Karte angezeigt
            werden.
          </p>
        </div>
        <Image
          src={Image2}
          alt="Picture of the author"
          className=" aspect-[2/1] max-w-[50%] flex-1 rounded-r-xl object-cover object-center sm:max-w-[66%] md:aspect-[3/1]"
        />
      </div>
      <div className="flex flex-row gap-16 pl-6 md:pl-16">
        <div className="flex flex-col">
          <h5 className="text-xl font-semibold">Website Automation</h5>
          <p className="pt-4 leading-6">
            Wir automatisieren Ihre Website mit Tools wie Zapier und stellen
            sicher, dass Sie sich auf Ihr Geschäft konzentrieren können.
          </p>
        </div>
        <Image
          src={Image3}
          alt="Picture of the author"
          className=" aspect-[2/1] max-w-[50%] flex-1 rounded-l-xl object-cover object-center sm:max-w-[66%] md:aspect-[3/1]"
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
