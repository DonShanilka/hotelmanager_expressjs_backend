import { Guest } from "./Guest";

export class Accusation {
  accusationId !: number;
  reportType !: string;
  guestId !: number;
  description !: string;
  guest !: Guest;
}