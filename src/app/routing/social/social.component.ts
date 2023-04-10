import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  userId = 0;
  constructor(private actroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.actroute.params.subscribe(data => {
      this.userId = data["id"];
    })
  }

}