// Angela Waters
// 20 JUNE 2012
// Project 4
// Answering Simple Questions
//https://github.com/anjiluh/sdi-project4

var library = {
	
	// Phone number follow pattern
	phoneNumber : function(myNumber) { 
		var numberCheck = /^(\d{3})-(\d{3})-(\d{4})$/;
			if (myNumber.match (numberCheck)) {
				numberGood = myNumber + " is valid!";
				return numberGood;
			} else {
				numberNoGood = "Number is no good, " + myNumber + " Please follow this format XXX-XXX-XXXX";
			return numberNoGood;	
			}
	},
		 
	// E-mail address
	email : function(myEmail) {
		var emailCheck = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
			if (myEmail.match (emailCheck)) {
				emailGood = myEmail + " is valid!";
				return emailGood;
			} else {
				emailNoGood = "Email address is in the incorrect format, please use xxxx@xxx.com";
				return emailNoGood;
			}
	},
	
	// URL
	url : function(myUrl) {
		var urlCheck = (/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);
			if ( myUrl.match (urlCheck)) {
				urlGood = myUrl + " is valid!";
				return urlGood;
			} else {
				urlNoGood = "URL is in the incorrect format, please use http://xxxx.com";
				return urlNoGood;
			}
	},
	
	// Number money
	dollaBills : function (myDollaBills) {
		var money = myDollaBills.toFixed(2);
		return money;
	},
	
	// String number = real number, say what? 
	stringNumber : function(myStringNumber) {
		realNumber = parseInt(myStringNumber);
		return realNumber;
	},
	
	// Order Objects
	randomPeople : function (people) {
		function sortRandomPeople (a,b) {
				return a.place - b.place;
		}
		var orderedPeople = (people.sort(sortRandomPeople));
		return orderedPeople;
	}
};

//Phone number Example
var validNumber = (library.phoneNumber("910-777-4456"));
	console.log(validNumber);

//email example
var validEmail = (library.email("angela.waters.staley@gmail.com"));
	console.log(validEmail);
	
//URL example
var validUrl = (library.url("http://www.superawesome.com"));
	console.log(validUrl);
	
//Money Exmple
var validMoney = (library.dollaBills(7.1));
	console.log(validMoney);
	
//String Number to Real number Example
var reallyRealNumber = (library.stringNumber("75"));
	console.log(reallyRealNumber);
	
//Order Objects Example
var people = library.randomPeople([{
	name: "Billy",
	place: 7
}, {
	name: "Shallee Bree",
	place: 8
}, {
	name: "Bekah",
	place: 1
}]);
console.log(people);