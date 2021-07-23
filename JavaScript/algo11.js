function swap(arr) {
    for (let i = 0; i < arr.length; i += 2){
        let swapped = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swapped;
    }

    return arr;
    
}

console.log(swap([5, 7, 3, 3, 4, 8, 9, 5, 0, 4]));