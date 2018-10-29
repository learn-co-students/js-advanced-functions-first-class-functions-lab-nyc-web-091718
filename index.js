// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return [drivers[0],drivers[1]];
}
const returnLastTwoDrivers = function(drivers){
  return [drivers[drivers.length-2],drivers[drivers.length-1]];
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier){
  return function(start){
    return start * multiplier;
  };
}

function fareDoubler(amount){
  const amountToDouble = createFareMultiplier(2);
  return amountToDouble(amount);
}

function fareTripler(amount){
  const amountToTriple = createFareMultiplier(3);
  return amountToTriple(amount);
}

function fetchSpecifiedDrivers(drivers, func){
  if (func === returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
  }
  else{
    return returnLastTwoDrivers(drivers);
  }
}
