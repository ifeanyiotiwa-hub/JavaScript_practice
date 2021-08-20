function bubbleSort(arr){
    for (let i = 1; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1; j++){
            if (arr[j] > arr[j + 1]){
                let hold = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = hold;
            }
        } 
    }
    return arr;
}
console.log(bubbleSort([3, 2, 7, 8, 5, 11, -12]));