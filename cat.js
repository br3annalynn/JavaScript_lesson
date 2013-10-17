/*
create a cat object with properties:
-tiredness
-hunger
-lonliness
-happiness
add mthods that increase/decrease properties
add method that prints status
*/

var Cat  =  function(catName) {
    this.catName = catName;
    this.tiredness =  10;
    this.hunger = 10;
    this.loneliness = 10;
    this.happiness = 10;

    this.sleep =function (minutes){
        this.tiredness -= minutes;
    };
    this.eat = function(bitesOfKibble){
        this.hunger -= bitesOfKibble;
    };
    this.pet = function(strokes){
        this.loneliness -= strokes;
        this.happiness += strokes;
    };
    this.play = function(minutes){
        this.tiredness += minutes;
        this.hunger += minutes;
    };
    this.printStatus =function(){
        console.log("tiredness: " + this.tiredness + "\n" + "hunger: " + this.hunger + "\n" + "loneliness: " + this.loneliness + "\n" + "happiness" + this.happiness);
    };
};

var strawberryRose = new Cat("strawberryRose");

strawberryRose.play(6);

strawberryRose.printStatus();



