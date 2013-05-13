//SAVE THE DATA

$('submit').live('click', function saveData(id) {
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
	favorite = "Yes"
	}else{
	feature = "No"
	}
	var item = [
	fname, lname, cat, bdate, size, location, city, state, zip, email, phone, notes, favorite];
	
	localStorage.setItem(key, item);
	location.reload();
	alert("Welcome to Convergence!");
});

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

$('#displayLink').live('click', function getData() {
	toggleControls("on");
    var getListdiv = $('#list')[0];
    for (var i = 0, j = localStorage.length; i < j; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        value = value.split(',');

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
});

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
    if ($('#feature').is(":checked")){
	feature = "Yes"
	}else{
	feature = "No"
	}


    // show edit item button, hide submit button
    var editButton = $('#edit-item-button').css('display', 'block');
    var subresButtons = $('#submit-reset-buttons').css('display', 'none');
    var itemList = $('#list').css('display', 'none');

    // when clicking editItem button
    $('#edit-item').live('click', function clickEdit() {
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
        var feature;
        if ($('#feature').is(":checked")){
		feature = "Yes"
		}else{
		feature = "No"
		}
        var item = [
        dname, durl, ddate, groups, feature, appeal, notes];
     
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


$("#checkInForm").validate({
    submitHandler: function(form) {
        console.log("Call Action");
    }
});

_______
$(function)(){

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

		var myForm = $('#checkInForm');
			ciErrorsLink = $("#ciErrorsLink");
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
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});
				
//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

});

