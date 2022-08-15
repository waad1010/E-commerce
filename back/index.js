const express = require ('express');
const app = express();
const cors = require('cors');
const userR = require('./Routes/UserR');
const prosR = require('./Routes/ProsR')
const catsR = require('./Routes/CatsR')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(userR);
app.use(prosR);
app.use(catsR);


app.listen (8080, ()=> {
    console.log('we are on port : 8080');
})
