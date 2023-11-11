const maxcharacter = (str)=>{

    str = str.toLowerCase();

    let objstr = {};
    let maxkey = '';

    for(let i=0; i<str.length; i++){
        let key = str[i];

        if(!objstr[key]){
            objstr[key] = 0;
        }

        objstr[key]++;

        // When i=0 maxkey will contail the first character
        if(maxkey === '' || objstr[key] > objstr[maxkey]){
            maxkey = key;
        }

    }


    return maxkey;

}


console.clear();


let str = "helllllloooooooo";

console.log("Max occuring character :",maxcharacter(str));