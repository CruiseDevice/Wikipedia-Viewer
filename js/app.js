function loadData(){
  var body = $('body');
  var $wikiElem = $('#wikipedia-links');

  // clear out old data before new request
  $wikiElem.text("");

  var search_input = $("#search-input").val();

  console.log(search_input);

  var wikipedia_url = "http://en.wikipedia.org/w/api.php";
  $.ajax({
      url: wikipedia_url,
      type: 'GET',
      dataType: 'jsonp',
      data: {action: 'query', list: 'search', srsearch: $("input[name=Wikipedia]").val(), format: 'json' }
    })
    .done(function(response) {
      //console.log(response);
      var art = response.query.search;
      console.log(art);
      art.forEach(function(val){
        //console.log(val.snippet);
        $wikiElem.append('<li class = "article">'+
      val.title+'<p>'+val.snippet+'</p>');
      });
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
    return false;


    // TODO: Search random wikipedia article
}
$('#form-container').submit(loadData);
