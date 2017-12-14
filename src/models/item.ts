export class Item {
  id: string; // fireStore id use to delete and update
  name: string;
  description: string;
  photos: Array<string>; // array of photo path
  view: number;
  like: number;
  date: string; // sale date
  amount: number;
  category: Array<string>;
  inStock: number;
  variation:string;
  readyToShip: number;
  logistic: string;
  payment: string;
  iid: string;
  mid: string;

  constructor(parameters) {

  }
}
