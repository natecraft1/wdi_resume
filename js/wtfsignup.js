
	function addRes(){
	var whatev = $('.responsibilities').children().first().clone();
	$(this).parent().before(whatev);

	return false;
	}
	function addExp(){
		var grab = $(this).closest('.multiple').children().not('.add_new' ).first().clone();
		var reslink = grab.find('.reslink');
		reslink.click(addRes);
		$(this).parent().parent().before(grab);

		return false;
	}

	$(document).ready(function() {

		$('.bxwrap').css('left', '0');
		$('.add_new a').click(addExp); 
		 
		$('.responsies a').click(addRes);
	
		$('#submit').submit(function() {
			var userData = {};
			
			//quote
			// contact_info
			userData.contact_info 							= {};
			userData.contact_info.email 					= $('.email').val();
			userData.contact_info.phone						= $('.phone').val();
			// street_address
			userData.contact_info.street_address 			= {};
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
					gpa : $(this).find('.gpa').val(),
					degree : $(this).find('.degree').val()
				});
			
			});
			//experience
			userData.experience								= [];
			$('.cont2').each(function(index, elem) {
				var end 									= $(this).find('.end_month_year').val();
				var end_month_year							= end.slice(5,7) + end.slice(2,4);
				var start 									= $(this).find('.start_month_year').val();
				var start_month_year						= start.slice(5,7) + start.slice(2,4);
				
				var responsibilities 						= [];
				$(elem).find('.resp1').each(function(ind, ele){
					responsibilities.push($(ele).val());
				});
				console.log(responsibilities);

				userData.experience.push({
					organization : $(elem).find('.organization').val(),
					project : $(elem).find('.project').val(),
					role : $(elem).find('.role').val(),
					location : $(elem).find('.location').val(),
					start_month_year : start_month_year,
					end_month_year : end_month_year,
					responsibilities : responsibilities 
				});

			});
			
			//skills
			userData.skill 								= [];
			$('.cont3').each(function(){
				userData.skill.push({
					title : $(this).find('.title').val(),
					experience : $(this).find('.yrsexp').val(),
					category : $(this).find('.category').val()
				});
			});

			//accomplishments
			userData.accomplishments 						= [];
			$('.cont4').each(function(){
				var month = $(this).find('.month_year').val().slice(5,7);
				var yr = $(this).find('.month_year').val().slice(2,4);

				userData.accomplishments.push({
					title : $(this).find('.title').val(),
					month_year : month + yr,
					description : $(this).find('.description').val()

				});
			});
			console.log(userData);
			alert('Thank you for submitting!')
			
			var postData = JSON.stringify({resume : userData});
			$.ajax( {
				url : 'api/resumes',
				type : 'POST',
				data : postData,
				complete : function(response) {
					console.log(response);
				}
			});
			return false;
			

		}); //closes submit function
		




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


		}); //closes click function
	});








	
	
