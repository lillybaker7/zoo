function run() {
    var animals = [new Unicorn("Fluffy"), new Tiger("Tigger")];
    var zoe = new Zookeeper("Zoebot");
    zoe.feedAnimals(animals, "meat");
    Animal.getPopulation();
}

var animalPopulation = 0;