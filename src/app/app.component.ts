import { Component } from '@angular/core';
import { User } from "./shared/models";
import {AccountService} from "./shared/services/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // user: User;
  //
  constructor(private accountService: AccountService) {
    // this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.accountService.logout();
  }
}
