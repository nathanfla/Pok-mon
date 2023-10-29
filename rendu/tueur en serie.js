let tueur = {
    name : "Jason",
    PV : 100
}
class Caractéristiques {
    constructor() {
        let carac = ["nerd","sportif","blonde","bobo","lacoste TN","relou","alcoolique"]
        this.caractère = carac[Math.floor (Math.random() * carac.length)]
        let prénoms = ["Jordan","Fred","Yasmine","Chris","Joé","Hélène","Madeleine"]
        this.name = prénoms[Math.floor (Math.random() * prénoms.length)]
        this.vie = 1
    }
    die = function () {
        this.vie -= 1
        morts.push(this.name)
        console.log(tueur.name + " a tué " + this.name + "! ")
    }
    attaque = function () {
        tueur.PV -= 10
        console.log(this.name + " a esquivé et a infligé 10 points de dégâts à " + tueur.name + " il lui reste " + tueur.PV + " points de vie!")
    }
    ad = function () {
        tueur.PV -= 15
        this.vie -= 1
        morts.push(this.name)
        console.log(this.name + " a infligé 15 points de dégâts avant de mourir des mains de " + tueur.name + " il lui reste " + tueur.PV + " points de vie!")
    }
    actions = function () {
            let proba = Math.random()
            if (proba <= 0.3)   {
                this.die()
            }
            if (proba >0.3 && proba <= 0.8) {
                this.attaque()
            }
            if (proba > 0.8) {
            this.ad()
            }
    }
};
let morts = []

let Survivant1 = new Caractéristiques();
let Survivant2 = new Caractéristiques();
let Survivant3 = new Caractéristiques();
let Survivant4 = new Caractéristiques();
let Survivant5 = new Caractéristiques();
while(true) {
    if(tueur.PV <= 0) {
        console.log(tueur.name + " est mort! Les surviant ont gagné mais RIP à " + morts)
        break;
    }
    if(morts.length == 5) {
        console.log(tueur.name + " a gagné, tout les survivants sont morts!")
        break;
    }
    if (Survivant1.vie != 0) {
    Survivant1.actions()
    }
    if (Survivant2.vie != 0) {
    Survivant2.actions()
    }
    if (Survivant3.vie != 0) {
    Survivant3.actions()
    }
    if (Survivant4.vie != 0) {
    Survivant4.actions()
    }
    if (Survivant5.vie != 0) {
    Survivant5.actions()
    }
};