var express = require('express');
var router = express.Router();
var snippets = require('../snippets.js');

function getRandom(min, max){
  return Math.floor(Math.random()*(max-min) + min);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/hippy', function(req, res){
  function hipstafyT(){
    var newText = "";
    var textArr = req.body.hippy.split(" ");
    for (var i = 0; i < textArr.length; i++){
      var hipWord = snippets[getRandom(1, snippets.length)];
      newText += (" " + textArr[i] + " " + hipWord);
    };
    return newText;
  };
  res.render('hippy', {text: hipstafyT(req.body.hippy)});


});
module.exports = router;
