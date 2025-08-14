import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../buttons/button";

export const ConfirmAction = ({
  title,
  description = "",
  cancel = "Annuler",
  submit = "Confirmer",
  isAlert = false,
  open,
  onClose,
  onHandleSubmit,
}: ConfirmActionsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription
          id="booking-modal"
          className="w-full flex flex-col gap-5"
        >
          {description}

          <div className="w-full flex items-center justify-end gap-2">
            <Button type={"button"} className={"w-32"} onClick={onClose}>
              {cancel}
            </Button>
            {!isAlert && (
              <Button type="button" className={"w-32"} onClick={onHandleSubmit}>
                {submit}
              </Button>
            )}
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
