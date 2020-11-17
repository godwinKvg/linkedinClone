import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from 'src/app/models/profile.models';
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  moment = moment;
  @Input() profile: IProfile;
  constructor() { }

  ngOnInit() {}

}
