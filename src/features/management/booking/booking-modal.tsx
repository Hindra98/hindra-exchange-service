import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  aisite,
  bg,
  computer_program,
  illustration,
  programming_collage,
  programming_sitting,
} from "@/assets";
import Carousel from "@/components/ui/carousel/carousel";
import { useAppSelector } from "@/core/hooks/core-hooks";

export const BookingModal = ({
  prestation,
  open,
  onClose,
  onBookingSuccess,
}: BookingModalProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [notes, setNotes] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  
      const verifyRegistrationStore = useAppSelector(
        (state) => state.verifyRegistration
      );

  const handleSubmit = async () => {
    if (!date) {
      setError("Veuillez sélectionner une date");
      return;
    }

    // setIsLoading(true);
    setError("");
    console.log("Prestation reserve: ", prestation);
    onBookingSuccess();

    // try {
    //   await httpClient.post('/bookings', {
    //     service_id: prestation?.id,
    //     booking_date: date.toISOString(),
    //     notes,
    //   });

    //   onBookingSuccess();
    //   onClose();
    // } catch (err) {
    //   setError(err.response?.data?.message || 'Erreur lors de la réservation');
    // } finally {
    //   setIsLoading(false);
    // }
  };
  const prestationPictures: CarouselSlide[] = [
    {
      picture: aisite,
    },
    {
      picture: bg,
    },
    {
      picture: illustration,
    },
    {
      picture: programming_sitting,
    },
    {
      picture: programming_collage,
    },
    {
      picture: computer_program,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Réserver: {prestation?.title}</DialogTitle>
        </DialogHeader>
        <DialogDescription
          id="booking-modal"
          className="space-y-4 py-0 pe-1 w-full overflow-y-scroll max-h-[calc(100vh-100px)]"
        >
          <div className="space-y-2">
            <Carousel carouselSlides={prestationPictures} height="h-[200px]" />
            <div className="flex justify-between gap-2 w-full">
              <div className="flex flex-col gap-1 w-full">
                <h1 className="text-base font-semibold underline text-center">
                  Presentation du prestataire
                </h1>
                <p className="text-justify text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi expedita explicabo similique optio provident beatae
                  doloribus, illum tempore, architecto mollitia voluptates
                  libero? Eius nulla veniam eum consectetur expedita odio illo!
                </p>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <h1 className="font-semibold underline text-center">
                  Sélectionner une date
                </h1>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  locale={fr}
                  fromDate={new Date()}
                />
              </div>
            </div>
            {date && (
              <p className="text-sm mt-2">
                Sélectionné: {format(date, "PPP", { locale: fr })}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="notes">Notes supplémentaires</label>
            <Input
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Informations supplémentaires..."
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
            onClick={handleSubmit}
            disabled={verifyRegistrationStore?.pending}
            className="w-full"
          >
            {verifyRegistrationStore?.pending ? "Réservation en cours..." : "Confirmer la réservation"}
          </Button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
