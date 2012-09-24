//Angela Waters
//First Mobile App
//Project 2

//Dom is ready
window.addEventListener("DOMContentLoaded", function(){
//	alert(localStorage.value(0));
	//getElementByID Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}	
	//Create select field element
	function makeCats(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "genre");
		for(var i = 0, j = genre.length; i < j; i++){
			var makeOption = document.createElement("option");
			var optText = genre[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect); 
	}
	
	//Find value of selected  
	function getCheckboxValue(){
		if($('fav').checked){
			favoriteValue = $('fav').value;
		}else{
			favoriteValue = "No"
		}
	}
	
	function toggleControls(n){
		switch(n){
			case "on":
				$('artistInfo').style.display = "none";
				$('clear').style.display = "inline";
				$('displayData').style.display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('artistInfo').style.display = "block";
				$('clear').style.display = "inline";
				$('displayData').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
				
			default:
				return false;
		}
	}
	
	function storeData(key){
		//If there is no key, this means this is a brand new item and we need a new key
		if(!key){
			var id 				= Math.floor(Math.random()*100000001);
		} else {	
			//Set the id to the existing key we're editing so that it will save over the data.
			//The key is the same key that's been passed along from the editSubmit event handler
			//to the validate function, and then passed here into the storeData function.
			id = key;
		}	
		//Gather up all our form field values and store in n object 	
		//Object properties contain array with the form label
		getCheckboxValue();
		var item			= {};
			item.name		= ["Artist Name:", $("name").value]; 
			item.genre		= ["Genre:", $("genre").value];
			item.bdate		= ["Begins:", $("bdate").value];
			item.edate		= ["Ends:", $("edate").value];
			item.location	= ["Location:", $("location").value];
			item.size		= ["Size of Theatre:", $("size").value];
			item.notes 		= ["Notes:", $("notes").value];
			item.favorite	= ["Save As Favorite?", favoriteValue];
		//Save data into local Storage: Stringify
		localStorage.setItem(id, JSON.stringify(item));
		alert("Tour Date Saved!");
	}
	
	function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There is no data in local Storage so default data was added.");
			autoFillData();
		}
		//Write data from local storage to the browswer.
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeLi = document.createElement('li');
			var linksLi = document.createElement('li');
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert the string from local storage value back to an obj
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeLi.appendChild(makeSubList);
			getImage(obj.genre[1], makeSubList);
			for(var n in obj){
				var makeSubLi = document.createElement('li');
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubLi.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
			}
			makeItemLinks(localStorage.key(i), linksLi);//makeItemLinks(); //Create our edit and delete buttons/link item in local storage
		}
	}
	
	//Get the image for the right category
	function getImage(catName, makeSubList){
		var imageLi = document.createElement('li');
		makeSubList.appendChild(imageLi);
		var newImg = document.createElement('img');
		var setSrc = newImg.setAttribute("src", "img/"+ catName + ".jpg");
		imageLi.appendChild(newImg);
	}
	
	//Auto Populate Local Storage
	function autoFillData(){
		//The actual JSON object data required for this to work is coming from our json.js file, which is loaded from our HTML page
		//Store the JSON OBJECT into Local Storage
		
		for (var n in json){
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	} 
	//Make Item LInks
	//Create the edit and delete links for each stored item when displayed
	function makeItemLinks(key, linksLi){
		//add edit single item link
		var editLink = document.createElement('a');
		editLink.href = "#";	
		editLink.key = key; 
		var editText = "Edit Tour Info";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		//add line break
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);
		
		//add delete single item link
		var deleteLink = document.createElement("a");
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Tour Date"
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	}
	
	function editItem(){
		//Grab the data from our item from Local Storage.
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		
		//Show the form
		toggleControls("off");
		
		//populate the form fields with current localStorage values.
		$("name").value = item.name[1];
		$("genre").value = item.genre[1];
		$("bdate").value = item.bdate[1];
		$("edate").value = item.edate[1];
		$("location").value = item.location[1];
		$("size").value = item.size[1];  
		$("notes").value = item.notes[1];
			if(item.favorite[1] == "Yes"){
			$('fav').setAttribute("checked", "checked");
		}
		$("fav").value = item.notes[1]; 
		
		//remove the initial listener from the input 'save contact' button
		save.removeEventListener("click", storeData);
		//Change Submit button value to edit button
		$('submit').value = "Edit Tour Info";
		var editSubmit = $('submit');
		//save the key value established in this function as a property of the editSubmit event
		//so we can use that value when we save the data we edited.
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key; 
	}
	
	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this Tour Info?");
		if(ask){
			localStorage.removeItem(this.key);
			alert("Contact was deleted!");
			window.location.reload();
		}else{
			alert("Tour Date Info was NOT deleted.");
		}
	}
	
	function clearLocal(){
		if(localStorage.lenghth === 0){
			alert("There is no data to clear.")
		}else{
			localStorage.clear();
			alert("All Contacts Are Deleted!");
			window.location.reload();
			return false;
		}
	}
	
	function validate(e){
		//define the elements we want to check
		var getName = $('name');
		var getGenre = $('genre');
		var getbDate = $('bdate');
		var geteDate = $('edate');
		var getLocation = $('location');
		
		//Reset Error Messages
		errMsg.innerHTML = "";
		getName.style.border = "1px solid black";
		getbDate.style.border = "1px solid black";
		geteDate.style.border = "1px solid black";
		getLocation.style.border = "1px solid black";
			
		//Get Error Messages
		var messageAry = [];
		//Genre Validation
		if(getGenre.value==="--Choose a Genre--"){
			var testGenre = "Please choose a genre.";
			getGenre.style.border = "1px solid red";
			messageAry.push(testGenre);
		}
		
		//Name Validation
		if(getName.value === ""){
			var testName = "Please enter a first name."
			getName.style.border = "1px solid red";
			messageAry.push(testName);
		}
		
		//Beginning date Validation
		if(getbDate.value === ""){
			var bDateError = "Please enter a Begginning Date."
			bDateError.style.border = "1px solid red";
			messageAry.push(bDateError);
		}
		
		//End Date Validation
		if(geteDate.value === ""){
			var testeDate = "Please enter an End Date."
			geteDate.style.border = "1px solid red";
			messageAry.push(testeDate);
		}
		
		//Location Validation
		if(getLocation.value === ""){
			var testLocation = "Please enter a location."
			getLocation.style.border = "1px solid red";
			messageAry.push(testLocation);
		}
		
		//If there were errors, display them on the screen.
		if(messageAry.length >=1) {
			for(var i=0, j=messageAry.length; i < j; i++) {
				var txt = document.createElement('li');
				txt.innerHTML = messageAry[i];
				errMsg.appendChild(txt);
			}
			e.preventDefault();
			return false; 
		} else {
			//If all is okay, save our data! Send the key value (which came from the editData function). Remember this key value was passed through the editSubmit event listener as a property
				storeData(this.key);
		}
		
	}
	//Variable defaults
	var genre = ["--Choose a Genre--", "Country", "Pop", "R&B", "Metal"],
		favoriteValue = "No"
		errMsg = $('errors');
	;
	makeCats();
	
	//Set Link & Submit Click Events
	var displayLink = $('displayData');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", validate);

;})