

// Time Complexity : O(n^2)


let arr = [30,20,60,15,90,62,40];

let n = arr.length;


console.clear();


// Time Complexity : O(n^2)

console.log("Original Array : ")
console.log(arr);


// Array in increasing order

for(let i = 0; i<=n-1; i++){


     // As from the last in Bubble sort the elements starts getting sorted so the inner loop we can decrease as the i increases.
     // That is the reason we write n-1-i

    for (let j=0; j<=n-1-i; j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1]=temp;
        }
    }
}


console.log("Final Array in increasing order : ")
console.log(arr)



// Array in decreasing order

for(let i = 0; i<=n-1; i++){

    // As from the last in Bubble sort the elements starts getting sorted so the inner loop we can decrease as the i increases.
    // That is the reason we write n-1-i

   for (let j=0; j<=n-1-i; j++){
       if(arr[j]<arr[j+1]){
           let temp = arr[j];
           arr[j] = arr[j+1];
           arr[j+1]=temp; 
       }
   }
}


console.log("Final Array in decreasing order : ")
console.log(arr)