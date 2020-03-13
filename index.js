const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    url = "https://maps.googleapis.com/maps/api/js?key="+process.env.API_KEY+"&libraries=places&callback=initMap";
    res.render('index',{url: url})

})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

