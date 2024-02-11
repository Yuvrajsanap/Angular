function DisplayFactor(No1) {
    var i = 0;
    for (i = 1; i <= (No1 / 2); i++) {
        if ((No1 % i) == 0) {
            console.log(i);
        }
    }
}
DisplayFactor(20);
