
function showTheQuote() {
	//getting random index of th array to fetch the quotes
	let rnum = Math.floor(Math.random() * 1642);
	//getting motivational quotes
	fetch("https://type.fit/api/quotes")
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			document.querySelector(".quotes").innerHTML = data[rnum].text;
			document.querySelector(".author").innerHTML = "-" + data[rnum].author;
		}).catch(error =>
			console.error(error));


	//returns the greeting as per the time
	 function getGreetings(currentHours) {
		if (currentHours <= 12) {
			return "Good Morning";
		}
		else if (currentHours <= 18 && currentHours > 12) {
			return "Good After Noon";
		} else {
			return "Good Evening";
		}
	}

	let today = new Date();
	let currentHours = today.getHours();
	let greeting = getGreetings(currentHours);
	document.querySelector(".greeting").innerHTML = greeting + " Nasim"
	document.querySelector(".time").innerHTML=new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
	document.querySelector('.date').innerHTML=new Date().toDateString();
}
//Once DOM is loaded run the showTheContent method 
window.addEventListener('DOMContentLoaded', showTheQuote,);


 
