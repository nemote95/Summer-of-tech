const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    DateTime a = new DateTime(2020, 03, 12, 13, 43, 00);
    DateTime b = Date.now();
    if (b.Subtract(a).TotalMinutes<362*24*60){
        url = "https://maps.googleapis.com/maps/api/js?key="+process.env.API_KEY+"&libraries=places&callback=initMap";}
    else{ url=''}
    res.render('index',{url: url})

})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

