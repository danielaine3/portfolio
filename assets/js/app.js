var mixer = mixitup(".container", {
	// selectors: {
	// 	target: '.mix'
	// }, 
	// animation: {
	// 	duration: 300
	// }
});

$("#all-button").on ("click", function() {
	mixer.filter('.all');
});

$("#node-button").on ("click", function() {
	console.log("Node button selected.");
	mixer.filter('.node');
});

$("#react-button").on ("click", function() {
	console.log("React button selected.");
	mixer.filter('.react');
});

$("#js-button").on ("click", function() {
	console.log("Javascript button selected.");
	mixer.filter('.js');
});