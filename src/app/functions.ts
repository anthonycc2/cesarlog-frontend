import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class Functions {

    constructor(private router: Router) { }

    public verifyAuthenticatedUser() {
        if (window.localStorage.length === 0) {
            alert("Você não está logado! Por favor, faça login.");
            this.router.navigate(['home']);
        }
    }

    /**
     * 
     * @param date A data-hora a ser formatada
     * @returns A data-hora no formato 'AAAA/MM/DD HH:MM:SS'
     */
    public formatDate(date: Date): string {
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        var dayS, monthS, hoursS, minutesS, secondsS;

        if (day < 10) {
            dayS = "0" + day.toString();
        } else {
            dayS = day.toString();
        }

        month++; //janeiro é o mês número zero
        if (month < 10) {
            monthS = "0" + month.toString();
        } else {
            monthS = month.toString();
        }

        if (hours < 10) {
            hoursS = "0" + hours.toString();
        } else {
            hoursS = hours.toString();
        }

        if (minutes < 10) {
            minutesS = "0" + minutes.toString();
        } else {
            minutesS = minutes.toString();
        }

        if (seconds < 10) {
            secondsS = "0" + seconds.toString();
        } else {
            secondsS = seconds.toString();
        }

        return year + "/" + monthS + "/" + dayS + " " + hoursS +":" + minutesS + ":" + secondsS; 
    }

    /**
     * Exibe uma mensagem de erro pop-up ao usuário.
     */
    public showErroMessage(): void {
        alert("Ocorreu um erro! Visualize o console para mais detalhes.");
    }

}
/*
function verifyAuthenticatedUser() {
   
    if (window.localStorage.length === 0) {
        alert("Você não está logado! Por favor, faça login.");
        this.router.navigate(['home']);
    }
}

function formatDate(date: Date): string {
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var dayS, monthS, hoursS, minutesS, secondsS;

    if (day < 10) {
        dayS = "0" + day.toString();
    } else {
        dayS = day.toString();
    }

    if (month < 10) {
        monthS = "0" + month.toString();
    } else {
        monthS = month.toString();
    }

    if (hours < 10) {
        hoursS = "0" + hours.toString();
    } else {
        hoursS = hours.toString();
    }

    if (minutes < 10) {
        minutesS = "0" + minutes.toString();
    } else {
        minutesS = minutes.toString();
    }

    if (seconds < 10) {
        secondsS = "0" + seconds.toString();
    } else {
        secondsS = seconds.toString();
    }

    return year + "/" + monthS + "/" + dayS + " " + hoursS +":" + minutesS + ":" + secondsS; 
}*/
