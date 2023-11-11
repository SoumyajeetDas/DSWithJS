const arr = [8, 2, 9, 3, 5, 7];

console.log(arr);


// Deleting Single Element at Specified Position
const deleteAtPosition = () => {
    let position = 2;

    for(let i=position; i<arr.length; i++){

        arr[i] = arr[i+1];
    }


    // On specifying the length array will not iterate to the last postion which sis ultimately not there
    arr.length = arr.length-1;

}


// Deleting Multiple Elements at Specified Position
const deleteMultipleElementsAtPosition = () => {
    let position = 2;
    let nEle = 2 // No of elements to be deleted

    for(let i=position; i<arr.length; i++){

        arr[i] = arr[i+nEle];
    }

    // On specifying the length array will not iterate to the last postion which sis ultimately not there
    arr.length = arr.length-nEle;
}

// deleteAtPosition();

deleteMultipleElementsAtPosition()

console.log(arr)
