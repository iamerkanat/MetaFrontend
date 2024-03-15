let ar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

function showA(...ar){
    console.log(ar)
}

showA(...ar)


const meal = ["soup", "steak", "ice cream"]
    let [starter] = meal;
    console.log(starter);


    let obj = {
        key: 1,
        value: 4
    };

    let output = { ...obj };
    console.log(output.value, output.key)
    output.value -= obj.key;

    console.log(output.value);


    function count(...basket) {
        console.log(basket.length)
    }

    count(10, 9, 8, 7, 6);


    var result = {
        value: 7
      };
      console.log(JSON.stringify(result));
