var api_key = 'a1ec5a81b78e443fb79b3da0c6626c86';
var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
var searchTerm = $('#term');

var query;

console.log(searchTerm);

$('#run-search').on('click', function(e) {
  e.preventDefault();
  query = searchTerm[0].value;
  url +=
    '?' +
    $.param({
      'api-key': api_key,
      q: query
    });
  $.ajax({
    url: url,
    method: 'GET'
  })
    .done(function(result) {
      console.log(result);
    })
    .fail(function(err) {
      throw err;
    });
});
