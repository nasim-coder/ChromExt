
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
			return "Good morning";
		}
		else if (currentHours <= 18 && currentHours > 12) {
			return "Good after noon";
		} else {
			return "Good evening";
		}
	}

	let today = new Date();
	let currentHours = today.getHours();
	let greeting = getGreetings(currentHours);
	document.querySelector(".greeting").innerHTML = greeting + " Nasim, Hope you are doing well"
}
//Once DOM is loaded run the showTheContent method 
window.addEventListener('DOMContentLoaded', showTheQuote,);

module.exports=getGreetings;
 
