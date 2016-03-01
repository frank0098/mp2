// Write any custom javascript functions here


$(window).scroll(function(){

        var cur_pos = $(document).scrollTop();

        if (cur_pos >= $(document).height()-$(window).height()-50){
          var total =  $('#navbar a').length;
          $('#navbar a').each(function (index){

            if(index===total-1)
            {
              $('#navbar').removeClass('active');
              $(this).addClass('active');
            }
            else
              $(this).removeClass('active');

       })
      }
      else
      {
          $('#navbar a').each(function (){

         var elem = $( $(this).attr("href"));
         var top_pos = elem.position().top;
         var height = elem.height();
         if(cur_pos>=top_pos && cur_pos<height+top_pos)
         {
          $('#navbar').removeClass('active');
            $(this).addClass('active');
          }
          else
            $(this).removeClass('active');
       })
  
      }

});


$(window).scroll(function(){

      var cur_pos = $(document).scrollTop();

    if(cur_pos>=1)
    {
       // $('#navbar').stop().animate({'height':"70px"});
       $('#navbar').stop().animate({'padding-top':"10px",'height':"65px"});

    }
    else
    {
      // $('#navbar').stop().animate({'height':"85px"});
      $('#navbar').stop().animate({'padding-top':"20px",'height':"85px"});
    }
 

});


$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
     $(document).off("scroll");

    $('#navbar a').each(function (){
       $(this).removeClass('active');
     })
    $(this).addClass('active');
    var target = this.hash;
    // alert(this);
    $target = $(target);
    $('html, body').stop().animate({
          'scrollTop': $target.offset().top+1}, 'slow','swing',function(){
      window.location.hash = target;
      $(document).on("scroll",onScroll);

    });

})

function onScroll(){
var cur_pos = $(document).scrollTop();
   $('#navbar a').each(function (){

         var elem = $( $(this).attr("href"));
         var top_pos = elem.position().top;
         var height = elem.height();
         if(cur_pos>=top_pos && cur_pos<height+top_pos)
         {
          $('#navbar').removeClass('active');
            $(this).addClass('active');
          }
          else
            $(this).removeClass('active');
       })
};

$(document).ready(function(){
  $('.carousel').slick({

   dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true


  });
});


