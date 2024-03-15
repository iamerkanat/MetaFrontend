// Task 1: Code a Person class
class Person{
    constuctor(name = "Tom", age = 20, energy = 100) {
        this.name = name
        this.age = age
        this.energy = energy
    }

    doSomethingFun() {
        this.energy -= 10
        console.log('energy: ', this.energy)
    }
    sleep() {
        this.energy += 10
    }
}

// Task 2: Code a Worker class

class Worker extends Person{
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy)
        this.xp = xp
        this.hourlyWage = hourlyWage
               
    }
    goToWork() {
        this.xp += 10
    }
    do() {
        super.doSomethingFun()
        console.log(this.energy)
    }
    getSelf(){ Object.getPrototypeOf(this) }
    

}


// Task 3: Code an intern object, run methods
function intern() {
    var Bob = new Worker(0, 10, 'Bob', 21, 110 )
    Bob.goToWork()
    console.log(Bob.xp)
    return Bob
}

console.log(intern())


// Task 4: Code a manager object, methods
function manager() {
    const manager = new Worker(100, 30, 'Alice', 30, 120)
    manager.doSomethingFun()
   
    console.log(manager.getSelf())
    return manager   
}

console.log(manager())