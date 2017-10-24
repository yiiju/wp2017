$(document).ready(function(){
  $('#title_site').on('click','.about',function(){
    $('body').toggleClass('changebg_about');
    if($('body').hasClass('changebg_about')){
      $('div').find('#title_site').animate({left: '90%','line-height':'10vw'});
      $("#in_about").show();
      $("#in_life").hide();
      $("#in_interest").hide();
      $("#in_contact").hide();
      $(".life").hide();
      $(".interest").hide();
      $(".contact").hide();
    } 
    else{
      $('div').find('#title_site').animate({left: '0%','line-height':'22vw'}); 
      $("#in_about").hide();
      $(".life").show();
      $(".interest").show();
      $(".contact").show(); 
    }
  });
  $('#title_site').on('click','.life',function(){
    $('body').toggleClass('changebg_life');
    if($('body').hasClass('changebg_life')){     
      $('div').find('#title_site').animate({left: '110%','line-height':'10vw'});
      $("#in_life").show();      
      $(".life").css("color","#FF7744");
      $("#in_about").hide();
      $("#in_interest").hide();
      $("#in_contact").hide();
      $(".about").hide();
      $(".interest").hide();
      $(".contact").hide();
    }
    else{
      $('div').find('#title_site').animate({left: '0%','line-height':'22vw'});
      $("#in_life").hide();    
      $(".life").css("color","#FFFFFF");
      $(".about").show();
      $(".interest").show();
      $(".contact").show(); 
    }
  });
  $('#title_site').on('click','.interest',function(){
    $('body').toggleClass('changebg_interest');
    if($('body').hasClass('changebg_interest')){
      $('div').find('#title_site').animate({left: '140%','line-height':'10vw'});
      $("#in_interest").show();     
      $(".interest").css("color","#000088");
      $("#in_about").hide();
      $("#in_life").hide();
      $("#in_contact").hide();
      $(".about").hide();
      $(".life").hide();
      $(".contact").hide();
    }
    else{
      $('div').find('#title_site').animate({left: '0%','line-height':'22vw'});
      $("#in_interest").hide();     
      $(".interest").css("color","#FFFFFF");
      $(".about").show();
      $(".life").show();
      $(".contact").show(); 
    }
  });
  $('#title_site').on('click','.contact',function(){
    $('body').toggleClass('changebg_contact');
    if($('body').hasClass('changebg_contact')){
      $('div').find('#title_site').animate({left: '80%','line-height':'10vw'});
      $("#in_contact").show();
      $("#in_about").hide();
      $("#in_life").hide();
      $("#in_interest").hide();
      $(".about").hide();
      $(".life").hide();
      $(".interest").hide();
    }
    else{
      $('div').find('#title_site').animate({left: '0%','line-height':'22vw'});
      $("#in_contact").hide();
      $(".about").show();
      $(".life").show();
      $(".interest").show();
    }
  });  
});
