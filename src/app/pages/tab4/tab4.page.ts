import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data = Array(20);
  constructor() { }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length == 1000) {
        event.target.disabled = true;
      }
      this.data = [...this.data, ...Array(20)]
    }, 500);
  }

}

