/* 1-write a JavaScript program to input 50 numbers using prompt () anf then compute the sum of the numbers that are more than 40 using continue statement
2-using JavaScript, define a function(with a name of your choice) that accepts twenty whole numbers, adds and print the even of supplied input
3-define a function called oddcount that repeated asks inputs from a user,counts and display the number of odd numbers in the  supplied inputs*/



//1
var count = 1;
var sum = 0;
while (count <= 50)
{
    var num = parseInt(prompt("Input the number: "));
    if (num >= 40)
    {
       sum += num; 
    }
    count++
}

console.log(`The total sum of these numbers is ${sum}`);

// 1

/*


var count = 1;
var sum = 0;
while (count <= 50)
{
    var num = parseInt(prompt("Input the number: ", "Enter each numbers and press enter after inputting each"));
    
    if (num >= 40)
    {
       sum += num; 
    }
    count++;
}

console.log(`The total sum of these numbers is ${sum}`);
*/


// 2.

//2-using JavaScript, define a function(with a name of your choice) that accepts twenty whole numbers, adds and print the even of supplied input
