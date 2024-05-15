import SectionContainer from "@/app/SectionContainer";
import Link from "next/link";
import {
  Image as DatoImage,
  ResponsiveImageType,
  StructuredText,
  renderNodeRule,
} from "react-datocms";

export default function StepsSection() {
  return (
    <SectionContainer className="">
      <h3 className="pb-16 text-3xl font-semibold">{"Schritte zur Website"}</h3>
      <div className="grid grid-flow-row grid-cols-1 gap-y-12 md:grid-cols-3 md:grid-rows-2 md:gap-8 ">
        <div className="flex flex-col">
          <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-sky-400 text-xl font-medium text-primary-foreground">
            1
          </span>
          <h4 className="pb-2 text-xl font-semibold">Planung und Konzeption</h4>
          <p>
            Der erste Schritt ist die Planung und Konzeption der Webseite. Dies
            beinhaltet das Verstehen der Bedürfnisse und Ziele von Ihnen, das
            Definieren der Zielgruppe sowie das Festlegen der Hauptfunktionen
            und des Inhalts der Webseite. Dabei werden möglichst schnell erste
            Entwürfe erstellt, die als visuelle Guides für die Struktur und das
            Layout der Webseite dienen.
          </p>
        </div>
        <div className="flex flex-col">
          <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-sky-400 text-xl font-medium text-primary-foreground">
            2
          </span>
          <h4 className="pb-2 text-xl font-semibold">Design und Entwicklung</h4>
          <p>
            Der erste Schritt ist die Planung und Konzeption der Webseite. Dies
            beinhaltet das Verstehen der Bedürfnisse und Ziele von Ihnen, das
            Definieren der Zielgruppe sowie das Festlegen der Hauptfunktionen
            und des Inhalts der Webseite. Dabei werden möglichst schnell erste
            Entwürfe erstellt, die als visuelle Guides für die Struktur und das
            Layout der Webseite dienen.
          </p>
        </div>
        <div className="flex flex-col">
          <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-sky-400 text-xl font-medium text-primary-foreground">
            3
          </span>
          <h4 className="pb-2 text-xl font-semibold">
            Inhalte und SEO-Optimierung
          </h4>
          <p>
            Nach der Entwicklung müssen die Inhalte für die Webseite erstellt
            und eingepflegt werden. Dies schließt Texte, Bilder, Videos und
            andere Medien ein. Dabei wird darauf geachtet, dass die Inhalte
            SEO-optimiert sind, um eine gute Platzierung in Suchmaschinen zu
            erreichen. Dazu gehören die Optimierung der Meta-Tags, das Setzen
            von internen Links und das Anpassen der Inhalte an relevante
            Keywords.
          </p>
        </div>
        <div className="flex flex-col md:col-span-3 md:row-start-2 md:mx-auto md:w-3/4">
          <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-sky-400 text-xl font-medium text-primary-foreground">
            4
          </span>
          <h4 className="pb-2 text-xl font-semibold">
            Test & Veröffentlichung
          </h4>
          <p>
            Bevor die Webseite live geht, wird sie umfassend getestet. Dies
            beinhaltet Funktionalitätstests, Usability-Tests und die Überprüfung
            der Kompatibilität mit verschiedenen Browsern und Geräten. Nachdem
            alle Tests abgeschlossen und etwaige Fehler behoben sind, wird die
            Webseite veröffentlicht. Auch nach dem Launch der Website verbessern
            wir auf Wunsch stetig die Performance und halten alles auf dem
            neuesten Stand, sodass Ihre Kunden immer eine gute Erfahrung mit
            Ihrem Online-Auftritt haben.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
