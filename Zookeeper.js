class Zookeeper {

    constructor(name){
        this.name = name;
    }

    feedAnimals(animals, food) {
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + Animal.getPopulation() + " total animals");
        for (var animal in animals){
            if (animals[animal] instanceof Animal) {
                animals[animal].eat(food);
            }
        }
    }
}