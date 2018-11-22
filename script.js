let time = document.getElementById('clock');
let hex = document.getElementById('hex');
let body = document.getElementById ('body');
let button = document.getElementById ('changeColorMode');

let colorIsBg = true;

function changeColorMode (){
	colorIsBg = !colorIsBg;
}

button.onclick = changeColorMode; //call it when you click it

function updateClock(){
	let date = new Date(); //built in from JS (date)
	let hours = date.getHours();
	let minutes = date.getMinutes ();
	let seconds = date.getSeconds ();

	let ampm = '';
	let color = 'rgb(' + time2color(hours, minutes, seconds) + ')'
// rgb (123, 14, 8) --> computer thinks in rgb, some amount of red greenand blue

	if (hours >=12){
		ampm = "p.m.";	
	} else {
		ampm = "a.m.";
	}
// dont want to say 6:30:4, you wanna say 6:30:04
	if (seconds < 10){
		seconds = '0'+seconds;
	}
	if (minutes <10){
		minutes = '0'+minutes;
	}

	if (hours!=12){
		hours = hours % 12;  // for 12 hour
	}

	if (hours === 0) {
		hours = 12;
	}

	time.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + " " + ampm;
	//6:45:34 am
	hex.innerHTML = color;
	//rgb(56,54,34)

	if (colorIsBg){
		time.style.color = 'white';
		hex.style.color = 'white';
		body.style.backgroundColor = color;
	}
	else {
		body.style.backgroundColor = 'white';
		time.style.color = color;
		hex.style.color = color;
	}
}
updateClock();
setInterval(updateClock, 1000);//1000 times per second so eveyr mili.

function time2color(hours, minutes, seconds){
	let result = [];

	let rawRed = (hours/24)*255;  
	let roundedRed = Math.round(rawRed); //this is for decimals
	let rawGreen = (minutes/60)*255;
	let roundedGreen = Math.round(rawGreen);
	let rawBlue = (seconds/60)*255;
	let roundedBlue = Math.round(rawBlue);

	result.push(roundedRed);
	result.push(roundedGreen);
	result.push(roundedBlue); //order matters, comp takes in order RGB only

	return result.join(',');
	// 255, 0, 0. for all red. otherwise it'll look like 25500
	//so you need the comma 

}