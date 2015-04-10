var Crawler = require("simplecrawler");
console.log('Loading function');
exports.handler =function(event, context){
  var crawler = new Crawler("www.example.com");
  crawler.maxDepth = 3; // Etc.
  crawler.filterByDomain = false;
  crawler.on("fetchcomplete",function(queueItem, responseBuffer, response) {
    console.log("I just received %s (%d bytes)",queueItem.url,responseBuffer.length);
    console.log("It was a resource of type %s",response.headers['content-type']);
    // Do something with the data in responseBuffer
  });
  crawler.start();
}
