	$(document).ready(function (){
	//toggle sub-menus
	$(".sub-btn").click(function (){
		$(this).next(".sub-menu").slideToggle();
		});
	});