function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    let sourceKeys = Object.keys(source);
    console.log(sourceKeys);
    arr = collection.filter(obj => {
        for (let i = 0; i < sourceKeys.length; i++){
            // console.log(!obj.hasOwnProperty(sourceKeys[i]));
            // console.log(obj[sourceKeys[i]])
            // console.log(source[sourceKeys[i]])
            if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] != source[sourceKeys[i]]){
                return false;
            }
        }
        return true;
    });
    console.log(arr);
    // Only change code above this line
    return arr;
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//   console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));