const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello");
})

app.get('/api/timestamp/:date?', (req, res) => {
    var result = {}
    var date = new Date(req.params.date);

    if (isNaN(date)){
        date = new Date(req.params.date * 1000);   
    }

    if (isNaN(date)){
        result.error = "Invalid Date";
    }else{
        result.unix = date.getTime();
        result.utc = date.toUTCString();
    }

    res.json(result);
});

app.listen(process.env.PORT);