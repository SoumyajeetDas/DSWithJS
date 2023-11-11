const palidromecheck = (str1)=>{
    str1 = str1.toLowerCase();

    let str = str1.split('');

    let low = 0;

    let high = str.length-1;


    while(low<=high){
        if(str[low] !== str[high])
        {
            return false;
        }

        low++;high--;
    }

    return true;

    
}


let str1 = "abca";


console.clear();

if (palidromecheck(str1)) {
    console.log("Strings are palindrome")
}

else {
    console.log("Strings are not palindrome")
}