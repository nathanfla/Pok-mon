let Personnage = {          //Création de l'objet Personnage
    name : "John",
    santéMentale : 10,
    changement: 0,
}
let liste = ["Anissa - Wejdene","Hey oh - Tragédie","Blue - Eiffel","The ketchup song - Las Ketchup","Papa pingouin - Pigloo"]   // array contenant les différentes musiques qui peuvent passer à la radio
function radio () {     //fonction qui séléctionne une musique aléatoirement
    m = liste[Math.floor (Math.random() * liste.length)]
}
let Trajet = {      //fonction qui permetde réaliser le trajet demandé (rencontre des 30 feux rouges et changement de taxi quand Anissa - Wejdene passe à la radio)
    nombreFeux : 30,
    feuRouge : function() {
        radio()
        this.nombreFeux -= 1
        if (this.nombreFeux > 0) {
        console.log("Vous écoutez actuellement " + m + " et il vous reste encore " + this.nombreFeux + " feu(x) rouge(s) à passer!")
        }
    }
}
while(true) {       //boubcle while qui permet de répéter la fonction Trajet tant que l'une des 2 fins possible ne s'est pas réalisée
    Trajet.feuRouge()
    if (m == liste [0]) {
        Personnage.santéMentale -= 1
        Personnage.changement += 1
        console.log("Changement de taxi!")
    }

    if(Trajet.nombreFeux <= 0){
        console.log(Personnage.name + " est bien arrivé, il lui a fallu " + Personnage.changement + " changement de taxi pour arriver à destination!")
        break;
    }
    if(Personnage.santéMentale <= 0) {
        console.log("Explosion!")
        break;
    }
} 