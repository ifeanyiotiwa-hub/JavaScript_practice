function bouncer(arr) {
    // return arr.filter(val => val);
   let temp = []
    for (let i = 0; i < arr.length; i++){
      if (Boolean(arr[i])){
        temp.push(arr[i])
      }
      
    }
    return temp
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));
  console.log(bouncer([false, null, 0, NaN, undefined, ""]));