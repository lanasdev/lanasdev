"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// @ts-ignore
import Cal from "@calcom/embed-react";

export default function CallToCal() {
  // useEffect(() => {
  //   (async function () {
  //     const cal = await getCalApi();
  //     cal.ns.hallo("ui", {
  //       styles: { branding: { brandColor: "#0C0A09" } },
  //       hideEventTypeDetails: false,
  //       layout: "month_view",
  //     });
  //   })();
  // }, []);

  // Kontakt aufnehmen

  return (
    <Dialog>
      <DialogTrigger>
        <button className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          Kontakt aufnehmen
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-screen w-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>Buche ein Meeting</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <Cal
          calLink="lanas/hallo"
          // className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        />
      </DialogContent>
    </Dialog>
  );
}
