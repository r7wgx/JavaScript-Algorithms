/* Using the JavaScript language, have the function TripleDouble(num1,num2)
take both parameters being passed, and return 1 if there is a straight triple
of a number at any place in num1 and also a straight double of the same number in num2. 
For example: if num1 equals 451999277 and num2 equals 41177722899, then return 1 because
in the first parameter you have the straight triple 999 and you have a straight double,
99, of the same number in the second parameter. If this isn't the case, return 0.*/

function TripleDouble(num1, num2) {
    let number1 = subsidiary(num1, 3);    
    let number2 = subsidiary(num2, 2);
    let result = 0;
    if(number1 === 0 || number2 === 0) return 0

    if(!Array.isArray(number1) && !Array.isArray(number2)) {
        return number2 === number1.slice(0,2) ? 1 : 0
    } else if(!Array.isArray(number1) && Array.isArray(number2)) {
        return number2.indexOf(number1.slice(0,2)) > -1 ? 1 : 0
    } else if(!Array.isArray(number1) && Array.isArray(number2)) {
        for(let i=0; i < number1.length; i++) {
            if(number2.indexOf(number1[i].slice(0, 2)) > -1 ) {
                result = 1
            }
        }
    } else if(Array.isArray(number1) && !Array.isArray(number2)) {
        for(let i=0; i < number1.length; i++) {
            if(number2 === number1[i].slice(0, 2)) {
                result = 1
            }
        }
    }
}

const subsidiary= (n, d) => {
    let n1 = n.toString();

    let arr = [n1[0]]

    for(let i=1; i < n1.length; i++) {
        if(arr[arr.length-1].slice(-1)=== n1[i]) {
            let temp = arr[arr.length-1].concat(n1[i])
            arr.pop()
            arr.push(temp)
        } else {
            arr.push(n1[i])
        }
    } 
    const arr3 = arr.filter((item) => {return item.length===d})
    const arr2 = arr.filter((item) => {return item.length===d})

    if(d===3) {
        if(arr3.length === 0) return 0
        if(arr3.length === 1) return arr3[0]
        if(arr3.length > 1) return arr3
    } else if(d===2) {
        if(arr2.length === 0) return 0
        if(arr2.length === 1) return arr3[0]
        if(arr2.length > 1) return arr2
    }
}
  
  console.log(TripleDouble("451999277", "41177722899"))