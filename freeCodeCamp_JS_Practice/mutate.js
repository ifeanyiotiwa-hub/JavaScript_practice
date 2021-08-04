function mutation(arr) {
    let str0 = arr[0].toLowerCase();
    let str1 = arr[1].toLowerCase();
    let tempArr = [str0, str1];
    for (let i = 0; i < tempArr[1].length; i++){
      if (!tempArr[0].includes(tempArr[1][i])){
          return false;
      }
    }
    
    return true;
  }
  
  console.log(mutation(["hello", "hey"]));