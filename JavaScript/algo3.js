/*3-define a function called oddcount that repeated asks inputs from a user,
counts and display the number of odd numbers in the  supplied inputs*/

function oddCount() {

    var count = 1
    var num = parseInt(prompt("Input a number (Enter -1 to end): ", "Enter a number"))
    while(num != -1)
    {        
        if(num % 2 != 0)
        {
            count++;
        }
        var num = parseInt(prompt("Input a number (Enter -1 to end): ", "Enter a number"));
    }

    console.log("The numbers of ODD NUMBERS in the supplied input is "+ count);
    
}

oddCount();