
class Ninja{
    constructor(name){
        this.name = name;
        this.health=100;
        this.speed = 3;
        this.strength= 3;
    }
    sayName(){
        console.log(this.name)       
    }
    showStats(){
        console.log("Name: " + this.name+ ", Speed: " + this.speed + ", Strength: "+ this.strength + ", Health: " + this.health)
    }
    drinkSake(){
        this.health+=10;
    }
}
const ninja1= new Ninja("Emily")


class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10; 
    }
    speakWisdom(){
        this.drinkSake();
        const wisdoms= ["An apple a day keeps anyone away, if you throw it hard enough", "A cavity search is not the same thing as a search for cavities", " Ask again later"]
        console.log(wisdoms[Math.floor(Math.random()*3)])

    }
    showStats(){
        super.showStats()
        console.log("wisdom: " + this.wisdom)
    }
}

const sensei1 = new Sensei("Ylime")

sensei1.speakWisdom()
sensei1.showStats()