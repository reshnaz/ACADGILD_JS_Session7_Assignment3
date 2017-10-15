
// Below function is called on clicking the "Go!" button.
function displayResult() {
	display(); // This calls our anonymous function.
};

// Anonymous function is assigned to a variable
var display=function(){
	setTimeout(
		function(){ 
			document.getElementById('result').innerHTML="Hello there! Welcome :-)"; 
		}, 5); // Setting a 5ms timeout
}