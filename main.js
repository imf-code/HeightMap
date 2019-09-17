//Used variables
var rawData;
var strData = "";
var numOnly = "";
var mapArray;

// JavaScript source code
function ReadIt() {

    //Read data from form, get number values
    var file = document.getElementById('mapFile').files[0];
    var reader = new FileReader();
    reader.onload = () => {
        strData = event.target.result;
        DoIt();
    }
    reader.readAsText(file);
}

function DoIt() {
    //Read numbers from data
    numOnly = strData.slice(157);


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
                boolMap[row][column] = 1;
            }
            else {
                boolMap[row][column] = 0;
            }
        }
        //mapArray[row].push("\n");
    }
    console.log("Done.");

    /*
    //Make canvas
    console.log("Creating canvas...");
    var mapCanvas = document.getElementById("mapPicture");
    var mapContext = mapCanvas.getContext("2d");

    for (let i = 0; i < boolMap.length; i++)

    console.log("Done.");
    PrintIt();
    */
}

function PrintIt() {
    //Print an array to console
    var targetVar = boolMap;
    for (let row = 0; row < targetVar.length; row++) {
        //printOut = boolMap[row].join("");

        console.log(...targetVar[row]); //Direct print (slow?)
    }
}