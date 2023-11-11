const arr = [8, 2, 9, 3, 5, 7];

console.log(arr);


// Inserting Single Element at Specified Position
const insertAtPosition = () => {
    let element = 20;
    let position = 2;

    for(let i=arr.length-1; i>=0; i--){
        if(i<position) break;

        arr[i+1] = arr[i];
    }

    arr[position] = element;

}


// Inserting Multiple Elements at Specified Position
const insertMultipleElementsAtPosition = () => {
    let element = [20, 30, 40];
    let position = 2;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (i < position) break;

        arr[i + (element.length)] = arr[i];
    }

    element.forEach((data, i) => arr[position + i] = data)
}

insertAtPosition();

// insertMultipleElementsAtPosition();

console.log(arr)
