
	function addRes(){
	var whatev = $('#responsibilities').children().first().clone();
	$('.zargon7').before(whatev);

	return false;
	}
	function addExp(){
		var grab = $(this).closest('.multiple').children().not('.add_new' ).first().clone();
		var whatever = grab.find('.zargon7');
		whatever.click(addRes);
		$(this).parent().parent().before(grab);

		return false;
	}

	$(document).ready(function() {

	$('.bxwrap').css('left', '0')
	
	
	$('.add_new a').click(addExp); 
	 
	$('.responsies a').click(addRes);
	
	$('#submit').submit(function() {
		var userData = {};
		
		// contact_info
		userData.contact_info 							= [];
		userData.contact_info.email 					= $('.email').val();
		userData.contact_info.phone						= $('.phone').val();
		// street_address
		userData.contact_info.street_address 			= [];
		userData.contact_info.street_address.city 		= $('.city').val();
		userData.contact_info.street_address.state 		= $('.state').val();
		userData.contact_info.street_address.zip_code	= $('.zip_code').val();
		userData.contact_info.street_address.street		= $('.street').val();
		
		// name, twitter, website, linked_in
		userData.name_first 							= $('.name_first').val();
		userData.name_last								= $('.name_last').val();
		userData.website								= $('.website').val();
		userData.twitter 								= $('.twitter').val();
		userData.linked_in  							= $('.linked_in').val();	
		//school groups
		userData.schools 								= [];
		$('.cont1').each(function() {
			var end 									= $(this).find('.end_month_year').val();
			var end_month_year							= end.slice(5,7) + end.slice(2,4);
			var start 									= $(this).find('.start_month_year').val();
			var start_month_year						= start.slice(5,7) + start.slice(2,4);
			userData.schools.push({
				name : $(this).find('.name').val(),
				major : $(this).find('.major').val(),
				minor : $(this).find('.minor').val(),
				start_month_year : start_month_year,
				end_month_year : end_month_year,
				gpa : $(this).find('.gpa').val()	
			});
		
		});
		//experience
		userData.experience								= [];
		$('.body2').each(function() {
			var end 									= $(this).find('.end_month_year').val();
			var end_month_year							= end.slice(5,7) + end.slice(2,4);
			var start 									= $(this).find('.start_month_year').val();
			var start_month_year						= start.slice(5,7) + start.slice(2,4);
			userData.experience.push({
				organization : $(this).find('.organization').val(),
				project : $(this).find('.project').val(),
				role : $(this).find('.role').val(),
				location : $(this).find('.location').val(),
				start_month_year : start_month_year,
				end_month_year : end_month_year,
			});


		console.log(userData);
		return false;
		});
		//skills
		userData.skills 								= [];
		$('')

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




	
	
