$(document).ready(function() {
	console.log('im alive');
	//slide in text
	$('.bxwrap').css('left', '0')
	setTimeout(function() {
   	$('#p1').hide(2000);
  
	}, 7000);
	//hover event
	$('.image').hover(function() {

		$(this).toggleClass('imghover');
		$('.lowerleftcontainer').toggleClass('lowerlefthover');
		$('.lowerrightcontainer').toggleClass('lowerrighthover');
	});

	//figure out how to prevent this function from interferring with mouseenter before adding a call to it
	// var i = 0;
	// function cycle() {

	// 	setTimeout(function() {
	// 	var prev = $('#info div:nth-of-type('+(i-1)+')');
	// 	var current = $('#info div:nth-of-type('+i+')');
	// 	current.addClass('active');
	// 	current.removeClass('hidden');
	// 	prev.addClass('hidden');
	// 	prev.removeClass('active');
	// 	i++;
	// 	if (i < 3) {
	// 		cycle();
	// 	}
	// 	}, 3000)
		
	// 	}


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
		link.children('.body').first().addClass('active');
		link.children('.body').first().removeClass('hidden');

	}

	if (!link.hasClass('active')) 
		hideandshow();
	}); //closes mouseenter function


	
	$.ajax('/api/resumes', {
		complete : function(response) {
			var r = response.responseJSON[0];	
			// console.log(r);
			// // PERSONAL INFO
			var first = r.name_first;
			var last = r.name_last;
			var fullName = first + " " + last;
			$('.body6 h1').html(fullName);
			$('.topname p').html(fullName);
			var website = r.website;
			var twitter = r.twitter;
			var linkedin = r.linked_in;
			var webtwitin = website + '<br><hr>' + twitter + '<br><hr>' + linkedin;
			$('.body6 p').html(webtwitin);
			// CONTACT INFO
			var email = r.contact_info.email;
			var phone = r.contact_info.phone;
			var address = r.contact_info.street_address.street + ", "  +
			+ r.contact_info.street_address.city + ", "
			+ r.contact_info.street_address.state + ", "
			+ r.contact_info.street_address.zip_code;
			var contactinfo = email + '<hr>' + phone + '<hr>' + address;
			$('.body5 p').html(contactinfo);
			

			//SCHOOL1

			for(i=0; i < r.schools.length; i++) {
				var school1 = r.schools[i].name;
				var degree = r.schools[i].degree;
				var gpa = r.schools[i].gpa;
				var major = r.schools[i].major;
				var minor = r.schools[i].minor;
				var startdate = r.schools[i].start_month_year; 
				var enddate = r.schools[i].end_month_year;
				
				var school1info = degree + ', ' + gpa + ' GPA' + '<hr>' + major + ', ' + minor + '<hr>' + startdate + ' - ' + enddate;
				

				$('.educ').append("<div class='body some" + (i+1) + "'>"+
									"<h1>" + school1 + "</h1>" +
									"<p>" + school1info + "</p>" +
								"</div>");
				$('.edu .lists ul').append("<li><a class='some" + (i+1) + "'>" + (i+1) + "</a></li>");
				$('.body').first().addClass('active');
				$('.body').not('.active').addClass('hidden');

			}	

			$('.lists a').hover(function() {
				$('#info').children().children('.active').addClass('hidden');
				$('#info').children().children('.active').removeClass('active');
				var value = $(this).text();
				var num = parseInt(value);
				var listsbody = $($('.body')[num-1]);
				listsbody.addClass('active');
				listsbody.removeClass('hidden');
			});
			// if that class is active, change its associated lists a element style to italic
			




			// Experience
			for(i=0; i < r.experience.length; i++) {
			var organization = r.experience[i].organization;
			var project = r.experience[i].project;
			var role = r.experience[i].role;
			var projrole = project + ', ' + role;
			var location = r.experience[i].location;
			var startdate = r.experience[i].start_month_year;
			var enddate = r.experience[i].end_month_year;
			var locstartend = location + ', ' + startdate + ' - ' + enddate;

			var experience1 = projrole + '<hr>' + locstartend + '<hr>';
			$('.expr').append("<div class='body2'>" +
								"<h1>" + organization + "</h1>" +
								"<h2>" + experience1 + "</h2></div>");
			

				for(j=0; j < r.experience[i].responsibilities.length; j++) {
				var res = r.experience[i].responsibilities[j];
				$(".body2:nth-of-type(" + (i+2) + ")").append("<p>" + res + "</p>");
				}
			
			}
			





			//SKILLS
			for(i=0; i < r.skill.length; i++) {
			var title = r.skill[i].title;
			var yearsexp = r.skill[i].experience;
			var category = r.skill[i].category;
			var catyear = category + ', ' + yearsexp;
			var skillnameexp = title + '<hr>' + catyear + ' years experience.';

			$('.sklz').append("<div class='body3'>" +
								"<h1>" + title + "</h1>" +
								"<p>" + catyear + "</p></div>");
			}	
			 //ACCOMPLISHMENTS
			for(i=0; i < r.accomplishments.length; i++) {
			var accname = r.accomplishments[i].title;
			var accdate = r.accomplishments[i].month_year;
			var description = r.accomplishments[i].description;
			var acc1 = accname + '<hr>' + accdate + '<hr>' + description;
			
			$('.accompz').append("<div class='body4'><h1>" + accname + ', ' + accdate + "</h1><p>" + description + "</p></div>");
			}
			

	 }
	});
	$('.delete').submit(function() {
		$.ajax({
			url : '/api/resumes'+r.id,
			type: 'DELETE'
		});
		window.location = window.location;
	});
	
});			
