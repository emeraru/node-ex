const express = require('express');
const app = express();

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});//app.get

app.listen(8080, () =>{
	console.log('🐈️ listening on localhost port 8080');
});//app.listen
