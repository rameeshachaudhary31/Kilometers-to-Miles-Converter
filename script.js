function calculateMiles(){
    let kilometer= parseFloat(document.getElementById("input").value);
    let milesInKilometers = 0.621371;
    let miles = kilometer * milesInKilometers;
    console.log(miles);
    document.getElementById("result").innerHTML = miles;
};