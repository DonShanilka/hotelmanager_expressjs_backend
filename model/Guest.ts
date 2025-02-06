import { Accusation } from "./Accusation";
import { Booking } from "./Booking";
import { Payment } from "./Payment";

export class Guest {
  guestId !: string;
  guestName !: string;
  contactNumber !: string;
  email !: string;
  roomNumber !: string;
  checkInDate !: string;
  checkOutDate !: string;
  nation !: string;

  bookings !: Booking[];
  payments !: Payment[];
}
