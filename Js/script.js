//loader
window.onload = function() {
    var loader = document.getElementById("loader");
    loader.style.display = "none";
    }

    $(window).scroll(function() {
        if ($(this).scrollTop()>220)
         {
            $('.group-whatisgpt3 h3, .container-form h2, .container-form h6').show(900);
         }
        else
         {
          $('.group-whatisgpt3 h3, .container-form h2, .container-form h6').hide(700);
         }
     });
    $(window).scroll(function() {
        if ($(this).scrollTop()>870)
         {
            $('.feature-1 h6, .feature-1 h2, .box h4').show(900);
         }
        else
         {
          $('.feature-1 h6, .feature-1 h2, .box h4').hide(700);
         }
     });
    $(window).scroll(function() {
        if ($(this).scrollTop()>1950)
         {
            $('.cta').show(900);
         }
        else
         {
          $('.cta').hide(700);
         }
     });
    $(window).scroll(function() {
        if ($(this).scrollTop()>2400)
         {
            $('.blog-group').show(900);
         }
        else
         {
          $('.blog-group').hide(700);
         }
     });

     window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

      