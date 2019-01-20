var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
/* GET home page. */



router.get('/g/:id',function (req,res,next) {
  var id = req.params.id;

  var url = 'http://nhentai.net/g/'+id;
  request(url,function (err,response,html) {
    if(!err)
    {
      var $ = cheerio.load(html);
      var a = $('#thumbnail-container .thumb-container .gallerythumb img.lazyload');
      var header = $('head');
      var data ="";
      $('nav').filter(function () {
        data += $(this);
      });
      
      $('#bigcontainer').filter(function () {
        data+=$(this);
      });
      a.each(function (i,link) {
        var u = $(link).attr("data-src");
        console.log(u);
        var b = u.replace("//","").split("/");
        var i= b.length;
        var c = b[i-2];
        var d = b[i-1];
        d=d.replace("t.",".");
        var x = "<img src='//cdn.staticaly.com/img/i.nhentai.net/galleries/"+c+"/"+d+"' class='pages69' style='display:inline-block;'>";
        data+=x;
      });
      $("#related-container").filter(function () {
        data+=$(this);
      });
      res.render('index',{data:data,header:header});
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
      var header = $('head');
      var $ = cheerio.load(html);
      $('nav').filter(function () {
        data += $(this);
      });
      $('#content').filter(function () {
        data += $(this);
      });
      res.render('index',{data:data,header:header});
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
      var $ = cheerio.load(html);
      $('nav').filter(function () {
        data += $(this);
      });
      $('#content').filter(function () {
        data += $(this);

      });
      res.render('index',{data:data,header:header});
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
      var $ = cheerio.load(html);
      $('nav').filter(function () {
        data += $(this);
      });
      $('#content').filter(function () {
        data += $(this);

      });
      res.render('index',{data:data,header:header});
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
      var header = $('head');
      var $ = cheerio.load(html);
      $('nav').filter(function () {
        data += $(this);
      });
      $('#content').filter(function () {
        data += $(this);

      });
      res.render('index',{data:data,header:header});
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
      var header = $('head');
      var $ = cheerio.load(html);
      $('nav').filter(function () {
        data += $(this);
      });
      $('#content').filter(function () {
        data += $(this);

      });
      res.render('index',{data:data,header:header});
    }
  });
});
// router.get('/:abc', function(req, res, next) {
//   var page = req.params.abc;
//   var q = req.param('q');
//   if(typeof q == 'undefined')
//     q="";
//   else
//      q="?q="+q;
//   var url = 'http://nhentai.net/'+page+q;
//
//   request(url,function (error,response,html) {
//     if(!error)
//     {
//       var data="";
//       var $ = cheerio.load(html);
//       $('nav').filter(function () {
//         data += $(this);
//       });
//       $('#content').filter(function () {
//        data += $(this);
//         res.render('index',{data:data});
//       });
//     }
//   });
// });
// router.get('/:a/:b', function(req, res, next) {
//   var a = req.params.a;
//   var b = req.params.b;
//   var page = req.param('page');
//   if(typeof page == 'undefined')
//       page="";
//   var url = 'http://nhentai.net/'+a+'/'+b+'?page='+page;
//   request(url,function (error,response,html) {
//     if(!error)
//     {
//       var data="";
//       var $ = cheerio.load(html);
//       $('nav').filter(function () {
//         data += $(this);
//       });
//       $('#content').filter(function () {
//         data += $(this);
//         res.render('index',{data:data});
//       });
//     }
//   });
// });
// router.get('/:a/:b/:c', function(req, res, next) {
//   var a = req.params.a;
//   var b = req.params.b;
//   var c = req.params.c;
//   var page = req.param('page');
//   if(typeof page == 'undefined')
//       page="";
//   var url = 'http://nhentai.net/'+a+'/'+b+'/'+c+'?page='+page;
//   request(url,function (error,response,html) {
//     if(!error)
//     {
//       var data="";
//       var $ = cheerio.load(html);
//       $('nav').filter(function () {
//         data += $(this);
//       });
//       $('#content').filter(function () {
//         data += $(this);
//         res.render('index',{data:data});
//       });
//     }
//   });
// });

module.exports = router;
