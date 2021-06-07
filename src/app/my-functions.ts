import { Router } from '@angular/router';

/**
 * Exibe uma mensagem pop-up de erro ao usuário.
 */
export function showErrorMessage(): void {
    alert(this.ERROR_MESSAGE);
}

/**
* Exibe uma mensagem pop-up de sucesso ao usuário.
*/
export function showSucessMessage(): void {
    alert(this.ERROR_MESSAGE);
}

/**
* Verifica se o usuário está logado; caso contrário, direciona para a home page.
*/
export function verifyAuthenticatedUser(router: Router) {
    if (window.localStorage.length === 0) {
        alert("Você não está logado! Por favor, faça login.");
        router.navigate(['home']);
    }
}