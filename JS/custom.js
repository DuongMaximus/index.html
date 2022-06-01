// JavaScript Document


$(document).ready(function(){
	$(".btn-toggle").click(function(){
		$("#menu ul").slideToggle()
	})
})
$('#banner').owlCarousel({
   // 	loop:true,	cho lap lại
	items:3,//	 xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		 /*cho phép tự động chạy*/
     autoplayTimeout:5000,  /*thời gian chờ khi chuyển ảnh khi chạy tự động*/
	nav:false,// cho xuất hiện bộ nút tới lui 
 margin:50
  })
$('#owl-service').owlCarousel({
    loop:true,
    margin:20,
   
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
			dots:false,
			nav:true,
        },
        1000:{
            items:3,
			nav:false,
        }
    }
})



var indicator = document.querySelector('.nav-indicator');
        var items = document.querySelectorAll('.nav-item');

        function handleIndicator(el) {
            items.forEach(function (item) {
                item.classList.remove('is-active');
                item.removeAttribute('style');
            });
            indicator.style.width = "".concat(el.offsetWidth, "px");
            indicator.style.left = "".concat(el.offsetLeft, "px");
            indicator.style.backgroundColor = el.getAttribute('active-color');
            el.classList.add('is-active');
            el.style.color = el.getAttribute('active-color');
        }

        items.forEach(function (item, index) {
            item.addEventListener('click', function (e) {
                handleIndicator(e.target);
            });
            item.classList.contains('is-active') && handleIndicator(item);
        });










