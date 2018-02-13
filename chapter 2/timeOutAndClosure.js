for (var i = 1; i <= 5; i++) {
    setTimeout(function delay() {
        console.log(i);
    }, i * 100);
}
// Output 6,6,6,6,6
// Fixed Solution
for (var i = 1; i <= 5; i++) {
    // Using the power of closure
    (function(j) {
        setTimeout(function delay() {
            console.log(j);
        }, j * 1000);
    })(i);
}
// Output 1,2,3,4,5