let arr = [30, 20, 60, 15, 90, 62, 40];

let n = arr.length - 1;


const insertionsortincreasing = ()=>{
    for(let i=1;i<=n;i++){

        let key = arr[i];

        let j = i-1;

        while(j>=0 && key<arr[j]){
            arr[j+1] = arr[j];
            --j;
        }
        
        // Place the element just after the smallest element
        arr[j+1] = key;
    }
}



const insertionsortdecreasing = ()=>{
    for(let i=1;i<=n;i++){

        let key = arr[i];

        let j = i-1;

        while(j>=0 && key>arr[j]){
            arr[j+1] = arr[j];
            --j;
        }
        
        // Place the element just after the smallest element
        arr[j+1] = key;
    }
}


console.clear();

console.log("Original Array : ", arr);


insertionsortincreasing();
console.log("Array after sort in increasing order : ", arr);


insertionsortdecreasing();
console.log("Array after sort in increasing order : ", arr);