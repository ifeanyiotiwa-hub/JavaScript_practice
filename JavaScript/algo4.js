/*
    Given two strings, write a function that returns true, (when two words provided as arguments to the function) if the words  are anagrams of one another.


Example

isAnagram("Mary", "Army") => true

isAnagram("elbow", "below")=> true

isAnagram("cried", "cider") => true

isAnagram(" chef", "chief") => false


*/
function elementCount(str)
{
    let obj = {};
    for(let i = 0; i < str.length; i++)
    {
        
        if (obj[str[i]])
        {
            obj[str[i]]++;
        }
        else 
        {
            obj[str[i]] = 1;
        }
    }

    return obj;
}
console.log(elementCount("Amaka".toUpperCase()));

function isAnagram(str1, str2)
{
    let str1L = str1.toUpperCase().trim();
    let str2L = str2.toUpperCase().trim();
    if(str1L.length!= str2L.length)
    {
        return false;
    }
    let str1Count = elementCount(str1);
    let str2Count = elementCount(str2);
    if(str1L.length > str2L.length)
    {
        for (let i = 0; i <= str1L.length; i++)
        {
            if(str1Count[str1L[i]] != str2Count[str1L[i]])
            {
                return false
            }

        }
    }
    if(str1L.length < str2L.length)
    {
        for (let i = 0; i < str2L.length; i++)
        {
            if(str1Count[str2L[i]] != str2Count[str2L[i]])
            {
                return false;
            }
        }
    }


    return true;
    

}


console.log(isAnagram("Mary", "Army")); // => true

console.log(isAnagram("elbow", "below"));// => true

console.log(isAnagram("cried", "cider")); // => true

console.log(isAnagram(" chef", "chief")); // => false