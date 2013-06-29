$(document).ready(function() {
	//click event to add the option to add school, add more credentials
	$('#resumeform').submit(function() {
		var userData = {};
		
		userData.quote = $('#quote').val();
		console.log(userData);
		
		return false;
	});


});
