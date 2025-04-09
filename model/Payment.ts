export class Payment {
  paymentId !: number;
  guestId !: string;
  roomNumber !: string;
  guestName !: string;
  checkInDate !: Date;
  checkOutDate !: Date;
  totalNight !: number;
  roomPerNight !: number;
  additionalCharges !: number;
  paymentMethod !: string;
  totalPayment !: number;
  cashReceive !: number;
  createdAt !: Date;
  bookingBookingID !: number;
}

