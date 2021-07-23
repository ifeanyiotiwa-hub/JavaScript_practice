/*
2-using JavaScript, define a function(with a name of your choice) 
that accepts twenty whole numbers, adds and print the even of supplied input
*/

function addNPrintEvenNo(){
    const numArray = [];
    
    for (let i = 1; i <= 20; i++){
       var num = parseInt(prompt("Enter each number followed by Enter key", "Input number"));
       numArray.push(num);     
    }
    const evenNo = numArray.filter(e => e % 2);
    const sum = evenNo.reduce((a,b)=> a + b,0);

    console.log("The even numbers are " + evenNo + " and their total is " + sum);

}
addNPrintEvenNo();