class ActiveCar {
  private readonly engineer = new Engineer();

  start() {
    this.engineer.start();
  }

  stop() {
    this.engineer.stop();
  }

  accelerate() {
    this.engineer.accelerate();
  }

  shutDown() {
    this.engineer.shutDown();
  }
}

class Engineer {
  start() {
    console.log("starting...");
  }

  stop() {
    console.log("stoping...");
  }

  accelerate() {
    console.log("acelerating...");
  }

  shutDown() {
    console.log("shutting down...");
  }
}

const car = new ActiveCar()
car.start()
