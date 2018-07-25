// Code your solution here:

function driversWithRevenueOver(arr, revenue){
    return arr.filter(function(driver){ return driver.revenue > revenue})
}


function driverNamesWithRevenueOver(arr, revenue){
    newArr = arr.filter(function(driver){ return driver.revenue > revenue})
    return newArr.map(function(driver){return driver.name})
}
