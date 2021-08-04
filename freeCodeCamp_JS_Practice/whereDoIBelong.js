function getIndexToIns(arr, num) {
    let sortedArr = arr.sort((a,b)=> a-b) //sort array in ascending order
    // console.log(sortedArr)
    for (let i = 0; i < sortedArr.length - 1; i++){
      if (num == sortedArr[i]) return i;
      if (num > sortedArr[i] && num < sortedArr[i+1]){
        return i+1;
      }
      if (num >= sortedArr[arr.length-1]) return arr.length;
  
    }
    return 0;
}
  
console.log(getIndexToIns([3, 10, 5], 3));
  
console.log(getIndexToIns([3, 10, 5], 3));
  
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); 
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([2, 5, 10], 15)) 
console.log(getIndexToIns([], 1));
console.log(getIndexToIns([], 1));  