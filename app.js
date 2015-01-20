var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app).listen(80)
  , Twit = require('twit')
  , io = require('socket.io').listen(server);


app.use("/fonts",  express.static(__dirname + '/public/fonts'));
app.use("/css",  express.static(__dirname + '/public/css'));
app.use("/img",  express.static(__dirname + '/public/img'));
app.use("/js", express.static(__dirname + '/public/js'));
// routing
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

var T = new Twit({
    consumer_key:         'lYJ6qtcdBK5bGXP3P12jg',
    consumer_secret:      'dClyriAPzPaZKJJOrE86uhyqQNCUkqATmLvW7CR0fg',
    access_token:         '45040356-jqb118n4Ts9B8oHj0VZ6LpjiaJMQk6T4KkwPrZuGS',
    access_token_secret:  'dvDiTHzm1PNaawAARK2gZupwAQM1X5w8odX4N5irD2RNh'
});

io.sockets.on('connection', function (socket) {
  socket.on("filter",function(filters) { 

    if (filters.length > 0) {
      var last = false
      var stream = T.stream('statuses/filter', { track: filters , language: 'es' });
      stream.on('tweet', function (tweet) {

        if (tweet.text != last) {
          last = tweet.text
          found = false;
          for (var i in filters) {
            if (tweet.text.search(filters[i]) !== -1) {
              found = filters[i];
              socket.emit('stream',{ text: tweet.text, keyword: found });
            }
          }
        }
      });
    }
  });
});