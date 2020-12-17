function factorialize(num) {
    var i = 1;
    var n = 1;
    for (n = 1; n <= num; n++) {
        i = i * n;
    }
    return(i);
}
factorialize(5);
