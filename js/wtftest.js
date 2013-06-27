$(document).ready(function() {
	console.log('im alive');
	//slide in text
	$('.bxwrap').css('left', '0')
	setTimeout(function() {
   	$('#p1').hide(2000);
  
	}, 7000)
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


	
	$.ajax('/api/resumes/51c3a1448878e79e5d000001', {
		complete : function(response) {
			// var r = response.responseJSON	
			console.log(response.responseJSON);
			// PERSONAL INFO
			var first = response.responseJSON.name_first
			var last = response.responseJSON.name_last;
			var fullName = first + " " + last;
			$('.body6 h1').html(fullName);
			$('.topname p').html(fullName);
			var website = response.responseJSON.website;
			var twitter = response.responseJSON.twitter;
			var linkedin = response.responseJSON.linked_in;
			var webtwitin = website + '<br><hr>' + twitter + '<br><hr>' + linkedin;
			$('.body6 p').html(webtwitin);
			// CONTACT INFO
			var email = response.responseJSON.contact_info.email;
			var phone = response.responseJSON.contact_info.phone;
			var address = response.responseJSON.contact_info.street_address.street + ", "  +
			+ response.responseJSON.contact_info.street_address.city + ", "
			+ response.responseJSON.contact_info.street_address.state + ", "
			+ response.responseJSON.contact_info.street_address.zip_code;
			var contactinfo = email + '<hr>' + phone + '<hr>' + address;
			$('.body5 p').html(contactinfo);
	//SCHOOL1
			var school1 = response.responseJSON.schools[0].name;
			$('.body1 h1').html(school1);
			var degree = response.responseJSON.schools[0].degree;
			var gpa = response.responseJSON.schools[0].gpa;
			var gpadegree = degree + ', ' + gpa + ' GPA';
			var major = response.responseJSON.schools[0].major;
			var minor = response.responseJSON.schools[0].minor;
			var startend = response.responseJSON.schools[0].start_month_year + ' - ' + response.responseJSON.schools[0].end_month_year;
			var school1info = gpadegree + '<hr>' + major + ', ' + minor + '<hr>' + startend;
			$('.body1 p').html(school1info);
			// Experience
			var organization = response.responseJSON.experience[0].organization;
			$('.body2 h1').html(organization);
			var project = response.responseJSON.experience[0].project;
			var role = response.responseJSON.experience[0].role;
			var projrole = project + ', ' + role;
			var location = response.responseJSON.experience[0].location;
			var startdate = response.responseJSON.experience[0].start_month_year;
			var enddate = response.responseJSON.experience[0].end_month_year;
			var locstartend = location + ', ' + startdate + ' - ' + enddate;
			var res0 = response.responseJSON.experience[0].responsibilities[0];
			var res1 = response.responseJSON.experience[0].responsibilities[1];
			var res2 = response.responseJSON.experience[0].responsibilities[2];
			var res3 = response.responseJSON.experience[0].responsibilities[3];
			var res4 = response.responseJSON.experience[0].responsibilities[4];
			var responsibilities = res0 + '<br>' + res1 + '<br>' + res2 + '<br>' + res3 + '<br>' + res4;
			var experience1 = projrole + '<hr>' + locstartend + '<hr>';
			$('.body2 h2').html(experience1);
			$('.body2 p').html(responsibilities);
			//SKILLS
			var title = response.responseJSON.skill[0].title;
			var yearsexp = response.responseJSON.skill[0].experience;
			var category = response.responseJSON.skill[0].category;
			var catyear = category + ', ' + yearsexp;
			var skillnameexp = title + '<hr>' + catyear + ' years experience.' ;
			$('.body3 h1').html(skillnameexp);
			//ACCOMPLISHMENTS
			var accname = response.responseJSON.accomplishments[0].title;
			var accdate = response.responseJSON.accomplishments[0].month_year;
			var description = response.responseJSON.accomplishments[0].description;
			var acc1 = accname + '<hr>' + accdate + '<hr>' + description;
			$('.body4 h1').html(accname + ', ' + accdate);
			$('.body4 p').html(description);
			}
			

	});
});			
