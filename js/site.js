function getValue(){
    //make  sure alert is invisible
    document.getElementById("alert").classList.add("invisible");
    //get user string for the page 
    let userString=document.getElementById("userInput").value;    
    //check for a palidrome 
    let palindrome=checkForPalindrome(userString);
    //display out message to the screen
    displayMessage(palindrome);
}
//check for palindrome
function checkForPalindrome(userString){

    userString=userString.toLowerCase();

    //remove spaces and special caracters
    let regex= /[^a-z0-9]/gi;
    userString=userString.replace(regex,"");

    //reverse string 
    let revString=[];
    let returnObj={};

    //decrementing for loop 
    for(let index=userString.length-1; index>=0; index--){
        revString+=userString[index];
    }
    if(revString==userString){
        returnObj.msg="Well done! You entered a palindrome!";
    }
    else{
        returnObj.msg="Sorry! you did not enter a palindrome!";
    } 
    returnObj.reversed=revString;

    return returnObj;

}
//display a message to the string.
function displayMessage(palindrome){
    document.getElementById("alertHeader").innerHTML=palindrome.msg;
    document.getElementById("msg").innerHTML=`Your phrase reversed is: ${palindrome.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
    
}