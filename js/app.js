function loadData(){
  var body = $('body');
  var $wikiElem = $('#wikipedia-links');

  // clear out old data before new request
  $wikiElem.text("");

  var search_input = $("#search-input").val();

  console.log(search_input);
  var wikipedia_url = "http://en.wikipedia.org/w/api.php";
  // getArticle()
  $.ajax({
      url: wikipedia_url,
      type: 'GET',
      dataType: 'jsonp',
      data: {action: 'query', list: 'search', srsearch: $("input[name=Wikipedia]").val(), format: 'json' }
    })
    .done(function(response) {
      console.log(response);
      var art = response.query.search;
      console.log(art);
      art.forEach(function(val){
        //console.log(val.snippet);
        $wikiElem.append('<div class = panel-group><div class = "panel panel-default">'+'<li class = "article">'+
      '<div class = "panel-heading">'+val.title+'<p></div>'+'<div class = "panel-body">'+val.snippet+'</p></div></div></div>');
      });
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
    return false;
}
$('#form-container').submit(loadData);
$(document).ready(function() {
  $('#random-btn').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    // console.log('clicked');
    var random_url = window.open("https://en.wikipedia.org/wiki/Special:Random");
    console.log(random_url);
    if(random_url){
      random_url.focus();
    }else{
      alert('Please allow popups for this website');
    }
  });
});
