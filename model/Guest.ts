import { Accusation } from "./Accusation";
import { Booking } from "./Booking";
import { Payment } from "./Payment";

export class Guest {
  guestId !: number;
  guestName !: string;
  contactNumber !: string;
  email !: string;
  roomNumber !: string;
  checkInDate !: string;
  checkOutDate !: string;
  nation !: string;

  accusations !: Accusation | null;
  bookings !: Booking[];
  payments !: Payment[];
}
