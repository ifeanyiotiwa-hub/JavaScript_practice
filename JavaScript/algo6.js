function mergeArray(arr)
{
    let arr0 = arr[0].replaceAll("[","").replaceAll("]","").split(",");
    let arr1 = arr[1].replaceAll("[","").replaceAll("]","").split(",");
    let s = [];

    if (arr0.length > arr1.length){
        for(let j = 0; j < arr1.length; j++){
            s.push(parseInt(arr0[j]) + parseInt(arr1[j]));
        }
        s.push(...(arr0.slice((arr0.length - arr1.length),)));
    }
    if (arr0.length < arr1.length){
        for(let j = 0; j < arr0.length; j++){
            s.push(parseInt(arr0[j]) + parseInt(arr1[j]));
        }
        s.push(...(arr1.slice((arr1.length - arr0.length),)));
    }

    if (arr0.length == arr1.length){
        for(let j = 0; j < arr0.length; j++){
            s.push(parseInt(arr0[j]) + parseInt(arr1[j]));
        }
    }

    return s.join("-");
}

console.log(mergeArray(["[5,2,3]", "[2,2,3,10,6]"]));
