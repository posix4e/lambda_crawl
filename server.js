console.log('Loading function');
var Crawler = require("./crawler.js");
var results = []

exports.handler = function(event, context){
  var crawler = new Crawler().configure({depth: 2});
  var lambda = new AWS.Lambda();
    function showLink(page) {
    results.push(page.url);
  }

  crawler.crawl("http://www.reddit.com/r/javascript", showLink);
  crawler.crawl("http://www.reddit.com/r/typescript", showLink);
  setTimeout(function(){ context.succeed(results); }, 10000);
}
