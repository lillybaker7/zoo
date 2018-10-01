class Bear extends Animal{

    constructor(name) {
        super(name, "fish");
    }

    sleep(){
        console.log(this.name + " hibernates for  4 months");
    }


}