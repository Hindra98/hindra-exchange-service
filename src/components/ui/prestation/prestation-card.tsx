// PrestationCard.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "../badge";
import { Button } from "../buttons/button";
import { useState } from "react";
import { BookingModal } from "@/features/management/booking/booking-modal";

interface PrestationCardProps {
  prestation: Prestation;
}

export const PrestationCard = ({ prestation }: PrestationCardProps) => {
  const [prestationState, setPrestationState] = useState<Prestation>();
  const [open, setOpen] = useState(false);
  const handleBooking = (bookBenefit: Prestation) => {
    setPrestationState(bookBenefit);
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onBookingSuccess = () => {
    setOpen(true);
  };
  return (
    <>
      <Card className="h-full gap-2 py-0 overflow-hidden group hover:shadow-lg">
        <CardHeader className="border-b h-52 w-full flex justify-center items-center overflow-hidden px-0 !pb-0">
          {prestation?.picture ? (
            <img
              src={prestation?.picture}
              alt={prestation.title}
              className="object-cover size-full group-hover:scale-125 duration-300 overflow-hidden"
            />
          ) : (
            <span className="font-thin text-xl group-hover:scale-125 duration-300">
              {prestation.title}
            </span>
          )}
        </CardHeader>
        <CardContent className="flex-grow">
          <CardTitle className="flex justify-between items-start w-full">
            <span>{prestation.title}</span>
            <Badge variant="outline">{prestation.category}</Badge>
          </CardTitle>
          <span className="text-muted-foreground text-sm italic underline">
            {prestation.location}
          </span>
          <CardDescription className="text-sm text-muted-foreground line-clamp-2">
            {prestation.description}
          </CardDescription>
        </CardContent>

        <CardFooter className="flex justify-between items-center pt-0 pb-2">
          <span className="font-semibold">{prestation.price} FCFA</span>
          <Button variant="outline" onClick={() => handleBooking(prestation)}>
            Réserver
          </Button>
        </CardFooter>
      </Card>
      <BookingModal
        open={open}
        onClose={onClose}
        onBookingSuccess={onBookingSuccess}
        prestation={prestationState as Prestation}
      />
    </>
  );
};
