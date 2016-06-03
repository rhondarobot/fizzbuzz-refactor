$(document).ready(function() {
    var limit = numLimit();
    appendLimit(limit);
});
    
    function numLimit() {
    var inputNumber = prompt("Please enter a number 1-100");
    return parseInt(inputNumber);
}

    
    function appendLimit(limit) {
      for (var i = 1; i <= limit; i++) {
 if (i === "") {
        alert("Please enter an item first!") 
  } else if (i % 3 === 0 && i % 5 === 0) {
     $('ul').append('<li>' + 'fizzbuzz' + '</li>');  
  } else if (i % 3 === 0) {
    $('ul').append('<li>' + 'fizz' + '</li>');
  } else if (i % 5 === 0) {
    $('ul').append('<li>' + 'buzz' + '</li>');
  } 
    else {
        $('ul').append('<li>' + i + '</li>');   
  }
 } 
}
  
