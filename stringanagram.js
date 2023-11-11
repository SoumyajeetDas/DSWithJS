
const checkanagram = (str1, str2) => {

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();


    let objStr = {}

    if (str1.length !== str2.length) {
        return false;
    }

    for (ch of str1) {

        // For the first time objStr[ch] and as it is a falsy value 0 will come as o/p and will be added to 1.
        objStr[ch] = (objStr[ch] || 0) + 1;
    }

    for (ch of str2) {

        // If there are more no of characters than the origial string then for the last one the value for that character
        // be 0, so it will result in false. Eg : if str1 = 'hello' and str2 = 'heloo' then for the first str2 only the 
        // value of o wil be 0 in the object, then when the next o will come as the value will be 0 it will return false.
        if (!objStr[ch]) {
            return false;
        }

        objStr[ch]--;
        // console.log(objStr)
    }

    return true;
}


let str1 = "Hello";
let str2 = "heloo"


console.clear();

if (checkanagram(str1, str2)) {
    console.log("Strings are anagram")
}

else {
    console.log("Strings are not anagram")
}