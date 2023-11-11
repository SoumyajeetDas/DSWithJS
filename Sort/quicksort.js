const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    
    // Taking pivot as last element
    let pivot = arr[arr.length - 1];

    let left = [];
    let right = [];
    let i;

    // arr.length-1 if not given will resulted in infinite loop. When the array will become element with one element and
    // i<arr.length-1 condition is not given it will result in an infinite loop.
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i]);
        }
    }


    return [...quickSort(left), pivot, ...quickSort(right)];


}

console.clear();


let arr = [-6, 0, -2, 24, 8, 16];

console.log(quickSort(arr));


