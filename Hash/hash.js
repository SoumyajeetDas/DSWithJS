class HashTable {
    constructor(size) {
        this.table = new Array(size); // this. table = [];

        this.size = size;

    }

    hash(key) {

        let total = 0;

        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }

        return total % this.size;
    }

    set(key, value) {

        // Setting the value as 
        /*
        [
            [ [ 'age', 25 ] ],
            [ [ 'name', 'Soumya' ], [ 'mane', 'Soumya' ] ],
        ]
        */

        // Gettig the index numeric value of the key passed as string
        const index = this.hash(key);


        // Creating a refernce of the table
        let bucket = this.table[index];
        // The bucket will be like 
        /*
       [ [ 'name', 'Soumya' ], [ 'mane', 'Soumya' ] ],
     */


        // If no data in that index
        if (!bucket) {
            this.table[index] = [[key, value]]
        }
        else {
            // Now within the bucket it will find by iterating through the buckets
            // [ 'name', 'Soumya' ], [ 'mane', 'Soumya' ] 
            const sameKeyItem = bucket.find(item => item[0] === key);



            // If same Key Item present then the value will get updated.
            // sameKeyItem will be like [ 'name', 'Soumya' ]
            if (sameKeyItem) {
                // The 1 index will be the value i.e. Soumyajeet
                sameKeyItem[1] = value;
            }

            // If same key item not present then the new [key, value] will be passed into the array
            else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {

        const index = this.hash(key);

        // Creating a reference of the table
        let bucket = this.table[index];
        // The bucket will be like 
        /*
       [ [ 'name', 'Soumya' ], [ 'mane', 'Soumya' ] ],
     */


        // If no data in that index
        if (!bucket) {
            return false;
        }
        else {
            const samekeyItem = bucket.find(item => item[0] === key);
            // sameKeyItem will be like [ 'name', 'Soumya' ]

            if (samekeyItem) return samekeyItem;

            else return false;
        }

    }

    remove(key) {
        const index = this.hash(key);

        let bucket = this.table[index];
        // The bucket will be like 
        /*
       [ [ 'name', 'Soumya' ], [ 'mane', 'Soumya' ] ],
     */


        // If no data in that index
        if (!bucket) {
            return false;
        }
        else {
            const sameKeyItem = bucket.find(item => item[0] === key);
            // sameKeyItem will be like [ 'name', 'Soumya' ]

            // If same Key Item present then the array will get spliced
            if (sameKeyItem) {
                // indexOf returns the index inside the bucket whete the sameItem field value is present.
                bucket.splice(bucket.indexOf(sameKeyItem), 1);
            }

            else {
                console.log("Item not present");
            }
        }
    }

}



console.clear();



let h = new HashTable(5);

h.set('name', 'Soumya');
h.set('mane', 'Soumya');

h.set('age', 25)

console.log(h.table)
console.log(h.get('name') || "Not Present");
console.log(h.get('eanm') || "Not Present");
// h.set('age',20);


// console.log("Getting the value :",h.get('name'));

h.remove('name');
console.log(h.table)

// console.log("Getting the value :",h.get('name') || "Not present");