let arr = [];
let currentSize = arr.length;
let max = 5;

console.clear();

const push = (newValue) => {

    if (currentSize >= max) {
        console.log("Stack Overflow for ", newValue);
    }
    else {
        arr[currentSize] = newValue;
        currentSize++;
    }

}

const pop = () => {

    if (arr.length === 0) {
        console.log("Stack Underflow")
    }
    else {
        arr.length--;
    }

}


const peek = () => {
    if (arr.length === 0) {
        console.log("Stack is empty")
    }
    else {
        console.log("The topmost element is", arr[arr.length - 1])
    }

}


push(20);
push(30);
push(40);
push(50);
push(60);
push(70);
push(120);
push(90);
push(100);


console.log("Stack after pushing element \n", arr);


peek();


pop();
console.log("Stack after poping element \n", arr);


peek();