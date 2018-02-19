var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles ={

 'Article-one': {
    title : 'Article one - Rishabh Chauhan',
    heading :'Article one',
    date : 'Feb 18,2018',
    content : `<p>
                    
                    This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                    </p>
                    <p>
                    This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                    </p>
                    <p>
                    This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                    </p>`
    },  
 'Article-two': {
        
         title : 'Article two - Rishabh Chauhan',
    heading :'Article two',
    date : 'Feb 19,2018',
    content : `<p>
                    
                    This is the content for my second article.
                    </p>`
    },
 'Article-three':{
         title : 'Article three - Rishabh Chauhan',
    heading :'Article three',
    date : 'Feb 20,2018',
    content : `<p>
                    
                    This is the content for my third article.
                    </p>`
         
     }
    
};
    function createTemplate(data)
    {
 var title= data.title;
 var date= data.date;
 var heading=  data.heading;
 var content = data.content;
    
 var htmlTemplate= `
 
 <html>
    <head>
        <title>
            ${title}
        </title> 
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    
    
    
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    
    <div class="container">
        <div>       
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
            </h3>
        <div>
            ${date}
            </div>
    <div>
     ${content}
    </div>
    </div>
    </body>
</html>

 
 `;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
    //articleName == Article-one
    //articles[articleName]== {} content object for article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/Article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Article-two.html'));
});
app.get('/Article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
