import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  // username = '';
  // password = '';
  // userCreated = false;
  // vreme: any = new Date();  

  

  // users: Array<User> = [];
  

  // addUser(){
  //   this.userCreated = true;
  //   let userObj = new User();
  //   userObj.username=this.username;
  //   userObj.password=this.password;
  //   this.users.push(userObj);
  //   this.username=""; 
  //   this.password=""; 
  //   console.log(this.users);
  // }

  loadedFeature = 'zahtevi';

  onNavigate(featrue: string) {
    this.loadedFeature = featrue;
  }

}
