class Animal {

    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep(){
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food){
        console.log(this. name + " eats "+ food);
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }

    static getPopulation() {
        return animalPopulation;
    }

}