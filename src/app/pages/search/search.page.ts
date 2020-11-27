import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.router.url.split('/').includes('feed'))
  }

  onSearch() {
    console.log('Testing search based on route');
  }

}
