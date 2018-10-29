// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
  return function(multipliey){
    return multiplier * multipliey;
  };
};

const fareDoubler = function(num){
  return num * 2;
};

const fareTripler = function(num){
  return num * 3;
};

function fetchSpecifiedDrivers(drivers, fn){
  return fn(drivers);
}
