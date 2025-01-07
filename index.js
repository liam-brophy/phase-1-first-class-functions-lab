// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));


const returnLastTwoDrivers = (drivers) => drivers.slice(2,4); 
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = (int) =>  function(multiplier) {
        return int * multiplier;
    };

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, fn) => fn(arrayOfDrivers)