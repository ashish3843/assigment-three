// https://github.com/ashish3843/assigment-three

// problem - 1:
function kilometerToMeter (kilometer) {
    var meter = 0;
    meter = kilometer * 1000; // 1 kilometer = 1000 meter

    return meter;
}
var range = kilometerToMeter (54);
console.log(range);

// problem - 2:

// var watch = 10;
// var mobile = 5;
// var laptop = 2;




//       var total =0;
//       total = watchTotal + mobileTotal +laptopTotal;
//     if (watch => 0) {
//         var watchTotal = watch * 50;
//     }if (mobile => 0) {
//         var mobileTotal = watch * 100;
//     }if (laptop => 0) {
//         var laptopTotal = laptop * 500;
//     }
//  
    

    

// console.log(total);

// problem - 3:

function hotelCost (stayNight) {
    var totalCost = 0;
     if (stayNight <= 10){
         totalCost = stayNight * 100; // first 10 night rent tk 100 per night.
     } else if (stayNight <= 20) {
         var first10 = 10 * 100;
         var remain = stayNight - 10;
         var secondPart = remain * 80; // second 10 night rent tk 80 per night.
         totalCost = first10 + secondPart;
     } else{
        var first10 = 10 * 100;
        var second10 = 10 * 80;
        var remain = stayNight - 20;
        var thirdPart = remain * 60; // after 20 night rent tk 60 per night.
        totalCost = first10 + second10 + thirdPart;
     }
    return totalCost;
}

var rentCost = hotelCost (18);
console.log(rentCost);

// problem - 4:

function megaFriend(friends) {
    var bigName = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i].length;
        if (element> bigName.length){
            bigName = friends[i];   
        }
        
    } return bigName;
}
var result = megaFriend(["Rahim","Babu", "Khairul", "Mahbubur"]);

console.log(result);
