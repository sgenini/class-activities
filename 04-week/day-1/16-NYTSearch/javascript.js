$(window).ready(function () {

var searchTerm = "chicken"
var beginYear = "1990"
var endYear= "1995"

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "b945ac262c2d44888131d19d3fdc1e79",
  'q': searchTerm,
  'begin_date': beginYear + "0101",
  'end_date': endYear + "1231"
});

$.ajax({
  url: url,
  method: 'GET',
}).then(function(result) {
    for (var i= 0; i < (result.response.docs.length); i++) { 
    console.log(result);
    console.log(result.response.docs[i].headline.main)
    }
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
});

$("serachTerms")
});