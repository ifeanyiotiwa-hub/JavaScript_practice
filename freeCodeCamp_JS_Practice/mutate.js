function mutation(arr) {
    let str0 = arr[0].toLowerCase();// convert first element of arr to Lowercase
    let str1 = arr[1].toLowerCase(); // convert second element of arr to Lowercase
    let tempArr = [str0, str1]; // create a tempArr containing arr elements in lowerCase
    // loop through temp arr
    for (let i = 0; i < tempArr[1].length; i++){
        //check if tempArr element at index 1 is not included in tempArr[0] and return false
        //else continue to the next iteration
      if (!tempArr[0].includes(tempArr[1][i])){
          return false;
      } // end if
    }
    // return true since it passes the if test
    return true;
  }
  
  console.log(mutation(["hello", "hey"]));