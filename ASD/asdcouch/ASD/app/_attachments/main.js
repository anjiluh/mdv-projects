$('#home').on("pageshow", function(){
	$.couch.db("asdproject").view("asdproject/people", {
		success: function(data) {
			console.log(data);
			$('#contactList').empty();
			$.each(data.rows, function(index, value){
				var item = (value.value || value.doc);
				$("#contactList").append(
					$('<li>').append(
						$('<a>')
							.attr("href", "contact.html?contact=" + item.fname)
							.text(item.fname)
						)
					);
			});
			$('#contactList').listview('refresh');
		}
	});
});



var urlVars = function(urlData){
	var urlData = $($.mobile.activePage).data("url");
	var urlParts = urlData.split('?');
	// ?a=1&b=2&c=3
	var urlPairs = urlParts[1].split('&');
	var urlValues = {};
	for (var pair in urlPairs) {
		var keyValue = urlPairs[pair].split('=');
		var key = decodeURIComponent(keyValue[0])
		var key = decodeURIComponent(keyValue[1])
		urlValues[key] = value;
	}
	return (urlValues);
};

//SAVE
$(document).on("pageshow", '#contactList', function(){
	var contacts = urlVars()["contacts"];
	console.log(contacts);
	$.couch.db("asdproject").openDoc(contacts, {
		success: function(data) {
			var idValue = data._id;
			var revValue = data._rev;
			var editLink = $("#edit");
			editLink.on("click", function(){
				$.couch.db("asdproject").saveDoc(contacts)
			});
		}
//		key: "contact:" + fname
	});
}); 
//DELETE THE DATA
var deleteLink = $("#delete");
deleteLink.on("click", function(){
	
var contact = {
	    _id: idValue,
	    _rev: revValue
	};
	$.couch.db("asdproject").removeDoc(doc, {
	     success: function(data) {
	         console.log(data);
	     var ask = confirm("Are you SURE YOU WANT TO DELETE?");
	     	if(ask){
	     		alert("Contact was deleted!");
	     		window.location.reload();
	     	}else{
	     		alert("Contact was NOT DELETED!");
	     	}
	     	
	    },
	    error: function(status) {
	        console.log(status);
	    }
	});
	});
//EDIT
var editItem = function(idValue, revValue){
	console.log("Edit")
		
		$.couch.db("asdproject").saveDoc(item, {
			success: function(data) {
				console.log(data);
				$("#fname").val(fname);
				$("#lname").val(lname);
				$("#cat").val(cat);
				$("#email").val(email);
				$("favorite").val(favorite);
			},
			error:function(status) {
				console.log(status);
				}
			});
	
};
/*$(document).on(function() {
	console.log("Please work?");
	$.ajax({
		"url": '/asdproject/_all_docs?include_docs=true&start_key="contact:"&end_key="contact:zzzz"',
		"dataType": "json",
		"success": function(data) {
			console.log(data);
			$.each(data.rows, function(index, contact) {
				var fname = contact.doc.fname;
				var lname = contact.doc.lname;
				var cat = contact.doc.cat;
				var email = contact.doc.email;
				var favorite = contact.doc.email;
				$('#contactList').append(
					$('<li>').append(
						$('<a>').attr("href", "#")
							.text(fname)
					)
				);
			});
			$('#contactList').listview('refresh');
		}
	}); 
});*/

//SAVE THE DATA

function saveData(id) {
	console.log("id", id);
	
	
	var fname = $("#fname").val();
	var lname = $("#lname").val();
	var cat = $("#cat").val();
	var bdate = $("#bdate").val();
	var size = $("#size").val();
	var location = $("#location").val();
	var city = $("#city").val();
	var state = $("#state").val();
	var zip = $("#zip").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var notes = $("#notes").val();
	var favorite;
	if ($("#favorite").is(":checked")){
	favorite = "Yes";
	}else{
	favorite = "No";
	}
	var doc = [
	fname, lname, cat, bdate, size, location, city, state, zip, email, phone, notes, favorite];

		if(!data._id){
			var key 				= Math.floor(Math.random()*100000001);
		} else {	
//	var doc = {};
	$.couch.db("asdproject").saveDoc(contact, {
		success: function(data) {
	        console.log(data);
	        console.log("Save!");
	    },
	    error: function(status) {
	        console.log(status);
	    },
	});
			
			key = data._id;
		}	
		
		item._id = key;
//	console.log(key, item);
//	localStorage.setItem(key, item);
//	location.reload();
	alert("Welcome to Convergence!");
//New Page	
	var changePage = function(pageId){
		$('#' + pageId).trigger('pageinit');
		$.mobile.changePage($('#' + pageId),
		{transition:"slide"});
	};
	changePage(savedData);
};

function toggleControls(n) {
    switch (n) {
    case "on":
        $('#checkInForm').css('display', 'none');
        $('#clearLink').css('display', 'inline');
        break;
    case "off":
        $('#checkInForm').css('display', 'block');
        $('#clearLink').css('display', 'inline');
        $('#list').css('display', 'none');
        break;
    default:
        return false;
    }
}

// GET THE DATA

$('#displayLink').on('click', function getData() {
	$("#contactList").empty();
	$.couch.db("asdproject").view("asdproject/people", {
		success: function(data) {
			console.log(data);
			$('#contactList').empty();
			$.each(data.rows, function(index, contact) {
				var fname = contact.doc.fname;
				var lname = contact.doc.lname;
				var cat = contact.doc.cat;
				var email = contact.doc.email;
				var favorite = contact.doc.email;
				$('#contactList').append(
					$('<li>').append(
						$('<a>').attr("href", "contact.html?contact=" + item.lname)
							.text(fname)
					)
				);
			});
			$('#contactList').listview('refresh');
		}
	});
	toggleControls("on");
    var getListdiv = $('#list')[0];
    
    
    /*   for (var i = 0, j = localStorage.length; i < j; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        value = value.split(','); */

        $('<div>').attr({
            'class': 'listDiv'
        }).appendTo('#list');
        $('<h3>').html(value[0]).appendTo('.listDiv');
        $('<img>').attr({
            'src': value[1],
            'width': '300'
        }).appendTo('.listDiv');
        $('<p>').html('First Name: ' + value[2]).appendTo('.listDiv');
        $('<p>').html('Last Name: ' + value[3]).appendTo('.listDiv');
        $('<p>').html('Category: ' + value[4]).appendTo('.listDiv');
        $('<p>').html('Date of Birth: ' + value[5]).appendTo('.listDiv');
        $('<p>').html('Size of Family: ' + value[6]).appendTo('.listDiv');
        $('<p>').html('Street Address: ' + value[7]).appendTo('.listDiv');
        $('<p>').html('City: ' + value[8]).appendTo('.listDiv');
        $('<p>').html('State: ' + value[9]).appendTo('.listDiv');
        $('<p>').html('Zip Code: ' + value[10]).appendTo('.listDiv');
        $('<p>').html('E-mail: ' + value[11]).appendTo('.listDiv');
        $('<p>').html('Street Address: ' + value[12]).appendTo('.listDiv');
        $('<p>').html('Phone Number: ' + value[13]).appendTo('.listDiv');
        $('<p>').html('Prayer Request: ' + value[14]).appendTo('.listDiv');
        $('<p>').html('First Time Guest? : ' + value[15]).appendTo('.listDiv');
        $('<p>').html($('<a>').attr({
            'href': '#',
            'onclick': 'deleteItem(' + key + ');'
        }).html('Delete Design')).appendTo('.listDiv');
        $('<p>').html($('<a>').attr({
            'href': '#',
            'onclick': 'editItem(' + key + ');'
        }).html('Edit Design')).appendTo('.listDiv');

    }
);

// EDIT info

function editItem(id) {
    var itemId = id;
	var value = localStorage.getItem(itemId);
	value = value.split(',');
	toggleControls("off");
    var fname = value[0];
    var lname = value[1];
    var cat = value[2];
    var bdate = value[3];
    var size = value[4];
    var location = value[5];
    var city = value[6];
    var state = value[7];
    var zip = zip[8];
    var email = email[9];
    var phone = phone[10];
    var notes = notes[11];
    var favorite;
    

    $('#fname').val(fname);
    $('#lname').val(lname);
    $('#cat').val(cat);
    $('#bdate').val(bdate);
    $('#size').val(size);
    $('#location').val(location);
    $('#city').val(city);
    $('#state').val(state);
    $('#zip').val(zip);
    $('#email').val(email);
    $('#phone').val(phone);
    $('#notes').val(notes);
    if ($('#favorite').is(":checked")){
	favorite = "Yes";
	}else{
	favorite = "No";
	}


    // show edit item button, hide submit button
    var editButton = $('#edit-item-button').css('display', 'block');
    var subresButtons = $('#submit-reset-buttons').css('display', 'none');
    var itemList = $('#list').css('display', 'none');

    // when clicking editItem button
    $('#edit-item').on('click', function clickEdit() {
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var cat = $('#cat').val();
        var bdate = $('#bdate').val();
        var size = $('#size').val();
        var location = $('#location').val();
        var city = $('#city').val();
        var state = $('#state').val();
        var zip = $('#zip').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var notes = $('#notes').val();
        var favorite;
        if ($('#favorite').is(":checked")){
		favorite = "Yes";
		}else{
		favorite = "No";
		}
        var item = [
        fname, lname, cat, bdate, size, location, city, state, zip, email, phone, notes, favorite];
     
        localStorage.setItem(itemId, item);           
        location.reload();
        alert("Info Edited!");
        
    });

}

// DELETE INFO

function deleteItem(id) {
    var ask = confirm("Are you sure you want to delete this Info?");
    if (ask) {
        localStorage.removeItem(id);
        window.location.reload();
    } else {
        alert("Your Info was NOT deleted.");
    }
}

//Clear All Data
/*
function clearLocal() {
    if (localStorage.length === 0) {
        alert("There is no data to clear.");
    } else {
        localStorage.clear();
        alert("All data has been removed from local storage!");
        window.location.reload();
        return false;
    }
}
*/

/* $("#checkInForm").validate({
    submitHandler: function(form) {
        console.log("Call Action");
    } 
}); */


//_______


$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#about').on('pageinit', function(){
	//code needed for home page goes here
});	

$('#newsStream').on('pageinit', function(){
	//code needed for home page goes here
});	

$('#children').on('pageinit', function(){
	//code needed for home page goes here
});	

$('#youth').on('pageinit', function(){
	//code needed for home page goes here
});	

$('#community').on('pageinit', function(){
	//code needed for home page goes here
});	

$('#checkIn').on('pageinit', function(){
		
		$('#submit').on('click', validate);
		
		var myForm = $('#checkInForm');
			ciErrorsLink = $("#ciErrorsLink");
		function validate(){   
		
		console.log("validate fired");
		 
		    myForm.validate({
			invalidHandler: function(form, validator) {
				var html = "";
				for(var key in validator.submitted){
					var label = $("label[for^='"+ key +"']").not('[generated]');
					var legend = label.closest('fieldset').find('.ui-controlgroup-label');
					var fieldName = legend.length ? legend.text() : label.text;
					html += '<li>'+ fieldname + '<li>';
				};
				$("#checkInErrors ul").html(html);
				},
			submitHandler: function() {
		var data = myForm.serializeArray();
			saveData(data);
		}
		
		
	});
		};
	//any other code needed for addItem page goes here
	
});
				
//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){
	

};


var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

//Pull in Data from outside source

//JSON
/*

$('#json').on('click', function(){
	$('#contactInfos').empty();
//	$('<p>').html('JSON DATA').appendTo('#contactInfos');
	$.ajax({
		url: 'xhr/data.json',
		type: 'GET',
		dataType: 'json',
		success: function(result){
		console.log(result);
		for (var i in result.contacts){
			var items = result.contacts[i];
			$('#contactInfos').append($("<ul>" +
						'<h3>' + items.fname[0] + "" + items.fname[1] + '</h3>' +
						'<h3>' + items.lname[0] + "" + items.lname[1] + '</h3>' +
						'<p>' + items.cat[0] + "" + items.cat[1] + '</p>' +
						'<p>' + items.email[0] + "" + items.email[1] + '</p>' +
						'<p>' + items.favorite[0] + "" + items.favorite[1] + '</p>' + "/ul>"
					));
					}
		},
			
		error: function(error){
			console.log("AJAX - JSON error", error);
		}
	});
});


// XML
$('#xml').on('click', function(){
	console.log("xml");
	$('#contactInfos').empty();
	$('<p>').html('XML DATA').appendTo('#contactInfos');
	$.ajax({
		url: 'xhr/data.xml',
		type: 'GET',
		dataType: 'xml',
		success: function(contactInfo){
			$(contactInfo).find("contactInfo").each(function(){
				var fname = $(this).find('fname').text();
				var lname = $(this).find('lname').text();
				var cat = $(this).find('cat').text();
				var email = $(this).find('email').text();
				var favorite = $(this).find('favorite').text();
		$(''+
					'<div class="contactInfo">' +
						'<h3>First Name: ' + fname + '</h3>' +
						'<h3>Last Name: ' + lname + '</h3>' +
						'<p>Category: ' + cat + '</p>' +
						'<p>E-mail Address: ' + email + '</p>' +
						'<p>First Time Visitor?' + favorite + '</p>' +
					'</div>'
					).appendTo('#contactInfos');		
					console.log(xml);
			});
			$('#contactInfos').listview('refresh');
		}
	});
	return false;
});

//CSV 
$('#csv').on('click', function(){
	console.log('csv');
	$('#contactInfos').empty();
	$('#contactInfos').listview();
	$('#contactInfos').listview('refresh');
	$('<p>').html('CSV Data').appendTo('#contactInfos');
	$.ajax({
		type: "GET",
		url: "xhr/data.csv",
		dataType: "text",
		success: function(contactInfos) {
			console.log(contactInfos);
			var allTextLines = contactInfos.split('\n');
			var headers = allTextLines[0].split(',');
			var lines = []; //main
			
				for (var i=1; i < allTextLines.length; i++){
					var contactInfos = allTextLines[i].split(',');
				if (contactInfos.length == headers.length) {
						var info = []; //blank
						
						for (var j=0; j<headers.length; j++) {
							info.push(contactInfos[j]);
						}
						lines.push(info);
					}
					
				}
				
				for (var m=0; m<lines.length; m++){
					var aContact = lines[m];
				$(''+
					'<div class="contactInfos">' +
						'<h3>First Name: ' + aContact[0] + '</h3>' +
						'<h3>Last Name: ' + aContact[1] + '</h3>' +
						'<p>Category: ' + aContact[2] + '</p>' +
						'<p>E-mail Address: ' + aContact[3] + '</p>' +
						'<p>First Time Visitor?' + aContact[4] + '</p>' +
					'</div>'
					).appendTo('#contactInfos');		
					console.log(lines);
				} 

		}
		

	});
//	return false;
});

/*
// Notes to add

//clear current list

$('#listId').empty();

//Loop through items to repopulate list
 for (var i=0; i < localStorage.length; i++){
	 //populate your list items
 }
//Refresh your JQM listview
$("#listID").listview('refresh');

*/