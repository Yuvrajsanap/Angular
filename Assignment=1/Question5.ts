function Fibonacci(No: number): void {
    var first: number = 0;
    var second: number = 1;
    var next: number;

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
