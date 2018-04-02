$(document).ready(function(){
	// console.log('Ready...');
	
	/* Prints "key pressed" when typing in contractor text input box */
	/* $('#contractorLvl').on('keyup', function(){
		console.log('key pressed');
	}); */
	
	/* Makes text box yellow when selected */
	$('input').focus(function(){
		$(this).css('background','#ffc728'); 
	});
	
	/* Returns text box to white when deselected */
	$('input').blur(function(){
		$(this).css('background','white');
	});
	
	$('#submitButton').click(function(e){
		// console.log('button pressed');
		/* Save value from input */
		var conLvl = $('#contractorLvl').val();
		//console.log(conLvl);
		/* Print value from input to page */
		$('#calcResults').html(
			'Your constructor level is ' + conLvl + '.'
		);
	});
});