const path = require('path');
const express = require('express');
const { stringify } = require('querystring');
const { request } = require('http');
const app = express();
const port = 3000;

const staticpath = path.join(__dirname, '../public');

// In-build Middleware
app.use(express.static(staticpath));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Example 1

// app.get('/send_data', (request, response) => {
//    const responsedata = {
//         uname:request.query.uname,
//         pass:request.query.pass
//     };

//     console.log(responsedata);
//     response.send(JSON.stringify(responsedata));
// });

// ---------------------------------------------------------------

// Example 2

// app.get('/send_data', (request,response) => {
//     response.send('<p> User name is :' + request.query['uname'] + '</p>' +  '<p> Password is :' + request.query['pass'] + '</p>')
// }); 

// --------------------------------------------------------------


app.get('/about', (req, res) => {
    res.send({
        id : 1,
        name : "Umang",
        state : "Gujarat",
        City : "Patan"
    });
});

  
app.listen(port, () => {
    console.log(`Server is running on http://localhost: ${port}`);
});
