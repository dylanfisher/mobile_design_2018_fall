App = {};

$(document).on('click', '.hamburger-wrapper', function() {
  if ( App.navIsOpen() ) {
    App.closeNav();
  } else {
    App.openNav();
  }
});

App.navIsOpen = function() {
  return $('html').hasClass('showing-nav');
};

App.openNav = function() {
  $('html').addClass('showing-nav');
};

App.closeNav = function() {
  $('html').removeClass('showing-nav');
};
