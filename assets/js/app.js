var container = document.querySelector('#gallery');
var mixer = mixitup(container, {
	load: {
		filter:'none'
	},	
	animation: {
		// enable:true,
		effects:'fade scale stagger',
		duration:300
	},
	selectors: {
		target: '.mix'
	}
});

container.classList.add('mixitup-ready');
mixer.show()
	.then(function() {
		mixer.configure({
			animation: {
				effects: 'fade scale',
				duration:300
			}
		});
	});

$("#all-button").on ("click", function() {
	mixer.filter('all');
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