$(document).ready( function() {
	$('#search').mousedown( function() {
		var searchTerm = $('#query').val();
		console.log(searchTerm);
		$('#search-results').html('');
		getRequest(searchTerm);
	});
});

function getRequest(searchTerm) {
	var params = {
		s: searchTerm,
		r: 'json'
	};
	url = 'http://www.omdbapi.com';

	$.getJSON(url, params, function(data){
			console.log(data);
			showResults(data.Search);	
		});
}

function showResults(results) {

		$.each(results, function(index,value){
			console.log(value.Title);
			formatted = "<p>" + value.Title + "</p>"
			$('#search-results').append(formatted);
		});
}
