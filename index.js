$(document).ready(function(){ 
    $('#all').on('click',function(){
      //$(this).find('.hung').animate({ 'marginTop': '-100px', opacity: 0.7 }, 1000);
      $(this).toggleClass('highlight');
      if($(this).hasClass('highlight')){
        $(this).animate({'marginTop':'80px'});
        $("#heart").fadeIn();
      }
      else{
        $(this).animate({'marginTop':'0px'});
        $("#heart").fadeOut();
      }
    });
  });
