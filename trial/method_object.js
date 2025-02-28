
let car = {state: 0, start, stop};
let oven = {state: 0, start, stop};

function start()
{
    this.state = 1;
}

function stop()
{
    this.state = 0;
}

car.start();
oven.start();
console.log(car.state);
console.log(oven.state);
car.stop();
oven.stop();
console.log(car.state);
console.log(oven.state);