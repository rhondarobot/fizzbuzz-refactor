$(document).ready(function() {
  $('#inputForm').on('submit', function(event) {
    event.preventDefault(); 
    
    var newItem = $('#inputNumber').val();
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
  })
  
}); 
  //will not add a blank item when alert is shown and will only add <li>s upon entering numbers
