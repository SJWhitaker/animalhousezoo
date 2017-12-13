$(document).ready(function () {
    $('div.hero.hidden').fadeIn(3000).removeClass('hidden');
});

$(document).ready(function () {
    $('li.nav-item.hidden').fadeIn(5000).removeClass('hidden');
});

$(document).ready(function () {
	
	$('#schools').fadeIn(2000).toggleClass('hidden');
});

$('#birthday').on('click', function() {
	$('#bdays').fadeIn(2000).toggleClass('hidden');
});

$('#gala').on('click', function() {
	$('#galaOrFunDay').fadeIn(2000).toggleClass('hidden');
});

$('#care').on('click', function() {
	$('#careHome').fadeIn(2000).toggleClass('hidden');
});

$('#clubs').on('click', function() {
	$('#childrenClubs').fadeIn(2000).toggleClass('hidden');
});

$('#other').on('click', function() {
	$('#otherEvents').fadeIn(2000).toggleClass('hidden');
});

$('#enquireButton').on('click', function() {
	$('#schoolContact').fadeIn(2000).toggleClass('hidden');
})

//refactor with .this the above


//need doc ready.
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

