const userAge = prompt("how old are you");
if (userAge == false){
    alert("Шкода, що Ви не захотіли ввести свій вік")
}
else{
    const userPlace = prompt("in what place are you alive?");
    if (userPlace == false){
        alert("Шкода, що Ви не захотіли ввести своє місто");
    }
    else{
        const userSport = prompt("What is your favorite sport?");
        if (userSport == false){
            alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
        }
        else{
            let capital;
            switch(userPlace){
                case "Київ":
                    capital = "Ти живеш у столиці України" ;
                   break;
                case "Вашингтон":
                    capital = "Ти живеш у столиці США" ;
                    break;
                case "Лондон":
                    capital = "Ти живеш у столиці великобританіі" ;
                    break;
                default:
                    capital= `ти живеш у місті ${userPlace}`;
            }
            let champion;
            switch(userSport){
                case "футбол":
                    champion = "Круто! Хочеш стати як Роналду" ;
                   break;
                case "волейбол":
                    champion = "Круто! Хочеш стати як Эрвин Нгапет" ;
                    break;
                case "баскетбол":
                    champion = "Круто! Хочеш стати як Леброн Джеймс" ;
                    break;
                default:
                    champion = `твій улюблений вид спорту ${userSport}`;
            }
            alert(
                `${userAge} ${capital} ${champion}`
            )
        }
    }
}
