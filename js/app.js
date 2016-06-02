//Rules for FizzBuzz REFACTOR Challenge:
//When page loads, users will be prompted to type a #
//Use prompt() function & insert text
//Use counter argument fxn to add fizz/buzz accordingly
//Convert the string to a #
//Validate user input by using parseInt()
//Optionally, make sure no decimal is used
//Don't worry about design
$(document).ready(function() {

    var newItem = prompt("Please enter a number 1-100");
    console.log(newItem);
 if (newItem === "") {
        alert("Please enter an item first!") 
  } else if (newItem % 3 === 0 && newItem % 5 === 0) {
     $('ul').append('<li>' + 'fizzbuzz' + '</li>'); 
     $('#inputNumber').val('');   
  } else if (newItem % 3 === 0) {
    $('ul').append('<li>' + 'fizz' + '</li>');
    $('#inputNumber').val('');
  } else if (newItem % 5 === 0) {
    $('ul').append('<li>' + 'buzz' + '</li>');
    $('#inputNumber').val('');
  } 
    else {
        $('ul').append('<li>' + newItem + '</li>');   
        $('#inputNumber').val('');
  }
  
});
  
