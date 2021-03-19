var typed = new Typed('.element', {
    strings: ["Web Developer", "Freelancer"],
    typeSpeed: 60,
    smartBackspace: true,
    backSpeed: 60,
    backDelay: 2000,
    loop: true
  });

  var typed = new Typed('.hello', {
    strings: ["Web Developer", "Freelancer"],
    typeSpeed: 60,
    backSpeed: 60,
    smartBackspace: true,
    backDelay: 2000,
    backSpeed: 60,
    loop: true
  });

  var nav = document.querySelectorAll(".navbar")

  window.addEventListener("scroll", function() {
      if (window.scrollY > 0) {
        nav[0].classList.add("scroll");
      }
      else {
        nav[0].classList.toggle("scroll");
      }
  });



  $(function() {
		var selectedClass = "";
		$(".ht").click(function(){
		selectedClass = $(this).attr("data-rel");
    $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut();
    setTimeout(function() {
      $("."+selectedClass).fadeIn();
      $("#portfolio").fadeTo(500, 1);
    }, 500);
		
	});
});

  
  
