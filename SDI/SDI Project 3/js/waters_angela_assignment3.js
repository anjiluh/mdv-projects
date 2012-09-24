//Angela Waters
//14June2012
//Project 4, 1206 SDI
//https://github.com/anjiluh/sdi-project3

//alert("I know my customers very Well! You have been warned!");

//JSON
var handleData = function (json) {
	for (var i = 0; i < json.customers.length; i++){
		var customer = json.customers[i]
		console.log("My customer " + customer.name + " buys a " + customer.product + " everyday. He spends " + customer.price + ".");
		};
};

handleData(json);

//Method Procedure 1
var amountOfUpsale = {
    type: "upsale",
    //Property: String
    hours: 8,
    myAmountOfUpsale: function (item, differentItem) {
        console.log("I have to sell " + item + " today. Will these customers say yes?" );
        if (this.hours >= 10) {
            console.log("Looks like I was able to sell " + item + "'s! Yay, I can keep my job!")
        } else {
            if (this.hours < 14 && this.hours >= 7) {
                console.log("Today's near a payday! Thats why so many people said yes to the upsale!")
            } else {
                console.log("Today is not near a payday and everyond is still paying with nickles, dimes, and pennies. Try to upsell " + differentItem)
            }
        }
    }

};

//Call Function
amountOfUpsale.myAmountOfUpsale("Willy Wonka Candy", "piece of gum");

// Method Function - 2 - boolean argument, number argument, boolean return, conditional, nested conditional, property number
var whatDayIsIt = {
    payday: true,
    howManyUpsales: 25,
    noWriteUp: function (myUpsales, myPayday) {
        if (myPayday == this.payday) {
            if (myUpsales >= this.howManyUpsales) {
                console.log("I made my goal! No write up!");
                return true; //boolean return
            } else {
                console.log("I made my goal, but forgot to mop the floors. I still get a write up.");
                return false; //boolean return
            }
        } else {
            console.log("It's not a payday, and no one is buying my upsales.");
            return false; //boolean return
        }
    }
};

//Call Function
if (whatDayIsIt.noWriteUp(30, true)) {
	console.log("I get to keep my job and maybe one day I'll get a raise!");
} else {
	console.log("I didn't meet the goal today, but I sure did have a fun time lauhing with my coworker!");
};

// Method Accessor - 3 - accessing # of heads within the function, argument array
var customers = {
    numberInStore: 10,
    howManyCups: function (Roo) {
        var needNumberRooCups;
        console.log("It's that time of year, everyone is buying their " + Roo + " cups. So they can get free refills all summer long! To make sure I have enough for all the customers in this store, lets do a count off!");
        numberHowManyCups = 1;
        while (numberHowManyCups <= this.numberInStore) {
            console.log(numberHowManyCups);
            numberHowManyCups++; //math
        }
        needNumberRooCups = this.numberInStore;
        return needNumberRooCups; //return number
    }
};

//Call Function
var howManyRoo = customers.howManyCups("Kangaroo");
console.log("We need " + howManyRoo + " cups! So everyone can get a cup before they start selling on ebay!");

// Mutator Method - 4 - changing the week price to include breakfast.

var sellRooCupToRegulars = {
    costOfRooCup: 7.55,
    canTheyAffordIt: function (json) {
    var whichCustomers;
        console.log("My regular customers are the hardest but sometimes the easiest to sell to, if they can afford the cup. They will buy it. The cup costs $7.55, so they at least have to have $7.55 more.");
        for (var i = 0; i < json.customers2.length; i++) {
            console.log(" ");
            if (json.customers2[i].buyRooCup === false) {
                console.log("Today " + json.customers2[i].name + " has " + json.customers2[i].money);
                // nested loop
                for (var d = 1; d <= this.weekStay; d++) {
                    console.log("He will need at least" + (json.customers2[i].price + costOfRooCup) +  " to be able to afford the cup and their regular items.");
                }
            } else {
                console.log("Looks like " + json.customers2[i].name + " can afford it.");
            }
            var minimumCost = json.customers2[i].price + 7.55;
            if (json.customers2[i].buyRooCup === false) {
                console.log(json.customers2[i].name + " too bad he can't afford it."); //  Mutator
            } else {
                console.log("He will buy it!");

            }

        }
        console.log(" ");
        whichCustomers = "I'm so happy to have " + json.customers2[0].name + " and " + json.customers2[2].name + " as customers! They make my job so much easier!";
        return whichCustomers;
    }
};

//Call Function
var whoRooIt = sellRooCupToRegulars.canTheyAffordIt(json2);

//Return Array
function bonus () {
	var myBonus = [];
	return whichCustomers.join();
}

