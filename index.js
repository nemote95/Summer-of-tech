var express = require('express');
var app = express();

const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {

    url = "https://maps.googleapis.com/maps/api/js?key="+process.env.API_KEY+"&libraries=places&callback=initMap";

    res.render('index',{url: url})
})

var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});
