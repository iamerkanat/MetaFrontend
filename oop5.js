class justBike{
    constructor(position, color, balons){
        this.color = color
        this.position = position
        this.balons = balons
    }
}

class horse{
    constructor(position, height, length){
        this.height = height
        this.length = length
        this.position = position
    }
}

class Gym{
    constructor(open, bikePos, horsePos){
        this.open=open
        this.bk = new justBike(bikePos, 'red', 2)
        this.hor = new horse(horsePos, 180, 200)
    }
}

var RendyGym = new Gym(24, 'cornerA', 'cornerD')
console.log(RendyGym)
console.log(RendyGym.bk)
console.log(RendyGym.bk.position)