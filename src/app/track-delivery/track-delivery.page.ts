import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-track-delivery',
  templateUrl: './track-delivery.page.html',
  styleUrls: ['./track-delivery.page.scss'],
})
export class TrackDeliveryPage implements OnInit {
 fabAction = false;
  constructor() { }

  ngOnInit() {
  }
	
 toggleFab(){
        this.fabAction = !this.fabAction;
   }

}
