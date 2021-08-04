function chunkArrayInGroups(arr, size) {
    // summarizeArray is a Variable to push to after creating chunks
    let summarizeArray = [];

    // loop through arr
    for (let i = 0; i < arr.length; i += size){
    // arrCopy is a copy of arr to prevent mutating arr on each iteration
    let arrCopy = arr.slice(); // created a copy of arr
    let tempArr2 = arrCopy.slice(i, size + i); // create sub arrays using slice 
    summarizeArray.push(tempArr2); // push tempArr to SummarizeArr
    } // end for loop
      return summarizeArray;
    }
    
    console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
    console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))