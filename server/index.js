const express = require('express')
const app = express();
const port = 3001

app.get('/getUsers' , (req, res) => {
    res.send("hello world!");
});

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})