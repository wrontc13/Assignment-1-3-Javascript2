function findMaxSequence(array) {
    var previousVal;
    var longestSequence = [];
    var currentSequence = [];

    array.forEach(function (val, i, arr) {
        if (i === 0 || previousVal < val) {
            currentSequence.push(val);
        } else {
           
            currentSequence = [val];
        }

        previousVal = val;

        
        if (longestSequence.length < currentSequence.length) {
            longestSequence = currentSequence;
        }
    });

    return "[" + longestSequence.join(", ") + "]";
}

var div = document.getElementById('data')
var div2 = document.getElementById('data2')
var div3 = document.getElementById('data3')
div.textContent = findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
div2.textContent = findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
div3.textContent = findMaxSequence([3, 2, 1])