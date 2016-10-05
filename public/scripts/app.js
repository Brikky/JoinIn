console.log("Sanity Check: JS is working!");
var template;
var $cityList;
var allCities = [];

$(document).ready(function(){
  $cityList = $('#city-container');

  // compile handlebars template
  var source = $('#city-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/cities',
    success: handleSuccess,
    error: handleError
  });
});

// helper function to render all posts to view
// note: we empty and re-render the collection each time our post data changes
function render () {
  // empty existing posts from view
  $cityList.empty();

  // pass `allCities` into the template function
  var cityHtml = template({ city: allCities });

  // append html to the view
  $cityList.append(cityHtml);
  console.log(allCities);
};

function handleSuccess(json) {
  allCities = json;
  console.log(json);
  render();
}

function handleError(e) {
  console.log('uh oh');
  $('#city-container').text('Failed to load citys, check server');
}
