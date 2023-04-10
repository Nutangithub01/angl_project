import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Listing } from '../listing.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private database: AngularFireDatabase) { }

  insertDocument(listing: Listing) {
    var id = this.database.database.ref().child("listing").push().key;
    listing.id = id!;
    return this.database.database.ref().child("listing").child(id!).set(listing)
  }

  deleteDocument(id: string) {
    return this.database.database.ref().child("listing").child(id).remove();
  }

  updateDocument(updatedObject: Listing) {
    return this.database.database.ref().child("listing").child(updatedObject.id).update(updatedObject);
  }

  fetchDocuments() {
    return this.database.database.ref().child("listing");
  }
}
