function findLongestWordLength(str) {
    var arr = [];
    var output = 0;
    var string = str + ' ';
    var i = 0;
    for (i = 0; i <= str.length; i++) {
        if (string.charAt(i) != ' ') {
            output++;
        } else {
            arr.push(output);
            output = 0;
        }
    }
    return Math.max.apply(Math, arr);
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");