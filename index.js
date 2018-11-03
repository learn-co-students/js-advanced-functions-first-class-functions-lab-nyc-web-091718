// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
  return array.slice(0, 2)
  // returns a copy of the drivers array from index 0 to before index 2
}

const returnLastTwoDrivers = (array) => {
  return array.slice(-2)
  // returns a copy of the last 2 elements in the drivers array
}

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
  return (num) => num * multiplier;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(array, cb) {
  // pass the array argument into the callback function (either returnFirstTwoDrivers or returnLastTwoDrivers)
  return cb(array);
}
