class Giraffe extends Animal{

    constructor(name) {
        super(name, "leaves");
    }

    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }

    eat(food){
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) + this.sleep() : console.log("YUCK!!! " + this.name + " will not eat " + food);
    }

}
