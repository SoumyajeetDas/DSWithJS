let data = [];
let currentSize = data.length;

const push = (newValue)=>{
    data[currentSize] = newValue;
    currentSize++;
}


const pop = ()=>{

    const poppedValue = data[currentSize-1];
    data.length = --currentSize;

    return poppedValue;
}


const reverseStr = (item)=>{
    item.forEach(x=>push(x));

    item.forEach((x,i)=>item[i]=pop());
}


let str = "Soumyajeet";

console.log("Original String : ",str)

str = str.split('');


reverseStr(str);

console.log("Reversed String : ",str.join(''));


