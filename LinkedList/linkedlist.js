class List {
    constructor() {

        this.head = {
            value: undefined,
            next: null
        }


        // Initially the tail and head should point to the same object.
        this.tail = this.head;
        this.size = 0;
    }

    isEmpty = () => {
        if (!this.size) return true;
        else return false;
    }


    // Inserting node at the last
    appendList = (data) => {

        // When the first node is added
        if (this.isEmpty()) {
            this.head.value = data;
            this.size++;
        }

        else {
            let newNode = {
                value: data,
                next: null
            }

            this.tail.next = newNode;


            // When new node will be added then tail should e pointed to that node
            this.tail = newNode;
            this.size++;
        }
    }


    appendAtPos = (index, data) => {
        // If the list is empty and value needs to be added to the first position.
        if (this.isEmpty() && index === 1) {
            this.head.value = data;
            this.size++;
        }

        // f the list is empty and value needs to be added anywhere other than first position.
        else if (this.isEmpty() && index > 1) {
            console.log("No data in list");
        }

        // If the value needs to be added to the last position
        else if (index === this.size + 1) {
            let newNode = {
                value: data,
                next: null
            }

            this.tail.next = newNode;


            // When new node will be added then tail should e pointed to that node
            this.tail = newNode;
            this.size++;
        }

        // If the value needs to be added to the index greater than the last position
        else if (index > this.size + 1) {
            console.log("The index value is not correct");
        }

        else {

            let newNode = {
                value: data,
                next: null
            }

            // To add the node in the first position
            if (index === 1) {
                newNode.next = this.head;
                this.head = newNode;
            }

            else {
                var prevNode = this.head;
                let counter = 0;

                while (counter < index - 2) {
                    prevNode = prevNode.next;
                    counter++;
                }

                newNode.next = prevNode.next;

                prevNode.next = newNode;

            }

            this.size++;
        }

    }


    removeNode = (index) => {

        if (index > this.size) console.log("Please provde correct index");

        else {

            // Check if the list is empty or not
            if (this.isEmpty()) console.log("No data to remove");

            else {

                // Deleting the first node
                if (index === 1) this.head = this.head.next;

                else {
                    var prevNode = this.head;
                    let counter = 0;

                    while (counter < index - 2) {
                        prevNode = prevNode.next;
                        counter++;
                    }

                    // If the deleted item is the last node.
                    if (index === this.size) {
                        prevNode.next = null;
                        this.tail = prevNode;
                    }
                    else {
                        prevNode.next = nextNode;
                    }
                }

                this.size--;
            }
        }

    }


    search = (value) => {

        if (this.isEmpty()) console.log("No data to find");

        else {
            let counter = 0;
            let currentNode = this.head;
            let index;
            let flag = 0;

            while (counter < this.size) {
                flag = 0;
                if (currentNode.value === value) {
                    flag = 1;
                    index = counter + 1;
                    break;
                }

                currentNode = currentNode.next;
                counter++;
            }

            if (flag === 1) {
                console.log(`Value found at ${index} index with value`,currentNode);
            }
            else {
                console.log("Value not found");
            }
        }

    }


    traversing = () => {

        // Check if the list is Empty or not
        if (this.isEmpty()) console.log("No data to show");

        else {
            let currentNode = this.head;
            let counter = 0;

            console.log("Traversing Data : ")

            while (counter < this.size) {
                console.log(currentNode);

                currentNode = currentNode.next;

                counter++;
            }
        }
    }
}


console.clear();


const list = new List();

list.appendAtPos(1, 100);
list.appendAtPos(3, 100);
list.appendAtPos(2, 600);
list.appendList(200);
list.appendList(300);

list.traversing();

list.appendAtPos(1, 500);

list.traversing();


list.removeNode(1);
list.traversing();

list.appendAtPos(3, 1000);
list.traversing();

list.search(100);