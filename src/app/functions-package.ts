import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class FunctionsPackage {

    /**
     * Mensagem padrão de erro.
     */
    public static ERROR_MESSAGE = "Ocorreu um erro! Visualize o console para mais detalhes.";

    /**
     * Mensagem padrão de erro.
     */
    public static SUCESS_MESSAGE = "Operação realizada com sucesso!";


    constructor() { }

    /**
     * Exibe uma mensagem pop-up de erro ao usuário.
     */
    public showErrorMessage(): void {
        alert(FunctionsPackage.ERROR_MESSAGE);
    }

    /**
    * Exibe uma mensagem pop-up de sucesso ao usuário.
    */
    public showSucessMessage(): void {
        alert(FunctionsPackage.ERROR_MESSAGE);
    }

    /**
     * Verifica se o usuário está logado; caso contrário, direciona para a home page.
     */
     public verifyAuthenticatedUser(router: Router) {
        if (window.localStorage.length === 0) {
            alert("Você não está logado! Por favor, faça login.");
            router.navigate(['home']);
        }
    }
    
    /**
     * 
     * @param date A data-hora a ser formatada
     * @returns A data-hora no formato 'AAAA/MM/DD HH:MM:SS'
     */
    public formatDate(date: Date): string {
        var nDay = date.getDate();
        var nMonth = date.getMonth();
        var nYear = date.getFullYear();
        var nHours = date.getHours();
        var nMinutes = date.getMinutes();
        var nSeconds = date.getSeconds();

        var sDay, sMonth, sHours, sMinutes, sSeconds;

        if (nDay < 10) {
            sDay = "0" + nDay.toString();
        } else {
            sDay = nDay.toString();
        }

        nMonth++; //Observação: janeiro é o mês número zero.
        if (nMonth < 10) {
            sMonth = "0" + nMonth.toString();
        } else {
            sMonth = nMonth.toString();
        }

        if (nHours < 10) {
            sHours = "0" + nHours.toString();
        } else {
            sHours = nHours.toString();
        }

        if (nMinutes < 10) {
            sMinutes = "0" + nMinutes.toString();
        } else {
            sMinutes = nMinutes.toString();
        }

        if (nSeconds < 10) {
            sSeconds = "0" + nSeconds.toString();
        } else {
            sSeconds = nSeconds.toString();
        }

        return nYear.toString() + "/" + sMonth + "/" + sDay + " " + sHours + ":" + sMinutes + ":" + sSeconds;
    }

}
