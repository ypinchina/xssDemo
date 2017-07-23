var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.set("X-XSS-Protection", 0);
  res.render('index', {
    title: 'Express'
  });
});

var comments = {};
/*存储前的编码功能*/
function html_encode(str) {
  var s = "";
  if (str.length == 0) return null;
  s = str.replace(/\&/g, "&amp;");
  s = s.replace(/\s/g, "&nbsp;");
  s = s.replace(/\'/g, "&39;");
  s = s.replace(/</g, "&lt;");
  s = s.replace(/>/g, "&gt;");
  s = s.replace(/\"/g, "&quot;");
  s = s.replace(/\n/g, "&<br>");
  return s;
}
/*存储评论*/
router.get("/comment", function(req, res, next) {
  comments.v = html_encode(req.query.comment);
})
router.get("/getComment", function(req, res, next) {
  res.json({
    comment: comments.v
  })
})
module.exports = router;