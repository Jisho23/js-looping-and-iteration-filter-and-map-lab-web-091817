// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver){
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  let validDrivers = driversWithRevenueOver(drivers, revenue);
  return validDrivers.map(function (driver){
    return driver.name;
  })
}

function exactMatch(drivers, matcher){
  let match = false;
  return drivers.filter( function (driver){
    for (const key in matcher){
      match = driver[key] === matcher[key];
    }
    return match;
  });
}

function exactMatchToList(drivers, matcher){
  return exactMatch(drivers, matcher).map(function (driver){
    return driver.name;
  });

}
