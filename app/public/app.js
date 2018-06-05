const container = document.querySelector('#gallery');
const config = {
  animation: {
    duration: 607,
    nudge: true,
    reverseOut: false,
    effects: 'fade scale(0.01) stagger(70ms)',
  },
};

const mixer = mixitup(container, config);

function activeBtn() {
  $('.filter').click(function() {
    $('.filter').removeClass('active');
    $(this).addClass('active');
  });
}

activeBtn();

$(window).scroll(function() {
  $('.sidebar').css('top', Math.max(25, 750 - $(this).scrollTop()));
});

$('.gallerypic').hover(function() {
  $('.gallerypic').css('z-index', 2);
  $(this).css('z-index', 0);
});
