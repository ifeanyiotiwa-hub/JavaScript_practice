// function isPalindrome(str)
// {
//     if(str){ // to test for empty string. it skips this block for empty string
//         let revString = "";
//         for(let char of str)
//         {
//             // add char before revString
//             revString = char + revString;
           
//         }
        
//         return str == revString;
//     }
//     return Boolean(str);
// }


function isPalindrome(str)
{
    if(str){ // to test for empty string. it skips this block for empty string
        let len = str.length;
        let mid = Math.floor(len / 2);

        for (let i = 0; i < mid; i++) {
            if (str[i] !== str[len - 1 - i])
                return false;
            
        }
        return true;
    }
    return Boolean(str);
}
// console.log(isPalindrome("baal"));
// console.log(isPalindrome("jjjhjjj"))
// console.log(isPalindrome(""));

// function isPalindrome(str)
// {
//     let str1 = "";
//     let str2 = "";
//     let len = Math.floor(str.length / 2)
    
//     if(str != ""){

//         for(let i = 0; i <= len; i++)
//         {
//             if(str.length > 4)
//             {
//                 str1 = str1 + str[i];
//                 str2 = str[(len-1) + i] + str2;
    
//             }
//             else
//             {
//                 str1 = str[i]+ str1 ;
//                 str2 = str2 + str[(len-1) + i];
//             }
            
//         }
//         console.log(str1);
//         console.log(str2);
        
//         return str1 == str2;
//     }

//     return Boolean(str)
    
// }

// console.log(isPalindrome("baal"));
// console.log(isPalindrome("jjjhjjj"));

function palindromeCreator (str)
{
    let count = str.length;
    for (let i = 0; i < (count - 2); i++) {
        if(isPalindrome(str.slice(i,)))
        {
            // console.log(str.slice(0, i));
            return str.slice(0, i);
        }
        
    }
    return "Output not possible";
}

console.log(palindromeCreator("abjchba"));
console.log(palindromeCreator("kjjjhjjj"));