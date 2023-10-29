class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
        this.peutAttaquer = false
    };
    isLucky = function () {
        let précision = Math.random()
        if (précision < this.luck) {
            this.peutAttaquer = true
            console.log(this.name + " peut attaquer!")
        };      
    };
    attackPokemon = function(opponent) {
        this.isLucky()
        if (this.peutAttaquer = true) {
            let dégâts = (this.attack - opponent.defense)
            opponent.hp -= dégâts
            console.log(opponent.name + " a subit " + dégâts + " points de dégâts, il lui reste " + opponent.hp + " points de vie!")
        };
    };
};
let Salamèche = new Pokemon ("Salamèche","10","10","25",0.5);
let Carapuce = new Pokemon ("Carapuce","15","5","25",0.5);
while (true) {
    Salamèche.attackPokemon(Carapuce)
    if (Carapuce.hp <= 0) {
        console.log("Carapuce est mort, Salamèche l'emporte!")
        break;
    }
    Carapuce.attackPokemon(Salamèche)
    if (Salamèche.hp <= 0) {
        console.log("Salamèche est mort, Carapuce l'emporte!")
        break;
    } 
};