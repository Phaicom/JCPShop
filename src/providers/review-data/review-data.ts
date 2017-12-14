
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Review } from "../../models/review";
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the ReviewDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReviewDataProvider {

  reviewsListRef: AngularFirestoreCollection<Review>;

  constructor(public fireStore: AngularFirestore) {
    this.reviewsListRef = this.fireStore.collection<Review>(`/reviewsList`);
  }

  getReview(): Observable<Review[]> {
    return this.reviewsListRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        let data = action.payload.doc.data() as Review;
        const id = action.payload.doc.id;
        data['id'] = id;
        return data;
      });
    });
  }

  addReview(review: Review): void {
    this.reviewsListRef.add(review);
  }

  deleteReview(review: Review): void {
    this.reviewsListRef.doc(review.id).delete();
  }

  updateReview(review: Review): void {
    this.reviewsListRef.doc(review.id).update(review);
  }

}
