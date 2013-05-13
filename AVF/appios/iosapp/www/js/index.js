
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

//Connect to FB API
FB.api('/platform', function(response) {
  alert(response.company_overview);
});

//LOGIN
 FB.login(function(response) {
   if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
       console.log('Good to see you, ' + response.name + '.');
     });
   } else {
     console.log('User cancelled login or did not fully authorize.');
   }
 });
 
//Logout
FB.logout(function(response) {
  // user is now logged out
});

//TWITTER 
function twitter(){
    console.log("Getting Twitter Info");
    $.getJSON("http://search.twitter.com/search.json?q=convergence&lang=en&rpp=10&include_entities=true&result_type=recent&callback=?",
              function(tweets){
              //console.log(tweets);
              for (i=0, j=tweets.results.length; i<j; i++){
              $(".tweets")
	              .append("<li class='list'>" + "<img src='" +
	                      tweets.results[i].profile_image_url +
	                      "'/>" + "<h2>" + tweets.results[i].from_user + "</h2>" +
	                      tweets.results[i].created_at  + tweets.results[i].text +
	                      "</li>" );
	              }
              
              }
              
);}
  
//GeoTest

//Get Current Position from GPS
function onMapLoad(){
	navigator.geolocation.getCurrentPosition(displayMap, geoError);
}

//Pull lattitude and longitude
function displayMap(position){
	var element = document.getElementById("map");
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var location = latitude + "," + longitude;
	var actualMap = "http://maps.googleapis.com/maps/api/staticmap?center="+location+"&markers=color:blue%7C"+location+"&zoom=14&size=400x300&sensor=false";
	element.innerHTML = "<img src='"+actualMap+"'>" + "" + "<h1>"+"You Are Here!"+"</h1>" 
		+ "<li>"+"<a href='index.html'>"+"Home"+"</a>"+"</li>";
}

function geoError(err) {

    console.log("*geoError*");

    alert('code: ' + err.code + '\n' + 'message: ' + err.message + '\n');

}  

//Notification
 document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        // Empty
        phoneGapReady.innerHTML = ("")
    }

    // alert dialog dismissed
    function alertDismissed() {
        // do something
    }

    // Show a custom alert
    //
    function showAlert() {
        navigator.notification.alert(
            'You really pressed that button!!',  // message
            alertDismissed,         // callback
            'Its Over Now',            // title
            'Done'                  // buttonName
        );
    }

    // process the confirmation dialog result
    function onConfirm(button) {
        alert('You selected button ' + button);
    }
    
    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
              'You pressed Confirm!', // message
               onConfirm, // callback to invoke with index of button pressed
               'Confirm Demo', // title
               'Restart,Exit' // buttonLabels
                                       );
    }
//Storage
//Not Really Useful On this app
function onDeviceReady() {
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(populateDB, errorCB, successCB);
    }

    // Populate the database 
    //
    function populateDB(tx) {
         tx.executeSql('DROP TABLE IF EXISTS DEMO');
         tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    }

    // Transaction error callback
    //
    function errorCB(tx, err) {
        alert("Error processing SQL: "+err);
    }

    // Transaction success callback
    //
    function successCB() {
        alert("success!");
    } 
 
 //Globalization
  function checkLocale() {
      navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
      );
    }
    
//Events
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // Cordova is loaded and it is now safe to make calls Cordova methods

function onDeviceReady() {
        document.addEventListener("resume", onResume, false);
    }

    // Handle the resume event
    //
    function onResume() {
    }
    
//Camera
var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 

    // Wait for Cordova to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // Cordova is ready to be used!
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI 
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }

            