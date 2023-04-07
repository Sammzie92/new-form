jQuery("#back-to-top").click(function (){
	jQuery("body,html").animate({
		scrollTop:0
	},600);
});

jQuery(window).scroll(function (){
	if(jQuery(window).scrollTop() > 150)
	{
		jQuery("#back-to-top").addClass("visible");
	}
	else
	{
		jQuery("#back-to-top").removeClass("visible")
	}
});