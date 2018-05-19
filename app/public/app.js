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

function activeBtn() {
	$(".filter").click(function() {
		$(".filter").removeClass("active");
		$(this).addClass("active");
	});
};

activeBtn();

$(window).scroll(function(){
    $(".sidebar").css("top", Math.max(25, 750 - $(this).scrollTop()));
});