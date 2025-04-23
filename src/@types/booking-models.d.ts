
interface BookingModalProps {
  prestation?: Prestation;
  open: boolean;
  onClose: () => void;
  onBookingSuccess: () => void;
}