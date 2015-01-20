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
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
});

var T = new Twit({
    consumer_key:         'lYJ6qtcdBK5bGXP3P12jg',
    consumer_secret:      'dClyriAPzPaZKJJOrE86uhyqQNCUkqATmLvW7CR0fg',
    access_token:         '45040356-jqb118n4Ts9B8oHj0VZ6LpjiaJMQk6T4KkwPrZuGS',
    access_token_secret:  'dvDiTHzm1PNaawAARK2gZupwAQM1X5w8odX4N5irD2RNh'
});

io.sockets.on('connection', function (socket) {
  socket.on("home", function() {
    var keywords = ["al 3 y al 4","al tres y al cuatro","aplaplac","a todo cachete","bagallo","bachicha","burrero","brujo","bruto","cachudo","se le cae el helado","cabeza de rodilla","cabro chico","cafiche","califa","canuto","cantimplora","cartucho","cuentero","cuico","cuyano","chamullento","chancho","chancletero","chanta","vuelta la chaqueta","che","china","chino","chiporro","choro","choro canero","choros de esquina","chula","del ambiente","domestico","duro","encalillado","encanado","weon","en la pitilla","esta en la cuerea","flayte","fleto","franchute","fresco raja","gallo","gata mojada","gitano","guacho","guardado","guata","guitre","gringo","highlander","hocicon","huaso","incapas","patita de chancho","julero","jai","jaibon","lanza","lela","letrado","liceo con numero","liceo con nombre de misil","malandra","mandril","mano challa","maraca","mariposon","maricon","matasanos","matusalen","mea contra viento","mea contra el viento","mechera","melon con flecos","mina","mino","mono","opus","opuh","paco","pailon","paitoco","palo grueso","papito coraz","peineta","pelolais","pelo lais","peluson","pendejo","pepe pato","petaca","perro","perra","pez gordo","picante","pokemon","punga","profana cuna","puta","profeta","se le quema el arroz","raspado","rata","rati","resfalin de piojos","roto","se le cae","se le cae la pelota al barro","da vuelta el paragua","sele apago el calefon","se le apaga el calefon","se le paso el tren","singuchito","siutico","solterona","sudaca","tecla","testiculo de jehova","tira","tira el poto pa las moras","todo cagado","torrante","turco","tropicarsh","vaca","vacuna","vagoneta","viejo verde","yegua","yira","zorra"];

    var bgstream = T.stream('statuses/filter', { track: filters , language: 'es' });
    bgstream.on('tweet', function (tweet) {
      socket.emit('bg',tweet.text);
    });
  });


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