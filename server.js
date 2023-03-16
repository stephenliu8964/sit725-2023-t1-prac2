const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

function addNumbers(number1, number2) {
    return parseInt(number1) + parseInt(number2);
}

app.get('/', function(req,res) {
    res.render('index.html');
});

app.get('/addTwoNumbers', (req, res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = addNumbers(number1,number2);
    res.json({statusCode:200, data: result, message:'Success'});
});

app.listen(port, function() {
    console.log('App listening to: ' + port);
});