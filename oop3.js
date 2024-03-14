class Plane{
    constructor(lightsOn, state){
        this.lightsOn = lightsOn
        this.state = state

    }

    toggleLights(){
        this.lightsOn = !this.lightsOn
    }

    checkLights(){
        console.log("Now Lights: ", this.lightsOn)
    }

    

   

    
    

    displaySelf(){
        console.log(this)
    }

    getPrototype(){
        console.log(Object.getPrototypeOf(this))
    }
}


class AirAstana extends Plane{
    constructor(speed, length, color, lightsOn, state ){
        super(lightsOn, state)
        this.color = color
        this.length = length
        this.speed = speed 
    }

    fly(){
        super.checkLights()
    }
    ready(){
        super.toggleLights()
    }

    proto(){
        super.getPrototype()
        super.displaySelf()
    }

}

var Boing1 = new AirAstana(150, 200, 'red', false, 'land')


Boing1.ready()
Boing1.fly()
Boing1.proto()

