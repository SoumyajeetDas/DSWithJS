class queue {
    item = [];
    maxSize;
    front;
    rear;

    constructor(maxLength) {
        this.currentSize = this.item.length,
            this.maxSize = maxLength,
            this.front = -1,
            this.rear = -1
    }

    isFull() {
        if (this.front === 0 && this.rear === this.maxSize - 1) {
            return true;
        }

        if (this.front === this.rear + 1) {
            return true;
        }

        return false;
    }

    isEmpty() {
        if (this.front === -1) return true;

        else return false;
    }


    enqueue(newValue) {

        /*
        1) check if the queue is full
        2) for the first element, set value of FRONT to 0
        3) circularly increase the REAR index by 1 (i.e. if the rear reaches the end, next it would be at the start of the queue)
        4) add the new element in the position pointed to by REAR
         */

        // Check if the queue is full
        if (this.isFull()) {
            console.log("Queue Overflow");
        }
        else {

            // for the first element, set value of FRONT to 0
            if (this.front === -1 && this.rear === -1) {
                this.front++;
            }

            //  circularly increase the REAR index by 1 (i.e. if the rear reaches the end, next it would be at the start of the queue)
            this.rear = (this.rear + 1) % this.maxSize;


            // add the new element in the position pointed to by REAR
            this.item[this.rear] = newValue;

            console.log(`${newValue} enqueued`)

        }
    }


    dequeue() {

        /*
        1) check if the queue is empty
        2) return the value pointed by FRONT
        3) circularly increase the FRONT index by 1
        4) for the last element, reset the values of FRONT and REAR to -1
         */

        // check if the queue is empty
        if (this.isEmpty()) console.log("Queue Underflow");

        else {

            // for the last element, reset the values of FRONT and REAR to -1
            if (this.front === this.rear) {

                console.log(`${this.item[this.front]} dequeued`)
                this.front = -1;
                this.rear = -1;

            }
            else {

                // return the value pointed by FRONT
                console.log(`${this.item[this.front]} dequeued`);

                // circularly increase the FRONT index by 1
                this.front = (this.front + 1) % this.maxSize;
            }
        }
    }


    display() {

        var i;


        if (this.isEmpty()) console.log("Queue Empty");

        else {

            console.log("Items in Queue : ");
            
            for (i = this.front; i != this.rear; i = (i + 1) % this.maxSize) {

                console.log(this.item[i])
            }

            console.log(this.item[i])
        }
    }

}

console.clear();

let q = new queue(5);


q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.enqueue(60);
q.enqueue(70);
q.enqueue(120);
q.enqueue(90);
q.enqueue(100);


q.display();

q.dequeue();
q.dequeue();
q.dequeue();

q.display();


q.enqueue(70);
q.enqueue(120);


q.dequeue();

q.display();