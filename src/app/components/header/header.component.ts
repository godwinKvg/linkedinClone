import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() search: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  goSearchPage() {
    (this.search.split(' ').includes('jobs')) ?
      this.router.navigate(['#search']) : this.router.navigate(['/tabs/feed/#search'])
  }

}
