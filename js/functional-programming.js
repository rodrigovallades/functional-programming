function mapForEach(arr, fn) {
    
    // why declaring a new array and not using 'arr'?
    // because I don't want to modify the orignal array, passed by reference.
    // I want a new array
    var newArr = [];

    for (var i = 0; i < arr.length; i++ ) {
        newArr.push(
            fn(arr[i])
        )
    }
    return newArr;
};

var arr1 = [1, 2, 3];

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
})

function checkLimiter(arr, limiter) {
    return mapForEach(arr, function(limiter, item) {
        return item > limiter
    }.bind(this, limiter)); 
}

var arr3 = checkLimiter(arr1, 2);

console.log(arr1);
console.log(arr2);
console.log(arr3);