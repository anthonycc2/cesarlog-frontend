import { Component, EventEmitter } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'CesarLog';

  showMenu: boolean;
  showMenuString: string;

  


  isAthenticatedUser: boolean;
  user: User;
  authenticatedUser: User;
  showErrorMessage: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isAthenticatedUser = false;
    this.user = new User();
    this.user.level = "COLABORADOR";
    this.authenticatedUser = new User();
    this.showErrorMessage = false;
  }

  /*///////OPCAO COM EVENT-EMITTER
  this.showMenu = false;
  this.showMenuString = this.showMenu.toString();
    
    this.userService.showMenuEmitter.subscribe(
      mostrar => this.showMenu = mostrar
    );*/

    /////OPCAO COM LOCAL-STORAGE
    /*this.user = new User();
    //this.user = this.userService.userLoggedIn;
    if (window.localStorage.getItem('user_logged') != '')
      this.user.login = window.localStorage.getItem('user_logged');
    else
      this.user = { login: 'marcos', password: 'pontes', level: 'N'};*/

  tryLogin() {
    this.isAthenticatedUser = this.userService.login(this.user);

    if (this.isAthenticatedUser) {
      this.authenticatedUser = this.user;//=this.userService.getUser(user.login);
      window.localStorage.setItem('user_login', this.authenticatedUser.login);
      window.localStorage.setItem('user_level', this.authenticatedUser.level);
      this.showErrorMessage = false;
    } else {
      this.showErrorMessage = true;
    }
  }

  /*tryLogin222() {
    this.userService
      .login(this.user).subscribe(data => {
        console.log(data);
        //this.equipment = new Equipment();
      },
        error => { console.log(error); this.showErrorMessage = true; });
  }*/

  onSubmit() {
    this.tryLogin();
    //this.submittedForm = true;
    //this.gotoList();
  }

  /*gotoList() {
    this.router.navigate(['/list-equipments']);
  }*/

}