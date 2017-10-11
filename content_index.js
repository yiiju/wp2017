$(document).ready(function(){
    $('#title_site').on('click','.about',function(){
      $('body').toggleClass('changebg_about');
      if($('body').hasClass('changebg_about')){
        $('div').find('#title_site').animate({left: '600px','line-height':'10vw'});
        $("#in_about").show();
      }
      else{
        $('div').find('#title_site').animate({left: '0px','line-height':'23vw'}); 
        $("#in_about").hide(); 
      }
    });
    $('#title_site').on('click','.life',function(){
      $('body').toggleClass('changebg_life');
      if($('body').hasClass('changebg_life')){
        $('div').find('#title_site').animate({left: '600px','line-height':'10vw'});
        $("#in_life").show();
     //   $(".about").hide();
      }
      else{
        $('div').find('#title_site').animate({left: '0px','line-height':'23vw'});
        $("#in_life").hide();
      }
    });
    $('#title_site').on('click','.interest',function(){
      $('body').toggleClass('changebg_interest');
      if($('body').hasClass('changebg_interest')){
        $('div').find('#title_site').animate({left: '600px','line-height':'10vw'});
        $("#in_interest").show();
      }
      else{
        $('div').find('#title_site').animate({left: '0px','line-height':'23vw'});
        $("#in_interest").hide();
      }
    });
    $('#title_site').on('click','.contact',function(){
      $('body').toggleClass('changebg_contact');
      if($('body').hasClass('changebg_contact')){
        $('div').find('#title_site').animate({left: '10px','line-height':'10vw'});
        $("#in_contact").show();
      }
      else{
        $('div').find('#title_site').animate({left: '0px','line-height':'23vw'});
        $("#in_contact").hide();
      }
    });
  });
