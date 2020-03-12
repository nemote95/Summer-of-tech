var express = require('express');
var app = express();

const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {

    url = "https://maps.googleapis.com/maps/api/js?key="+process.env.API_KEY+"&libraries=places&callback=initMap";

    res.render('index',{url: url})
})

app.listen(9000, '0.0.0.0')

