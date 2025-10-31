import Image from "next/image";
import { getSanityImageUrl } from "@/lib/sanity-image";
import type { SanityImageObject } from "@/lib/sanity";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ClickableImage = ({ data }: { data: SanityImageObject }) => {
  const imageUrl = getSanityImageUrl(data, { width: 1200 });
  const dimensions = data?.asset?.metadata?.dimensions;

  return (
    <Dialog>
      <DialogTrigger>
        <Image
          src={imageUrl}
          alt={data.alt || "Image"}
          width={dimensions?.width || 1200}
          height={dimensions?.height || 800}
          className="rounded-md"
        />
      </DialogTrigger>
      <DialogContent className="rounded-md p-0 sm:max-w-full">
        <Image
          src={imageUrl}
          alt={data.alt || "Image"}
          width={dimensions?.width || 1200}
          height={dimensions?.height || 800}
          className="h-auto w-full object-cover"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ClickableImage;
