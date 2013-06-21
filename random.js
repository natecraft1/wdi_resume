people = [ 
{ 
firstname	: 'Natalia',
lastname	: 'Fiero', 
height		: 73,
interests 	: [
	'golf',
	'dressage'
]
},
		{
			firstname: 'andy',
			lastname: 'arnoldsson',
			height: 88,
			interests: [
			'kites',
			'basketball'
			]
	}
];



i = 0;
while (i < numbers.length)
{numbers[i]++;
	i++;
}
numbers = [
	3,
	4,
	5,
	65,
	2,
	1
];
function changeNumber(number) 
	{
	number = (number * number - 6) / 4;
	if (number < 10) {
		number = 7;
	}
	return number
}
function changeArray(array) {
for (i = 0; i < array.length; i++) {
	x = array[i] = changeNumber(array[i]);
}
}

firstnames = [];
lastnames = [];
interests = [];
averageheight = 0;
	
totalHeight = 0;

for (i=0; i < people.length; i++) {
	firstnames[i] = people[i].firstname;
	lastnames[i] = people[i].lastname;
	interests.push(people[i].interests);
	totalHeight += people[i].height;
}
averageheight = totalHeight/people.length;
x = ["firstnames= " firstnames, "lastnames= " lastnames, "interests= "interests, "avghgt= " averageheight]