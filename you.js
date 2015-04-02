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

			showResult(data.search)
		});
	};

	function showResult(result){
		var html="";
		$.each(result,function(index,value){

			html+='<p>'+value.Title+'</p>';

			console.log(value.Title);

		});
		$('#searchResult').html(html);
	};

});