$(document).ready(function() 
{
	$("#social, #portfolio, #aboutme").hover(function()
	{
		$(this).find(".curtain").slideUp("fast");
		/*var getCurtain = $(this).closest(this).attr('id');
		$(getCurtain).fadeOut();
		console.log(getCurtain);*/
	},

	function()
	{
		$(this).find(".curtain").slideDown("fast");
	});
});