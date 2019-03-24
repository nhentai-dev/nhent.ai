var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
router.get('/g/:id',function (req,res,next) {
  var id = req.params.id;

  var url = 'http://nhentai.net/g/'+id;
  request(url,function (err,response,html) {
    if(!err)
    {
      var $ = cheerio.load(html);
      var header = $('head');
	  var description = $('meta[name="description"]');
	  var name = $('meta[itemprop="name"]');
	  var image = $('meta[itemprop="image"]');
	  var ogtype = $('meta[property="og:type"]');
	  var ogtitle = $('meta[property="og:title"]');
	  var ogimage = $('meta[property="og:image"]');
	  var twcard = $('meta[name="twitter:card"]');
	  var twtitle = $('meta[name="twitter:title"]');
	  var twdesc = $('meta[name="twitter:description"]');
      var data ="";
      var title = $('title');
      $('nav').filter(function () {
        data += $(this);
      });
      $('#bigcontainer').filter(function () {
        data+=$(this);
      });
      $('#thumbnail-container').filter(function () {
        data+=$(this);
      });
      $("#related-container").filter(function () {
        data+=$(this);
      });
      res.render('index',{data:data,header:header,title:title, description:description, name:name, image:image, ogtype:ogtype, ogtitle:ogtitle, ogimage:ogimage, twcard:twcard, twdesc:twdesc, twtitle:twtitle});
    }
  });
});
router.get('/', function(req, res, next) {
  var u = req.originalUrl;
  var url = 'http://nhentai.net'+u;
  console.log(url);

  request(url,function (error,response,html) {
    if(!error)
    {
      var $ = cheerio.load(html);
      var data="";
	  var description = $('meta[name="description"]');
      var title = $('title');
	  var name = $('meta[itemprop="name"]');
	  var image = $('meta[itemprop="image"]');
	  var ogtype = $('meta[property="og:type"]');
	  var ogtitle = $('meta[property="og:title"]');
	  var ogimage = $('meta[property="og:image"]');
	  var twcard = $('meta[name="twitter:card"]');
	  var twtitle = $('meta[name="twitter:title"]');
	  var twdesc = $('meta[name="twitter:description"]');
      var header = $('head');
      var $ = cheerio.load(html);
      $('nav').filter(function () {
        data += $(this);
      });
      $('#content').filter(function () {
        data += $(this);
      });
      res.render('index',{data:data,header:header,title:title, description:description, name:name, image:image, ogtype:ogtype, ogtitle:ogtitle, ogimage:ogimage, twcard:twcard, twdesc:twdesc, twtitle:twtitle});
    }
    else {
      res.render('index',{data:'ERROR',title:'ERROR',header:""});
    }
  });
});
router.get('/:a', function(req, res, next) {
  var u = req.originalUrl;
  var url = 'http://nhentai.net'+u;
  console.log(url);
  request(url,function (error,response,html) {
    if(!error)
    { var $ = cheerio.load(html);
      var data="";
      var header = $('head');
	  var description = $('meta[name="description"]');
	  var name = $('meta[itemprop="name"]');
	  var image = $('meta[itemprop="image"]');
	  var ogtype = $('meta[property="og:type"]');
	  var ogtitle = $('meta[property="og:title"]');
	  var ogimage = $('meta[property="og:image"]');
	  var twcard = $('meta[name="twitter:card"]');
	  var twtitle = $('meta[name="twitter:title"]');
	  var twdesc = $('meta[name="twitter:description"]');
      var title = $('title');
      var $ = cheerio.load(html);
      $('nav').filter(function () {
        data += $(this);
      });
      $('#content').filter(function () {
        data += $(this);

      });
      res.render('index',{data:data,header:header,title:title, description:description, name:name, image:image, ogtype:ogtype, ogtitle:ogtitle, ogimage:ogimage, twcard:twcard, twdesc:twdesc, twtitle:twtitle});
    }
  });
});
router.get('/:a/:b', function(req, res, next) {
  var u = req.originalUrl;
  var url = 'http://nhentai.net'+u;
  console.log(url);
  request(url,function (error,response,html) {
    if(!error)
    { var $ = cheerio.load(html);
      var data="";
      var header = $('head');
	  var description = $('meta[name="description"]');
	  var name = $('meta[itemprop="name"]');
	  var image = $('meta[itemprop="image"]');
	  var ogtype = $('meta[property="og:type"]');
	  var ogtitle = $('meta[property="og:title"]');
	  var ogimage = $('meta[property="og:image"]');
	  var twcard = $('meta[name="twitter:card"]');
	  var twtitle = $('meta[name="twitter:title"]');
	  var twdesc = $('meta[name="twitter:description"]');
      var title = $('title');
      var $ = cheerio.load(html);
      $('nav').filter(function () {
        data += $(this);
      });
      $('#content').filter(function () {
        data += $(this);

      });
      res.render('index',{data:data,header:header,title:title, description:description, name:name, image:image, ogtype:ogtype, ogtitle:ogtitle, ogimage:ogimage, twcard:twcard, twdesc:twdesc, twtitle:twtitle});
    }
  });
});
router.get('/:a/:b/:c', function(req, res, next) {
  var u = req.originalUrl;
  var url = 'http://nhentai.net'+u;
  console.log(url);
  request(url,function (error,response,html) {
    if(!error)
    { var $ = cheerio.load(html);
      var data="";
      var title = $('title');
	  var description = $('meta[name="description"]');
	  var name = $('meta[itemprop="name"]');
	  var image = $('meta[itemprop="image"]');
	  var ogtype = $('meta[property="og:type"]');
	  var ogtitle = $('meta[property="og:title"]');
	  var ogimage = $('meta[property="og:image"]');
	  var twcard = $('meta[name="twitter:card"]');
	  var twtitle = $('meta[name="twitter:title"]');
	  var twdesc = $('meta[name="twitter:description"]');
      var header = $('head');
      var $ = cheerio.load(html);
      $('nav').filter(function () {
        data += $(this);
      });
      $('#content').filter(function () {
        data += $(this);

      });
      res.render('index',{data:data,header:header,title:title, description:description, name:name, image:image, ogtype:ogtype, ogtitle:ogtitle, ogimage:ogimage, twcard:twcard, twdesc:twdesc, twtitle:twtitle});
    }
  });
});
router.get('/:a/:b/:c/:d', function(req, res, next) {
  var u = req.originalUrl;
  var url = 'http://nhentai.net'+u;
  console.log(url);
  request(url,function (error,response,html) {
    if(!error)
    { var $ = cheerio.load(html);
      var data="";
	  var description = $('meta[name="description"]');
	  var name = $('meta[itemprop="name"]');
	  var image = $('meta[itemprop="image"]');
	  var ogtype = $('meta[property="og:type"]');
	  var ogtitle = $('meta[property="og:title"]');
	  var ogimage = $('meta[property="og:image"]');
	  var twcard = $('meta[name="twitter:card"]');
	  var twtitle = $('meta[name="twitter:title"]');
	  var twdesc = $('meta[name="twitter:description"]');
      var title = $('title');
      var header = $('head');
      var $ = cheerio.load(html);
      $('nav').filter(function () {
        data += $(this);
      });
      $('#content').filter(function () {
        data += $(this);

      });
      res.render('index',{data:data,header:header,title:title, description:description, name:name, image:image, ogtype:ogtype, ogtitle:ogtitle, ogimage:ogimage, twcard:twcard, twdesc:twdesc, twtitle:twtitle});
    }
  });
});
module.exports = router;
