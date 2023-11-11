let arr = [20,30,40,50];

const binarySearch = (low, high, value) => {

    let mid;
    while (low <= high) {

        mid = parseInt((low + high) / 2);

        if (arr[mid] === value) {
            return mid;
        }
        else if (arr[mid] < value) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }

    return -1;

}


console.clear();

const isPresent = binarySearch(0, arr.length-1, 100);

if(isPresent>=0){
    console.log("Element Found at index : ",isPresent);
}
else{
    console.log("Element Not Found");
}