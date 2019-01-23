// Using this template, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save information from the page in a result array, and log it to the console.

var cheerio = require("cheerio");
var axios = require("axios");

// Make a request via axios to grab the HTML body from the site of your choice
axios.get("https://www.nytimes.com").then(function(response) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(response.data);

  // An empty array to save the data that we'll scrape
  var results = [];

  // Select each element in the HTML body from which you want information.
  // NOTE: Cheerio selectors function similarly to jQuery's selectors,
  // but be sure to visit the package's npm page to see how it works
<<<<<<< HEAD
  $("article.css-8atqhb").each(function(i, element) {

    var title = $(element).children().text();
    var link = $(element).find("a").attr("href");
=======
  $("div.esl82me3").each(function(i, element) {

    var title = $(element).children(".esl82me2").text();
    var link = $(element).parent().attr("href");
>>>>>>> 13edc72205dd327ee35f5f927f402c1fcf8d6646

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      title: title,
<<<<<<< HEAD
      link: link
=======
      link: "https://www.nytimes.com/" + link
>>>>>>> 13edc72205dd327ee35f5f927f402c1fcf8d6646
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});
