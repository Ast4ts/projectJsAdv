function reverseString(str) {
    var out = "";
    var a = str.length - 1;
    var i = a;
    for(i = a; i >= 0; i -= 1) {
        var x = str.charAt(i);
        out += x
    }
    return(out);
}
reverseString("hello");
