$(document).ready(function($) {  
	
	// open a link in a new window, this is valid target="_blank" is not.
	$('a.blank').click(function(){ 
        window.open(this.href);
        return false;
    })
	
    //nav - on hover over
    function megaHoverOver() {
        $(this).find(".sub").stop().fadeTo('fast', 1).show(); //Find sub and fade it in
        (function ($) {
            //Function to calculate total width of all ul's
            jQuery.fn.calcSubWidth = function () {
                rowWidth = 0;
                //Calculate row
                $(this).find("ul").each(function () { //for each ul...
                    rowWidth += $(this).width(); //Add each ul's width together
                });
            };
        })(jQuery);

        if ($(this).find(".row").length > 0) { //If row exists...

            var biggestRow = 0;

            $(this).find(".row").each(function () {	//for each row...
                $(this).calcSubWidth(); //Call function to calculate width of all ul's
                //Find biggest row
                if (rowWidth > biggestRow) {
                    biggestRow = rowWidth;
                }
            });

            $(this).find(".sub").css({ 'width': biggestRow }); //Set width
            $(this).find(".row:last").css({ 'margin': '0' });  //Kill last row's margin

        } else { //If row does not exist...

            $(this).calcSubWidth();  //Call function to calculate width of all ul's
            $(this).find(".sub").css({ 'width': rowWidth }); //Set Width

        }
    }
    //nav - on hover out
    function megaHoverOut() {
        $(this).find(".sub").stop().fadeTo('fast', 0, function () { //Fade to 0 opactiy
            $(this).hide();  //after fading, hide it
        });
    }

    // for dropdowns - set custom configurations
    var config = {
        sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
        interval: 100, // number = milliseconds for onMouseOver polling interval
        over: megaHoverOver, // function = onMouseOver callback (REQUIRED)
        timeout: 500, // number = milliseconds delay before onMouseOut
        out: megaHoverOut // function = onMouseOut callback (REQUIRED)
    };

    $("#mainnav li .sub").css({ 'opacity': '0' }); //Fade sub nav to 0 opacity on default
    $("#mainnav li").hoverIntent(config); //Trigger Hover intent with custom configurations
	
}); 
//END (DOCUMENT).READY