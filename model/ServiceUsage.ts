import { Booking } from "./Booking";
import { Guest } from "./Guest";
import { Service } from "./Service";

export class ServiceUsage {
  usageID !: number;
  bookingID !: number;
  guestId !: number;
  serviceID !: number;
  quantity !: number;
  totalCost !: number;
  usageDate !: Date;
  Booking !: Booking;
  Service !: Service;
  Guest !: Guest;
}