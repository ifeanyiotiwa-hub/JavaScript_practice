function palindrome(str) {
    let regex = /\W+|_/g
    let newStr = str.replaceAll(regex, "").toLowerCase();
    // console.log(newStr)
    let len = newStr.length
    let mid = Math.floor(( len + 1)/ 2)
  
    for(let i = 0; i < mid; i++){
      if (newStr[i] !== newStr[len-1-i]) return false;
    }
    return true;
  }
  
  
  
  palindrome("eye");
  palindrome("A man, a plan, a canal. Panama")
  palindrome("My age is 0, 0 si ega ym.")
  palindrome("0_0 (: /-\ :) 0-0")
  palindrome("five|\_/|four")