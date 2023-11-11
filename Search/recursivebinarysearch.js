let arr = [20, 30, 40, 50];

const binarySearch = (arr, low, high, value) => {

    if (low > high) {
        return false;
    }

    else {

        let mid = parseInt((low + high) / 2);

        if (arr[mid] === value) {
            return mid;
        }
        else if (arr[mid] < value) {
            return binarySearch(arr, mid+1, high,value)
        }
        else {
            return binarySearch(arr, low, mid-1,value)
        }
    }

}


console.clear();

const isPresent = binarySearch(arr,0, arr.length - 1, 100);

if (isPresent || isPresent===0) {
    console.log("Element Found at index : ", isPresent);
}
else {
    console.log("Element Not Found");
}