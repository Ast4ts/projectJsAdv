// function confirmEnding(str, target) {
//     var arrayStr = [];
//     var arrayTarget = [];
//     var lengthForStrCicle = str.length - target.length;
//     for (var i = target.length; i >= 0; i--) {
//         arrayTarget.push(target.charAt(i));
//     }
//     for (var a = str.length; a >= lengthForStrCicle; a--) {
//         arrayStr.push(str.charAt(a));
//     }
//     // тут нужно сравнить массивы
//     console.log(arrayStr);
//     console.log(arrayTarget);
// }
//
//
//
// confirmEnding("He has to give me a new name", "name")

// Нашел метод для строки, стыдно

function confirmEnding(str, target) {
    var shortStr = str.substring(str.length - target.length);
    return (shortStr == target);
    }
confirmEnding("Bastian", "n")




