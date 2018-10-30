// Code your solution in this file!

const returnFirstTwoDrivers = function(array){return array.slice(0,2)};

const returnLastTwoDrivers = function(array){return array.slice(array.length-2, array.length)}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiple)
{
  return function(fare){ return fare * multiple;}
}


const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers,func)
{
  return func(drivers);
}
