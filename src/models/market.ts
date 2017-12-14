export class Market {
  id: string; // fireStore id use to delete and update
  name: string;
  email: string;
  phoneNumber: string;
  photoProfileURL: string;
  photoCoverURL: string;
  description: string;
  follow:number;
  date: string; // opening date
  mid: string;

  constructor(parameters) {

  }
}
