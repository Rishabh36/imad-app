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

///Submit name
 var nameinput = document.getElementById('name');
 var name =nameInput.value;
 var submit = document.getElementById('submit_btn');
 submit.onclick = function()
 {
     //make arequest to the server n send the name
     //capture a list of names n render it as a list
     var names =['name 1 ','name 2 ', 'name 3', 'name 4'];
     var list ='';
     for (var i=0;i<names.length;i++)
     {
         list == '<li>'+ names[i] + '</li>';
         
     }
     var ul = document.getElementById('namelist');
     ul.innerHTML = list;
 };