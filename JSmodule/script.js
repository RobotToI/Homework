$(function () {
	function changeFontColorAndSize(){
		$('#conteiner').toggleClass('newStyle');
		$('#translation').toggleClass('translation');
		// $('#conteiner').css('font-size', '50px');
	}
	// setInterval(changeFontColorAndSize,150);

	$('#changeColor').on('mouseover',function(){
		changeFontColorAndSize();
	});
})