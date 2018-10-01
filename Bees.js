class Bees extends Animal{

    constructor(name) {
        super(name, "marshmallows");
    }


    sleep(){
        console.log(this.name + " never sleeps");
    }


    eat(food){
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) + this.sleep() : console.log("YUCK!!! " + this.name + " will not eat " + food);
    }
}