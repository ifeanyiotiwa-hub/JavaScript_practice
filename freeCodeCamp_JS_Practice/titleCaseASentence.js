function titleCase(str) {
    let convertToLowerCaseToArr = str.toLowerCase().split(" "); // convert string to array of strings in Lower case letter
    
    let tempStrArr = []; // new array to hold the outputs of the new formed words after capitalizing the first letter
  
    // loop through the first level of the convertToLowerCaseToArr variable
    for (let i = 0; i < convertToLowerCaseToArr.length; i++){
      let tempStr = ""; // temporary string holder
      // second level looping
      for (let j = 0; j < convertToLowerCaseToArr[i].length; j++){ 
        if(j !== 0){ 
          //add to tempStr if it is not the First letter like that
          tempStr += convertToLowerCaseToArr[i][j];
        } 
        //capitalize the character at zero index of the second level and ad to tempStr
        else tempStr += (convertToLowerCaseToArr[i][0].toUpperCase());
      }
      // push the value of tempStr of the current iteration to tempStrArr
      tempStrArr.push(tempStr)
    }
  
    // convert tempStrArr to string and return
    return(tempStrArr.join(" "));
  }



//   function titleCase(str){
// 	let convertToArr = str.toLowerCase().split(" ");
// 	let result = convertToArr.map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()));
// 	return result.join(" ");
// }

// function titleCase(str) {
//     var convertToArray = str.toLowerCase().split(" ");
//     var result = convertToArray.map(function(val) {
//       return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//     });
//     return result.join(" ");
//   }
  
  console.log(titleCase("I'm a little tea pot"));