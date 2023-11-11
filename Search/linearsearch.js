let arr = [30,20,60,15,90,62,40];


const search = (value) =>{

    let pos=-1
    arr.forEach((data,i)=>{
        if(data===value){
            pos = i;
            return pos;
        }
    } );

    return pos;
}


console.clear();

const isPresent = search(100)

if(isPresent>=0){
    console.log("Element Found at index : ",isPresent);
}
else{
    console.log("Element Not Found");
}