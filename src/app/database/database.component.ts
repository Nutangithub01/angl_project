import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  listingArray: Listing[] = [];
  title = "";
  description ="";
  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit(): void {
    this.fetchListings();
  }

  fetchListings() {
    this.firebaseService.fetchDocuments().on('value', snapshot => {
      this.listingArray = [];
      snapshot.forEach(element => {
        this.listingArray.push(element.val());
      })
    })
  }

  saveListing() {
    const list = new Listing();
    list.title = this.title;
    list.description = this.description;
    this.firebaseService.insertDocument(list).then(data => {
        // this.fetchListings();
    }).catch(error => {
      alert(error);
    })
  }

  resetListing() {
    this.title = "";
    this.description = "";
  }

  editListing(list: Listing) {
    const newValue = prompt("Do you wnt to change?", list.title);
    if(newValue != "" || newValue != null) {
      list.title = newValue!;
      this.firebaseService.updateDocument(list).then(data => {
        // this.fetchListings();
      }).catch(error => {
        alert(error);
      })
    }
  }

  deleteListing(id: string) {
    this.firebaseService.deleteDocument(id).then(data => {
      // this.fetchListings();
    }).catch(error => {
      alert(error);
    })
  }

}
