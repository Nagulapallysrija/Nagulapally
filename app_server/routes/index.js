var express = require('express');
var router = express.Router();
var homepageController=function(req,res) 
{
  res.render('index', { title: 'Mean class of Ai-A' });
};
router.get('/',homepageController);

module.exports = router;
