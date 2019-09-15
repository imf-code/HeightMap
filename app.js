'use strict';

const fs = require('fs');

//Used variables
var rawData;
var numOnly;
var mapArray;
var printOut;


//Read data from file, get number values
rawData = fs.readFileSync('L3324.asc', 'ascii');
numOnly = rawData.slice(157);


//Turn into 2D string array
mapArray = numOnly.split("\n")
for (let i = 0; i < mapArray.length; i++) {
    mapArray[i] = mapArray[i].split(" ");
}
mapArray.pop();


//Convert into float
function IntoFloat(item, index, arr) {
    arr[index] = parseFloat(item);
}

function DIntoFloat(item, index, arr) {
    arr[index].forEach(IntoFloat);
}

mapArray.forEach(DIntoFloat);


//Write boolMap
var boolMap = new Array(mapArray.length);
for (let row = 0; row < mapArray.length; row++) {
    boolMap[row] = [];
    for (let column = 0; column < mapArray[row].length; column++) {
        if (mapArray[row][column] > 0) {
            boolMap[row][column] = "1";
        }
        else {
            boolMap[row][column] = "0";
        }
    }
    mapArray[row].push("\n");
}


//Print the array into a string
for (let row = 0; row < boolMap.length; row++) {
    //printOut = boolMap[row].join("");

    console.log(...boolMap[row]); //Direct print (slow?)

    /* Old way
    for (let column = 0; column < mapArray[row].length; column++) {
        console.log(mapArray[row][column]);
    }
    */
}

console.log(printOut);


//Remove empty indexes, may or may not be needed
/*
function RemEmpty(empty) {
    return empty != "";
}
mapArray[0] = mapArray[0].filter(RemEmpty);
*/

/*Check if above sea level
function CheckIfAbove(item, index, arr) {
    if (item > 0) {
        boolMap[index] = 1;
    }
    else {
        boolMap[index] = 0;
    }
}
*/