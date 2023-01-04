
export function TempsDays(date, newDay1, newDay2, newDay3, newDay4, newDay5,allTimes) {
    for (let elem of allTimes) {
        let newDate = new Date(elem.dt_txt);
        let jourSem = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

        if (newDate.getDate() == (date.getDate() + 1) && newDate.getHours() == 6) {

            newDay1.appendChild(document.createTextNode(jourSem[newDate.getDay()] + ' '));
            newDay1.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + "°c "));
        }
        else if (newDate.getDate() == (date.getDate() + 1) && newDate.getHours() == 15) {

            newDay1.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + "°c "));
        }
        else if (newDate.getDate() == (date.getDate() + 2) && newDate.getHours() == 6) {
            newDay2.appendChild(document.createTextNode(jourSem[newDate.getDay()] + ' '));
            newDay2.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + "°c "));
        }
        else if (newDate.getDate() == (date.getDate() + 2) && newDate.getHours() == 15) {

            newDay2.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + "°c "));
        }

        else if (newDate.getDate() == (date.getDate() + 3) && newDate.getHours() == 6) {
            newDay3.appendChild(document.createTextNode(jourSem[newDate.getDay()] + ' '));
            newDay3.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + "°c "));
        }
        else if (newDate.getDate() == (date.getDate() + 3) && newDate.getHours() == 15) {

            newDay3.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + "°c "));
        }

        else if (newDate.getDate() == (date.getDate() + 4) && newDate.getHours() == 6) {

            newDay4.appendChild(document.createTextNode(jourSem[newDate.getDay()] + ' '));
            newDay4.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + "°c "));
        }
        else if (newDate.getDate() == (date.getDate() + 4) && newDate.getHours() == 15) {

            newDay4.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + "°c "));
        }
        else if (newDate.getDate() == (date.getDate() + 5) && newDate.getHours() == 6) {

            newDay5.appendChild(document.createTextNode(jourSem[newDate.getDay()] + ' '));
            newDay5.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + "°c "));
        }
        else if (newDate.getDate() == (date.getDate() + 5) && newDate.getHours() == 15) {

            newDay5.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + "°c "));

        }

    }
}