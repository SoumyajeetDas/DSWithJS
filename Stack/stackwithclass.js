class Stack {
    arr = [];
    currentSize;
    maxLength;

    constructor(size) {
        this.currentSize = this.arr.length,
            this.maxLength = size
    }

    push(newValue) {

        if (this.currentSize >= this.maxLength) {
            console.log("Stack Overflow for ", newValue);
        }
        else {
            this.arr[this.currentSize] = newValue;
            this.currentSize++;
        }

    }

    pop() {

        if (this.arr.length === 0) {
            console.log("Stack Underflow");
        }
        else {
            this.arr.length--;
        }

    }


    peek() {
        if (this.arr.length === 0) {
            console.log("Stack Overflow");
        }
        else {
            console.log("The topmost element is", this.arr[this.arr.length - 1]);
        }

    }

    display() {
        if (this.arr.length === 0) {
            console.log("Stack Overflow");
        }
        else {
            console.log('Array :', this.arr);
        }
    }
}



console.clear();



let s = new Stack(5);

s.push(20);
s.push(30);
s.push(40);
s.push(50);
s.push(60);
s.push(70);
s.push(120);
s.push(90);
s.push(100);


console.log("After pushing element");
s.display();


s.peek();




s.pop();
console.log("Popping Element");

s.display();