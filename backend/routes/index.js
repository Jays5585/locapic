var express = require('express');
var router = express.Router();
const place = require('../models/places');






router.post('/places', (req, res) => {

    const nickname = req.body.nickname
    const name = req.body.name
    const latitude =req.body.latitude
    const longitude = req.body.longitude

    const newPlace = new place({
         nickname: nickname,
         name: name, 
         latitude: latitude,
         longitude: longitude,

});
    newPlace.save().then(newDoc => {
    place.find()
    .then(data=>{ res.json({placeData: data})})
    
       
})});
router.get('/places', (req, res) => {
   place.find()
   .then(data =>{ res.json({placeData: data})})
});

router.delete('/places/name', (req, res)=>{
    place.find()
    .then(data =>{res.json({placeData: data})})
});


    



module.exports = router;
