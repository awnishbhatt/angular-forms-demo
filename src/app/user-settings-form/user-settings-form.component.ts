import { Component, OnInit } from '@angular/core';
import {UserSettings} from "../data/user-settings";

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  // originalUserSettings: UserSettings={
  //   name : "thing",
  //   emailOffers: true,
  //   interfaceStyle: "dark",
  //   subscriptionType:"2",
  //   notes: "some notes"
  // }

  originalUserSettings: UserSettings={
    name : "",
    emailOffers: false,
    interfaceStyle: "",
    subscriptionType:"",
    notes: ""
  }

  userSettings : UserSettings = {...this.originalUserSettings};

  constructor() { }

  ngOnInit(): void {
  }

}
