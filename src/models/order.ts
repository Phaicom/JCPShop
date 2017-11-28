export class Order {
  id: string; // fireStore id use to delete and update
  name: string;
  description: string;
  iid: Array<string>; // array of itemId
  status: string; // status such as completed, cancle
  total: number;
  date: string; // purchase date
  oid: string;

  constructor(parameters) {

  }
}
