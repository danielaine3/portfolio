// var mixitup = require('mixitup');
var container = document.querySelector('#gallery');
var config = {
	"animation": {
        "duration": 607,
        "nudge": true,
        "reverseOut": false,
        "effects": "fade scale(0.01) stagger(70ms)"
	}
};

var mixer = mixitup(container, config);

// console.log(mixer);

// container.classList.add('mixitup-ready');
// mixer.show()
	// .then(function() {
	// 	mixer.configure({
	// 		animation: {
	// 			effects: 'fade scale',
	// 			duration:300
	// 		}
	// 	});
	// });

// $(function() {
// 	$('#gallery').mixitup(container, config);
// });
