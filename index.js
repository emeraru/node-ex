const fs = require('fs');
const express = require('express');
const app = express();
const act = require('./act.json');

app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});//app.get

app.get("/act", (req, res) => {
	res.send(act);
});

app.post("/eme", (req, res) => {
	console.log('🐓 post');
	console.log(req.body.comment);
	fs.writeFile(__dirname + "/data.txt", req.body.comment, () => {
		res.sendFile(__dirname + "/post.html");
	});
});//app.post

app.post("/update", (req, res) => {
	act[0].act = req.body.new_act;
	res.send(act);
});//app.post

app.post("/del", (req, res) => {
	console.log(req.body);
});//app.post

app.listen(8080, () =>{
	console.log('🐈️ listening on localhost port 8080');
});//app.listen
