import { Component } from '@angular/core';
import { AuthService } from '../Services/auth-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon-4app';
  constructor(/*private auth: AuthService*/) { }

  //login(islogged: boolean) {
  //  if (islogged) {
  //    this.auth.login();
  //  }
  //  else {
  //    this.auth.logout();
  //  }
  //}

}
