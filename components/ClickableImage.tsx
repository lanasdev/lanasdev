import { Image, SRCImage, ResponsiveImageType } from "react-datocms";

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

const ClickableImage = ({ data }: any) => {
  return (
    <Dialog>
      <DialogTrigger>
        <SRCImage data={data} />
      </DialogTrigger>
      <DialogContent className="rounded-md p-0 sm:max-w-full">
        <SRCImage data={data} className="h-auto w-full object-cover" />
      </DialogContent>
    </Dialog>
  );
};

export default ClickableImage;
