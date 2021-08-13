function rot13(str) {
    // Step 1: convert str to array store in tempStrArr
    let tempStrArr = str.split(" ")
    // console.log(tempStr)
    // temArr variable to push to after converting words  
    let tempArr = [];
    
    // first loop through tempStrArr element
    for(let i = 0; i < tempStrArr.length; i ++){ 
      // create a str2 variable to concatenate each item of tempStrArr elements
      let str2 = "";
  
      // Second loop through items in tempStrArr elements 
      for (let j = 0; j < tempStrArr[i].length; j++){
        //if each character code is between 65 and 122 inclusive
        if (tempStrArr[i].charCodeAt(j) >= 65 && tempStrArr[i].charCodeAt(j) <= 122){
            //Offsett each character code from 65 add 13 (in Mod 26)(since alphabets are 26 in number)
            let cipher = ((tempStrArr[i].charCodeAt(j) - 65) + 13) % 26;
  
            //Add 65 to ceaser to counterbalance within the range of 65 and 122
            let caeser = cipher + 65
            str2 += String.fromCharCode(caeser) // concatenate to str2
          }
  
          else {
            //if each character code is  not between 65 and 122 inclusive
            str2 += tempStrArr[i][j] // just concatenate the character without converting 
          }// end if...else
        
        } // end second for...loop 
        tempArr.push(str2) // push resulting str2 of each iteration to tempArr 
        
    } // end first for ... loop
    let tempStr2 = tempArr.join(" "); // join elements of tempArr with space and assign to tempStr2
    
  
    return tempStr2;
  }


  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
  console.log(rot13("SERR YBIR?"));
  console.log(rot13("SERR CVMMN!"));
  console.log(rot13("SERR PBQR PNZC"));