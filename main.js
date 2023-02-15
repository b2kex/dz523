class Transport{
    constructor(tittle, model, color){
    this.tittle = tittle;
    this.model = model;
    this.color = color;
}
}
class Car extends Transport{
    constructor(tittle, model, color, maxspeed, speed)
    {super(tittle, model, color)
    this.maxspeed = maxspeed;
    this.speed = speed;
}
_currentSpeed = 120;
currentSpeed(){console.log(`Current Speed ${this._currentSpeed}`);
}
Brake(){
    if(
        this._currentSpeed >= this.maxspeed
    ){console.log(`Brake on car ${this.tittle} ${this.model} ${this.maxspeed}`);}
    else{
        this._currentSpeed -= this.speed;
        this.currentSpeed();
    }
}
}
const BMW = new Car('bmw', '525', 'black', 320, 20 )

BMW.Brake()
BMW.Brake()
BMW.Brake()
BMW.Brake()
BMW.Brake()