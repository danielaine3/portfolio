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

// var modalText = {
//     intlintern: {
//         title: 'International Intern',
//         description: 
//         tag:
//         link:
//     },
//     intlintern: {
//         title: 'International Intern',
//         description: 
//         tag:
//         link:
//     },
//     intlintern: {
//         title: 'International Intern',
//         description: 
//         tag:
//         link:
//     },
//     intlintern: {
//         title: 'International Intern',
//         description: 
//         tag:
//         link:
//     },
//     intlintern: {
//         title: 'International Intern',
//         description: 
//         tag:
//         link:
//     },
//     intlintern: {
//         title: 'International Intern',
//         description: 
//         tag:
//         link:
//     },
// };

// $('')



// function showModal(id) {
//     $('#modal .modalTitle').text(modalText[id].title);
//     $('#modal .modaldesc').text(modalText[id].description);
//     $('#modal .tag').text(modalText[id].tag);
//     if (modalText[id].link) $('#modal .button').addClass('visible')
//         .parent()
//         .attr('href', modalText[id].link)
// }
// $(".gallerypic").hover(function() {
//     $(".modal")
// })