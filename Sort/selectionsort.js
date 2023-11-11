let arr = [30, 20, 60, 15, 90, 62, 40];

let n = arr.length - 1;

let selectsortincreasing = () => {
    for (let i = 0; i <= n - 1; i++) {
        let minId=i
        for(let j=i+1; j<=n;j++){
            if(arr[j]<arr[minId]){
                minId=j;     
            }
        }

        let temp = arr[minId];
        arr[minId] = arr[i];
        arr[i] = temp;
    }
}


let selectsortdecreasing = () => {
    for (let i = 0; i <= n - 1; i++) {
        let minId=i
        for(let j=i+1; j<=n;j++){
            if(arr[j]>arr[minId]){
                minId=j;     
            }
        }

        let temp = arr[minId];
        arr[minId] = arr[i];
        arr[i] = temp;
    }
}

console.clear();

console.log("Original Array : ", arr);


selectsortincreasing();
console.log("Array after sort in increasing order : ", arr);


selectsortdecreasing();
console.log("Array after sort in decreasing order : ", arr);
