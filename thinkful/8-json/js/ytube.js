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
		part: 'snippet',
		key: 'AIzaSyBmcG0vzufL7wsz5YmmG7yjXQ0sMPUNSGs',
		q: searchTerm
	};
	url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, function(data){
			console.log(data);
			showResults(data.items);
		});
}

function showResults(results) {

		$.each(results, function(index,value){
			var Title = value.snippet.title;
			var thumbUrl = value.snippet.thumbnails.medium.url;
			var vidUrl = value.id.videoId;
			vidUrl = "https://www.youtube.com/watch?v=" + vidUrl;
			formatted = "<p><a href='" + vidUrl + "'><img src='" + thumbUrl + "'> " + Title + "</a></p>"
			$('#search-results').append(formatted);
		});
}
