var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app).listen(3000)
  , Twit = require('twit')
  , io = require('socket.io').listen(server);


app.use("/css",  express.static(__dirname + '/public/css'));
app.use("/img",  express.static(__dirname + '/public/img'));
app.use("/js", express.static(__dirname + '/public/js'));
// routing
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

var watchList = ['maraca', 'weon'];
var T = new Twit({
    consumer_key:		 'lYJ6qtcdBK5bGXP3P12jg',
    consumer_secret:	 'dClyriAPzPaZKJJOrE86uhyqQNCUkqATmLvW7CR0fg',
    access_token:		 '45040356-jqb118n4Ts9B8oHj0VZ6LpjiaJMQk6T4KkwPrZuGS',
    access_token_secret: 'dvDiTHzm1PNaawAARK2gZupwAQM1X5w8odX4N5irD2RNh'
});

io.sockets.on('connection', function (socket) {
	//console.log('Connected');

	var stream = T.stream('statuses/filter', { track: watchList });
    var last = false
	stream.on('tweet', function (tweet) {

        if (tweet.text != last) {
            last = tweet.text
            socket.emit('stream',tweet.text);
        }
    });
 });