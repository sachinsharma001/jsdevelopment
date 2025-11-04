class car{
    #brand;
    #model;
    speed=0;
    isTrunkOpen= false;
    constructor(carDetails){
        this.#brand=carDetails.brand;
        this.#model=carDetails.model 
     
    }
    displayInfo()
    {
        const trunkStatus=this.isTrunkOpen? 'open' : 'close'
        console.log(`${this.#brand},${this.#model} ${this.speed}km/h ,Trunk= ${trunkStatus}`)
    }
     go() {
    if (!this.isTrunkOpen) {
      this.speed += 5;
    }

    // Limit the speed to 200.
    if (this.speed > 200) {
      this.speed = 200;
    }
  }
    brake()
    {
        if (this.speed>=5 && this.speed<=200)
         this.speed-=5
    }
    openTrunk()
    {
    if(this.speed===0)
      this.isTrunkOpen=true
    }
    closeTrunk()
    { 
     this.isTrunkOpen=false
    }
  
}
const car1=new car({
    brand: 'Toyota',
    model: 'Fortuner'
})
const car2= new car({
    brand: 'Toyota',
    model: 'Supra'
})

class RaceCar extends car{
acceleration;
 constructor(carDetails){
    super(carDetails);
    this.acceleration=carDetails.acceleration
 }
 
 go(){
    this.speed+=this.acceleration;
    if(this.speed>300)
        this.speed=300
 }

   openTrunk() {
    console.log('Race cars do not have a trunk.');
  }

  closeTrunk() {
    console.log('Race cars do not have a trunk.');}

}
const raceCar = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
});

car1.openTrunk()
car1.brake();
car1.go();
car1.displayInfo()
car1.closeTrunk()
car1.go();
car1.go();
car1.displayInfo()


raceCar.go();
raceCar.go();
raceCar.go();
raceCar.displayInfo();
raceCar.openTrunk();
raceCar.displayInfo();
raceCar.brake();
raceCar.displayInfo();