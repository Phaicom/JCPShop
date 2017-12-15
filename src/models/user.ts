export class User {
  id: string; // fireStore id use to delete and update
  displayName: string;
  email: string;
  phoneNumber: number;
  photoURL: string;
  providerId: string;
  uid: string;
  mid: Array<string>;

  constructor(parameters) {

  }
}
