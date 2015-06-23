var victims = [];
var volunteers = [];


// >>>>>>>> Block to query the number of Victims & Volunteers <<<<<<<<

// var number = prompt('How many victims do you need to enter?');

// for (i = 1; i <= number; i++) {
// 	var name = prompt('Enter the name of victim #' + i);
// 	var phone = prompt("Enter the victim's phone number:");
// 	var street = prompt("Enter the victim's street address:");
// 	var victim = {
// 		name: name,
// 		phone: phone,
// 		street: street,
// 	}
// 	victims.push(victim);
// }

// number = prompt('How many volunteers do you want to enter?');
// for (i = 1; i <=number; i++) {
// 	var name = prompt('Enter the name of volunteer #' + i);
// 	var phone = prompt("Enter the volunteer's phone number:");
// 	var street = prompt("Enter the volunteer's street address:");
// 	var volunteer = {
// 		name: name,
// 		phone: phone,
// 		street: street,
// 	}
// 	volunteers.push(volunteer);

// }
// >>>>>>>> End Block <<<<<<<<

// >>>>>>>> Begin Add Confirmation Block <<<<<<<<
do {
	var i = 1;
	var name = prompt('Enter the name of victim #' + i);
	var phone = prompt("Enter the victim's phone number:");
	var street = prompt("Enter the victim's street address:");
	var victim = {
	name: name,
	phone: phone,
	street: street,
	}
	victims.push(victim);
	i++;
	var r = confirm('Press OK to enter more victims or CANCEL to begin adding volunteers');
} while (r === true);

do {
	var i = 1;
	var name = prompt('Enter the name of volunteer #' + i);
	var phone = prompt("Enter the volunteer's phone number:");
	var street = prompt("Enter the volunteer's street address:");
	var volunteer = {
		name: name,
		phone: phone,
		street: street,
	}
	volunteers.push(volunteer);
	var r = confirm('Press OK to enter another volunteer or CANCEL if there are no more volunteers');
	i++;
} while (r === true);
// >>>>>>>> End Block <<<<<<<<

// >>>>>>>> Begin Alert Block <<<<<<<<
console.log(victims);
console.log(volunteers);

victimNames = []
for (i=0; i<victims.length; i++) {
	victimNames.push(victims[i].name);
}

volunteerNames = []
for (i=0; i<volunteers.length; i++) {
	volunteerNames.push(volunteers[i].name);
}

victimString = victimNames.join('\n \t• ');
volunteerString = volunteerNames.join('\n \t• ');

alert(
	'There are ' + victims.length + ' victims and ' + volunteers.length + ' volunteers available to help!\n\n'
    + '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' 
    + 'The following people really need your help...\n\n'
    + '\t• ' + victimString
    + '\n\n'
    + 'The following people are available to provide assistance...\n\n'
    + '\t• ' + volunteerString
    + '\n\n' 
);
// >>>>>>>> End Block <<<<<<<<