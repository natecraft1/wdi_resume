
	$(document).ready(function() {
	$('.bxwrap').css('left', '0')
	
	//hover event
	//click event to add the option to add school, add more credentials
	$('.add_new a').click(function() {

	  var grab = $(this).closest('.multiple').children().not('.add_new').clone();

	  $(this).parent().parent().before(grab);

	  return false;
	});
	//submit function
	$('#submit').submit(function() {
		var userData = {};
		
		userData.schoolname = $('#schoolname').val();
		console.log(userData);
		
		return false;
	});



	//figure out how to prevent this function from interferring with mouseenter before adding a call to it
	var i = 0;
	function cycle() {

		setTimeout(function() {
		var prev = $('#info div:nth-of-type('+(i-1)+')');
		var current = $('#info div:nth-of-type('+i+')');
		current.addClass('active');
		current.removeClass('hidden');
		prev.addClass('hidden');
		prev.removeClass('active');
		i++;
		if (i < 3) {
			cycle();
		}
		}, 3000)
		
		}



	
//perform all those actions on the nth element}
	

	$('#p2 span').click(function(event){
	//prevents the event from taking us to the top of the page
	event.preventDefault();
	//if the link has class 'active' do nothing, otherwise remove class 'hidden' and add class 
	//'active' to link and add class 'hidden' and remove class 'active' to 'active' elements
	var clicksClass = $(this).attr("class");
	var link = $('#info div.'+ clicksClass);
	
	function hideandshow() {
		$('.active').addClass('hidden');
		$('.active').removeClass('active');
		link.addClass('active');
		link.removeClass('hidden');
	}

	if (!link.hasClass('active')) 
		hideandshow();
	}); //closes mouseenter function
});



	
	
