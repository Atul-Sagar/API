var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var mysql = require('mysql2')
var luxon = require('luxon')

// connection

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cobrowsing'
})

connection.connect((error) => {
    if(error){
        console.error('Error connecting to mysql server', error)
        return
    }
    console.log('Connected to mysql server');
});

var users =[{
    id: 1,
    name: "John Doe",
    age : 23,
    email: "john@doe.com"
}];

var actions = [{
    name: "",
    value: ""
}]


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


app.get('/api/users', function(req, res){
    return res.json(users);    
});
app.get('/api/actions', function(req, res){
    return res.json(actions);    
});
app.post('/api/latestaction', function(req, res){
    var selectLatestQuery = `select * from Actions order by ID desc limit 1;`
    let response;
    connection.query(selectLatestQuery, (error, results) => {
        if(error){
            console.log('Error : ', error);
        }else{
            response = results
            return res.json(results)
            // console.log("results : ", results);
            console.log('successfully');
        }
    })  

    // console.log(response);

});

app.post('/api/actions', function (req, res) {
    var action = req.body.Action;
    debugger
    actions.push(action);
    console.log(action);

    var currentAction = action;
    console.log("currentAction : ", currentAction);



    var insertQuery = `INSERT INTO Actions (name,controlType,controlID,value) VALUES ("${currentAction.name}","${currentAction.controlType}","${currentAction.controlID}","${currentAction.value}");`
    // var insertQuery = `INSERT INTO Actions (name,value) VALUES ("${currentAction.name}", "${currentAction.value}")`
    // var insertQuery = `INSERT INTO Actions (name,value) VALUES (${currentAction.name}, ${currentAction.value})`


    connection.query(insertQuery, (error, results) => {
        if(error){
            console.log('Error inserting data: ', error);
        }else{
            console.log('Data successfully inserted');
        }
    })


    return res.send('Action has been added successfully');
});

app.listen('3000', function(){
    console.log('Server listening on port 3000');
});