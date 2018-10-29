const returnFirstTwoDrivers = (function returnFirstTwoDrivers(drivers){
  return drivers.slice(0, 2);
});

const returnLastTwoDrivers = (function  returnLastTwoDrivers(drivers){
  return drivers.slice(Math.max(drivers.length - 2, 1));
});


const selectingDrivers = [
  returnFirstTwoDrivers, returnLastTwoDrivers,
];

// come back to this one
function createFareMultiplier(integer) {
  if (integer > 4) {
    return function (fare) {
      return fare * 5
    }
  }
  return function (fare) {
    return integer * fare
  };

}

const fareDoubler = createFareMultiplier(2)
// return function (fare) {
//   return 2 * fare
// };

// fareDoubler(10)
// return function (10) {
//   return 2 * 10
// };

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(drivers, getDrivers){
  return getDrivers(drivers)

}
