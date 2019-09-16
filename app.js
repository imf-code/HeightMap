'use strict';

const fs = require('fs');

//Used variables
var rawData = "";
var numOnly = "";
var mapArray;


//Read data from file, get number values
console.log("Reading file...");
rawData = fs.readFileSync('Testi2.asc', 'ascii');
numOnly = rawData.slice(157);
console.log("Done.");


//Turn into 2D string array
console.log("Converting to array...");
mapArray = numOnly.split("\n")
for (let i = 0; i < mapArray.length; i++) {
    mapArray[i] = mapArray[i].split(" ");
}
mapArray.pop();
console.log("Done.");


//Convert into float
console.log("Converting to float...");
function IntoFloat(item, index, arr) {
    arr[index] = parseFloat(item);
}

function DIntoFloat(item, index, arr) {
    arr[index].forEach(IntoFloat);
}

mapArray.forEach(DIntoFloat);
console.log("Done.");


//Write boolMap
console.log("Creating boolMap...")
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
    //mapArray[row].push("\n");
}
console.log("Done.")

//Print an array to console
var targetVar = boolMap;
for (let row = 0; row < targetVar.length; row++) {
    //printOut = boolMap[row].join("");

    console.log(...targetVar[row]); //Direct print (slow?)

    /* Old way
    for (let column = 0; column < mapArray[row].length; column++) {
        console.log(mapArray[row][column]);
    }
    */
}

//console.log(printOut);

/*Remove newline indexes (may or may not be needed)
function NoNewline(newline) {
    return newline != "\n";
}

function ForEachRemove(item, index, arr) {
    arr[index] = arr[index].filter(NoNewline);
}

mapArray.forEach(ForEachRemove);
*/