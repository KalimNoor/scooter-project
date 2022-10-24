class Scooter {
  // scooter code here
  constructor(station, user) {
    this.station = station;
    this.user = user;
    this.serial = Math.floor(Math.random() * 1000) + 1;//random number 1 1000
    this.charge = Math.floor(Math.random() * 10) + 1;// 1- 10 random
    this.isBroken = true;
    this.docked = false;
  }

  
  //Method rent
  rent() {
    if (this.isBroken === true && this.charge > 20) {
      this.docked = false;
      console.log("Enjoy the ride");
    } else if (this.charge <= 20) {
      console.log("Scooter is low on battery, please charge.");
    } else {
      console.log("Scooter is broken, please send a repair request");
    }
  }
  //Method Dock
  dock(station) {

    if(station){
      return this.station = station
    }else{
      return "Docking station required!"
    }
  }


  //Method recharge
  recharge() {
    this.scooter = 100;
  }

  //Setinterval is executing code every x amount of time however the set time out is after a period of time 
  async requestRepair () {
    if(this.isBroken ){
      console.log('Starting charge');      
      await (resolve => setTimeout(resolve, 2000)); // wait 2 seconds
      this.charge = 100
      console.log('Charge complete');     
    }
  }
}

const test = new Scooter("station", "user")

console.log(test.requestRepair());
 


module.exports = Scooter;