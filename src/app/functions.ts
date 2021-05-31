import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class Functions {

    constructor(private router: Router) { }

    public verifyAuthenticatedUser() {
        if (window.localStorage.length === 0) {
            alert("Usuário não logado!!!");
            this.router.navigate(['home']);
        }
    }

}
