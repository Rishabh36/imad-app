//count code
var button = document.getElementById('counter');
var counter=0;
button.onclick = function()
{
    //create a request object
    var request =  new XMLHttpRequest();
    
    //capture the response n store it in a variable
    request.onreadystatechange = function ()
    { 
        if(request.readyState === XMLHttpRequest.DONE)
        {
            //take some action
             if(request.status === 200)
             {
                 var counter =request.responseText ;
                  var span = document.getElementById('count');
      span.innerHTML = counter.toString();
                 
             }
        } //not done yet
    };
   //make the request

     request.open('GET', 'http://rishabhchauhan06.imad.hasura-app.io/counter', true);
     request.send(null);
};