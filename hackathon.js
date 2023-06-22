var activitiesSelectBox = document.getElementById("activities-select-box");
var customActivity = document.getElementById("custom-activity");
var submitCustomActivity = document.getElementById("submit-custom-activity");
var submitActivity = document.getElementById("submit-activity");
var activitiesCompleted = document.getElementById("activities-completed");

$( document ).ready(function() {
    console.log( "ready!" );

	$("#submit-activity").on("click", (event) => {
		
	});
});

function submitCustomActivity(event) {
    event.preventDefault();
    let option = document.createElement("option");
    option.text = event.target.value;
    activitiesSelectBox.add(option);
}

function submitActivity(event) {
    event.preventDefault();
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(event.target.value));
    ul.appendChild(li);
}

function submitActivityLog(event) {
	let test = $("#activity-score");
	let score = getElementById("activity-score");
	console.log(test);
}