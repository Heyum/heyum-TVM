const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const db = mysql.createConnection({
    host:'54.180.90.228',
    port:'3306',
    user:'mgt',
    password:'mgt',
    database:'enzo'
});

db.connect();

app.get('/vmList', function(req,res){
    var sql = 'SELECT DISTINCT vend_id, vend_location FROM ManagementFunctions_vendinginfo';
    db.query(sql, (err, result)=>{
        if(err) {
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/saleList', function(req,res){
    var sql = 'SELECT product_code, product_name, product_price  FROM ManagementFunctions_conveniencestore';
    db.query(sql, (err, result)=>{
        if(err) {
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});

app.post('/buyIt', function(req, res){
	console.log(req.body); 
    var data = {
        cust_id: req.body.name,
        receiving_time: req.body.time,
        product_code: req.body.productCode, 
        vend_id: req.body.vendId, 
        qunatity: req.body.qunatity,
    };
    var sql = 'INSERT INTO ManagementFunctions_orderinfo SET ?';
    db.query(sql, data, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send({
            status: 'Yeah!',
            no: null,
            product_code: req.body.productName, 
            vend_id: req.body.numbers, 
            qunatity: req.body.price,
            receiving_time: req.body.time
	    });
    });
});

app.listen(3210, ()=>{
    console.log('Start')
});
