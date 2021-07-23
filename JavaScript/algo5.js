function add(arr) {
    let s = []
    if (arr[0].length > arr[1].length){

        for(let j = 0; j < arr[1].length; j++){

            if(Number.isInteger(parseInt(arr[0][j+1]))){
                if (Number.isInteger(parseInt(arr[1][j+1]))){
                    s.push(parseInt(arr[0][j+1]) + parseInt(arr[1][j+1]));
                }
            }
            
        }
                s.push(...(slice((arr[0].length - arr[1].length),)));
    }

    if (arr[0].length < arr[1].length){
        for(let j = 0; j < arr[0].length; j++){
            if(Number.isInteger(parseInt(arr[0][j+1]))){
                if (Number.isInteger(parseInt(arr[1][j+1]))){
                    s.push(parseInt(arr[0][j+1]) + parseInt(arr[1][j+1]));
                }
            }            
        }
        s.push(...(arr[1].slice((arr[1].length - arr[0].length-1),)))
        }
    
        //s.push(parseInt(arr[0][i+1]) + parseInt(arr[1][i+1]));
    
    

    return s;
}

console.log(add(["[5,2,3]", "[2,2,3,10,6]"]));