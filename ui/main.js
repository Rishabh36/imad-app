//count code
var button = document.getElementById('counter');
button.onclick = function()
{
    //make a a request to counter endpoint
    //capture the response n store it in a variable 
    //render the variable in the correct span
     counter= counter +1;
      var span = document.getElementById('count');
      span.innerHTML = counter.toString();
};