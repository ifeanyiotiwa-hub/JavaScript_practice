function orbitalPeriod(arr) {
  
    const GM = 398600.4418;
    let earthRadius = 6367.4447;
    
    let tempArr = []
    for(let i = 0; i < arr.length; i++){
      let temp = {};
      let {name, avgAlt} = arr[i];
      let orbitalPeriod = Math.round(Math.sqrt((Math.pow(earthRadius + avgAlt, 3) / (GM))) * 2 * Math.PI)
      temp.name = name;
      temp.orbitalPeriod = orbitalPeriod; 
      
      tempArr.push(temp)
    }
    console.log(tempArr)
  
    return tempArr;
  }
  
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);