//Angela Waters
//07June2012
//Project 2
//A Day in the Life of Myself

//Initial Variables
var customerNames = ["Gerardo", "Robert", "Nathan", "Mike"],
	costPerCustomer = [18.17, 2.13, 1.72, 12.13],
	itemsCustomersBuy = ["24 pack of Miller Lite in a can", "40oz of Double Malt Colt 45", 	"24oz coffee", "12 pack of Milwaukee's best brew"];
	
//Initial Procedure
for (var i=0, j= customerNames.length; i < j; i++) {
	console.log("My customer " + customerNames[i] + " buys a " + itemsCustomersBuy[i] + " everyday. It costs him $" + costPerCustomer[i] + "." );
};

//Boolean Function
//Do Customers have enough money to pay for their regular items? 
var payForItems = function() {
var canIPayForItems = function() 
	{ if (customersMoney[i] > costPerCustomer[i]){console.log("Great! I can buy it!")	
	} else {console.log("Man can I borrow some cash? I pay you back, I swear!")};
};
var customersMoney = [18.13, 2.20, 2.00, 12.15];
for (var i=0, j= customersMoney.length; i < j; i++) {console.log(customerNames[i] + " has " + "$" + customersMoney[i]); 

canIPayForItems()
return(canIPayForItems());
};	
};

payForItems();


//Number Function
//Nathan Gets Free Coffee Every Other Day, How much money does he save on coffee?
var saveOnCoffee = function(hisName) { console.log(hisName + " spends $" + ((365/2)*1.72) + " on coffee each year, because I graciously give him free coffee, every other day.");
	console.log(hisName + " should spend $" + 365*1.72 + " each year.");
	console.log("But instead " + hisName + " saves $313.90.");
return(hisName);
};
saveOnCoffee("Nathan");

//String Function
//Working at a gas station allows me to network real well. My customers come to me everyday for the product they need and I provide them with good customer service and friendly conversation. 
var myEntertainingCustomers = function (randomCustomers, whatAreTheyDoing){console.log("In the gas station I meet a " + randomCustomers + " who is " + whatAreTheyDoing);};

myEntertainingCustomers("Short asian female", "buying lottery tickets.");
myEntertainingCustomers("short african american male", "utilizing the restroom");

//Array Function
console.log("My family is very supportive and visits me often at the gas station as well.");
var familyNames = ["Bekah", "Ander", "Gelli"],
	theirAge = [17, 20, 26],
	hiddenTalents = ["amazing photographer!", "incredible singer & entertainer!", "superwoman extroardinare, she does it all!"],
	myAge = 22;
	
var myFamily = function(){
	
for (var i=0, j= familyNames.length; i < j; i++) { console.log(familyNames[i] + " is " + theirAge[i] + " and is an " + hiddenTalents[i] + " He/She is " + (myAge - theirAge[i]) + " years older/younger than me."); };
 
var howMuchOlder = myAge - theirAge[i];
 return(howMuchOlder);
};
myFamily();

//Output
console.log("Altogether, I make a difference at the gas station. Offer free drinks and make people laugh!");
