function reverseString(str) {






    return str;
}

reverseString("hello");
function reverseString(str) {
    let out = "";
    let a = str.length - 1;
    for(i = a; i >= 0; i -= 1) {
        x = str.charAt(i);
        out += x
    }
    return(out);
}
reverseString("hello");
