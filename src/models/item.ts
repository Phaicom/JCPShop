export class Item {
  id: string; // fireStore id use to delete and update
  name: string;
  description: string;
  photos: Array<string>; // array of photo path
  date: string; // sale date
  amount: number;
  category: string;
  iid: string;
  mid: string;

  constructor(parameters) {

  }
}
