'use strict';


//   CHALLENGE

// const maesureaKelvin = function(){
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: prompt('Degree in celsius'), // prompt always returns a string
//   };

// //   console.table(measurement);
//   console.warn(measurement.value); // it will display the value as a warning
//   console.error(measurement.value); // it will displau the value as an error
//   const kelvin = Number(measurement.value) + 273;
//   return kelvin;
// } ;


// console.log(maesureaKelvin());
// console.table(maesureaKelvin());
// console.warn();
// console.error();

// CHALLENGE

// problem

// we need a function printForecast() that accept arr as an argument
// inside of this function we would need a loop to loop thru an array
// the string that is returned by function should except n number of array elements and display all values and days


// problem solve
const printForecast = function(arr){
    for(let i =0; i < arr.length;i++){
        if(typeof(arr[i]) !== 'number'){
            continue;
    }
     console.log(`... ${arr[i]} C in ${i + 1} days. `);
    
    }
}

printForecast([17,21,23,'error']);

const data = [17,21,23];
data.copyWithin
const data1 = [12,4,75,78,14];



