// Code your solution in this file!
//*returnFirstTwoDrivers. 'const' assigned an anonymouos function. 
// $const sayHello = () => {
    // return 'Hello'';
//};
// console.log(sayHello());

//1 starts at 0!! 
const returnFirstTwoDrivers = function(drivers){
    return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function(drivers){
 
    return[drivers[2], drivers[3]];
}


// why isn't 'selectingDrivers turning yellow like in the others? 
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// A Higher-Order function is a function that receives a function as an argument or returns the function as output.

function createFareMultiplier(interger){
    return function(fare){
        return fare*interger
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
} 

function selectDifferentDrivers(drivers, funct){
    return funct(drivers)
}