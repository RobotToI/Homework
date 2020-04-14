$(function() {
	$('#add').click(function(){
		$('#delnet').remove();
		var name_of_the_deal=document.getElementById('name').value;
		$('<div></div>', 'class="deals"').appendTo("#left-column");
		
	})
})