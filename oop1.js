class Cat{
    say(){
        console.log('Mrr')
    }
}

class Mein extends Cat{
    say(){
        super.say()
        
        console.log('Myau')
           
    }

}

var Vasilisa = new Mein()
Vasilisa.say()