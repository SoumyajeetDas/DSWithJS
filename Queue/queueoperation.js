let arr = [];
let currentSize = arr.length;
let max = 5;

console.clear();

const enqueue = (newValue) => {

    if (currentSize >= max) {
        console.log("Queue Overflow for ", newValue);
    }
    else {
        arr[currentSize] = newValue;
        currentSize++;
    }

}


const dequeue = () => {

    if (!arr.length) {
        console.log("Queue is underflow");
    }

    else {
        // arr.forEach((x, i) => arr[i] = arr[i + 1]);
        // arr.length--;
        arr.shift();
    }

}

enqueue(20);
enqueue(30);
enqueue(40);
enqueue(50);
enqueue(60);
enqueue(70);
enqueue(120);
enqueue(90);
enqueue(100);


console.log("Queue after enqueue element \n", arr);



dequeue();
console.log("Queue after dequeue element \n", arr);


