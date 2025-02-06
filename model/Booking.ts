import { BookingStatus } from "./BookingStatus";
import { Guest } from "./Guest";
import { Payment } from "./Payment";
import { Room } from "./Room";
import { Service } from "./Service";

export class Booking {
  bookingID !: number;
  guestID !: number;
  roomNumber !: string;
  checkInDate !: Date;
  checkOutDate !: Date;
  totalAmount !: number;
  totalNight !: number;
  bookingStatus !: BookingStatus;
  createdAt !: Date;
  Guest !: Guest;
  Payments !: Payment[];
  Service !: Service[];
}