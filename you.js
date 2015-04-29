$(document).ready(function(){

	$(function(){

		$('#st').submit(function(event){

			event.preventDefault();
			var searchItem= $('#input').val();
			getRequest(searchItem);
		});
	});

	function getRequest(searchItem){

		var params ={
			part: 'snippet',
			key: 'AIzaSyBaqfHTCd4W6MVUARyRiW31h2qwIlKjQLU',
			q: searchItem

		};

		url='https://www.googleapis.com/youtube/v3/search';
		$.getJSON(url,params, function(data){

			showResult(data.items)
		});
	};

	function showResult(result){
		var html="";
		$.each(result,function(index,value){

			html+='<p>'+ value.snippet.title+'</p>'+
			'<a href = "https://www.youtube.com/watch?v='+ value.id.videoId +'">'
			+	'<img src= "'+value.snippet.thumbnails.default.url+'"/></a>';
			
			

	
		

		});
		$('#searchResult').html(html);

	};

});