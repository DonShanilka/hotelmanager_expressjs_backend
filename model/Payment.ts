export class Payment {
  paymentId !: string;
  roomNumber !: string;
  guestName !: string;
  checkInDate !: Date;
  checkOutDate !: Date;
  totalNight !: number;
  roomPerNight !: number;
  additionalCharges !: number;
  paymentMethod !: string;
  cashReceive !: number;
  createdAt !: Date;
}