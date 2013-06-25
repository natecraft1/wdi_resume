$(document).ready(function() {
	console.log('im alive');
	//slide in text
	$('.bxwrap').css('left', '0')
	//hover event
	$('.image').hover(function() {

		$(this).toggleClass('imghover');
		$('.lowerleftcontainer').toggleClass('lowerlefthover');
		$('.lowerrightcontainer').toggleClass('lowerrighthover');



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
	

	$('.cycle a').mouseenter(function(event){
	//prevents the event from taking us to the top of the page
	event.preventDefault();
	$(this).css({'font-size': '28px'});
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


	
	//$.ajax('/api/resumes/51c3a1448878e79e5d000001', {
	//	complete : function(response) {
	//		// var r = response.responseJSON	
	//		console.log(response.responseJSON)
	//		// PERSONAL INFO
	//		var first = response.responseJSON.name_first
	//		var last = response.responseJSON.name_last;
	//		var fullName = first + " " + last;
	//		$('.one header').html(fullName);
	//		var website = response.responseJSON.website;
	//		var twitter = response.responseJSON.//twitter;
	//		var linkedin = response.responseJSON.//linkedn;
	//		var webtwitin = website + '<br><hr>' + twitter + '<br><hr>' + address;
	//		$('.body1').html(webtwitin);
	//		// CONTACT INFO
	//		var email = response.responseJSON.contact_info.email;
	//		var phone = response.responseJSON.contact_info.phone;
	//		var address = response.responseJSON.contact_info.street_address.street + ", " + '<br>' +
	//		+ response.responseJSON.contact_info.street_address.city + ", "
	//		+ response.responseJSON.contact_info.street_address.state + ", "
	//		+ response.responseJSON.contact_info.street_address.zip_code;
	//		var contactinfo = email + '<br><hr>' + phone + '<br><hr>' + address;
	//		$('.body2').html(contactinfo);
	//		//sCHOOL 1
	//		var school1 = response.responseJSON.//instituion??;
	//		$('.three header').html(school1);
	//		var degree = response.responseJSON.//degree?;
	//		var gpa = response.responseJSON.//gpa?;
	//		var gpadegree = degree + ', ' + gpa + 'GPA';
	//		var major = response.responseJSON.//major?;
	//		var minor = response.responseJSON.//minor?;
	//		var startend = response.responseJSON.//start? + ' - ' + response.responseJSON.//end?;
	// 		var school1info = gpadegree + '<hr><br>' + major + ' ' + minor + '<hr><br>' + startend;
	//		#('.body3').html(school1info);
	//		// Experience
	//		var organization = response.responseJSON.//organization?;
	//		#('.four header').html(organization);
	//		var project = response.responseJSON.//project?;
	//		var role = response.responseJSON.//role??;
	//		var projrole = project + ', ' + role;
	//		var location = response.responseJSON.//location?;
	//		var startdate = response.responseJSON.//start?;
	//		var enddate = response.responseJSON.//end?;
	//		var locstartend = location + ', ' + startdate + ' - ' + enddate;
	//		var responsibilities = response.responseJSON.//respons??;
	//		var experience1 = projrole + '<hr><br>' + locstartend + '<hr><br>' + responsibilites;
	//		$('.body4').html(experience1);
	//		SKILLS
	//		var skillname = response.responseJSON.//skillname??;
	//		var yearsexp = response.responseJSON.//yrsexp?;
	// 		var skillnameexp = skillname + '<hr><br>' + yearsexp;
	//		$('.body5').html(skillnameexp);
	//		ACCOMPLISHMENTS
	//		var accname = response.responseJSON.//accname??;
	//		var accdate = response.responseJSON.//accdate??;
	//		var description = response.responseJSON.//desc??;
	//		var acc1 = accname + '<hr><br>' + accdate + '<hr><br>' + description;
	//		}}
			

});


// what is a cache??