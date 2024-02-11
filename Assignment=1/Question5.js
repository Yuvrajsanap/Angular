function Fibonacci(No) {
    var first = 0;
    var second = 1;
    var next;
    console.log(first);
    console.log(second);
    while (first + second <= No) {
        next = first + second;
        console.log(next);
        first = second;
        second = next;
    }
}
Fibonacci(21);
