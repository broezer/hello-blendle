$( document ).ready(function() {
    console.log( "ready!" );
    console.log("bruce");
    $('section, footer')
    .waypoint(function(direction) {
      if (direction === 'down') {
        $(this.element).addClass('show');
        $(this.element).find('h1').addClass('show');
        $(this.element).find('p').addClass('show');
        $(this.element).find('a').addClass('show');
        $(this.element).find('.personalia__pic').addClass('show');
        $(this.element).find('.boss__wrapper').addClass('show');
        $(this.element).find('.skills-icon').addClass('show');
      }
      else {
      }
  	},{
      offset: '60%'
    })

    $('footer')
    .waypoint(function(direction) {
      if (direction === 'down') {
        $(this.element).find('a').addClass('show');
      }
      else {
      }
  	},{
      offset: 'bottom-in-view'
    })
});
