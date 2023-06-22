var activitiesSelectBox = document.getElementById("activities-select-box");
var customActivity = document.getElementById("custom-activity");
var submitCustomActivity = document.getElementById("submit-custom-activity");
var submitActivity = document.getElementById("submit-activity");
var activitiesCompleted = document.getElementById("activities-completed");

$( document ).ready(function() {
    console.log( "ready!" );
	let total = 0;

	$("#submit-activity").on("click", (event) => {
		const score = $("#activity-score").val();
		const activity = $("#custom-activity").val();

		$("#activities-completed").append("<li>" + activity + " - " + score + "</li>");
		
		total += parseInt(score);

		$("#score-total").html("Total score: " + total);
	});
});
