class Unicorn extends Animal{

    constructor(name) {
        super(name, "pollen");
    }

    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }
}
