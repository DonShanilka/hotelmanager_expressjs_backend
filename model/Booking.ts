import { BookingStatus } from "./BookingStatus";
import { Guest } from "./Guest";
import { Payment } from "./Payment"
import { Service } from "./Service";

export class Booking {
  bookingID !: number;
  guestID !: string;
  roomNumber !: string;
  checkInDate !: string;
  checkOutDate !: string;
  totalAmount !: number;
  totalNight !: number;
  bookingStatus !: BookingStatus;
  createdAt !: string;
  
  Guest !: Guest;
  Payments !: Payment[];
  Service !: Service[];
}
