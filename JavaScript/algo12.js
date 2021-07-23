// function frc(str)
// {
//     for(let i = 0; i < str.length; i++)
//     {
//         if (str.indexOf(str.charAt(i)) !== str.lastIndexOf(str.charAt(i)))
//         {
//             return str.charAt(i);    
//         }
//     }
// }

function frc(str)
{
    let acc = {};
    for(let i = 0; i < str.length; i++)
    {
        if (acc[str[i]]) // This should return false when acc doesn't have a key named str[i]
        {
            // if str[i] already exist then return the str[i]
            return str[i];
        }
        // if str[i] does not exist in acc object as a key, then initialize str[i] as a key of object and add 1 as its value 
        else acc[str[i]] = 1;
    }
    // if no repetition is found  after looping through return this;
    return "no results found";
}

console.log(frc("abcdceee"))