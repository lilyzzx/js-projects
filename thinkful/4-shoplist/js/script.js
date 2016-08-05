$(document).ready( function() {

var Items = [];

// Item mouse events
	$('.list').on('mouseenter', '.item', function() {
		$(this).addClass('active');
		$(this).children().addClass('active');
		// if Item bought, show checkbox outline
		if ($(this).hasClass('boughtt')) {
			$(this).find('.box').css('border', '1px solid grey');
		}
		else if ($(this).attr('id') !== 'add') {
			$(this).find('.box').css('border', '1px solid steelblue');
		// show checkmark
			$(this).find('.delete').html('<i class="icon-remove icon-2x" style="color:lightsteelblue"></i>');
		}
	})
	.on('mouseleave', '.item', function() {
		$(this).removeClass('active');
		$(this).children().removeClass('active');
		// revert item colors, hide icons
		if ($(this).hasClass('boughtt')) {
			$(this).find('.box').css('border-color', '#FAFAFA');
		}
		else {
			$(this).find('.box').css('border', 'none');
		}
		$(this).find('.box').html('');
		$(this).find('.delete').html('');
	})

// Checkbox mouse events
	// Mouse hovers over item checkbox
	.on('mouseenter', '.box', function() {
		if ($(this).hasClass('bought')) {
			$(this).css('border', '1px solid grey');
		}
		else {
			$(this).html('<i class="icon-ok icon-2x" style="color:steelblue"></i>');
		}
	})
	// Mouse leaves item checkbox
	.on('mouseleave', '.box', function() {
		$(this).html('');

		if ($(this).hasClass('bought')) {
			$(this).css('border', '1px solid #FAFAFA');
		}
		else {
			$(this).css('border', '1px solid transparent');
		}
	})
	// Mouse clicks to mark item bought
	.on('mousedown', '.box', function() {
		if ($(this).hasClass('bought')) {
		// bought status workaround
			// $(this).parent().css('background-color', 'white');
			$(this).parent().removeClass('boughtt');
			$(this).parent().children().removeClass('bought');
		}
		else {
			// $(this).parent().css('background-color', '#FAFAFA');
			$(this).parent().addClass('boughtt');
			$(this).parent().children().addClass('bought');
			// Remove icons
			$(this).html('').css('border', '1px solid grey');
			$(this).parent().find('.delete').html('');
		}
	})

// Trashcan mouse events
	.on('mouseenter', '.delete', function() {
		if ($(this).hasClass('bought') == false) {
			$(this).find('.icon-remove').css('color', 'darksalmon');
		}
	})
	.on('mouseleave', '.delete', function() {
		if ($(this).hasClass('bought') == false) {
			$(this).find('.icon-remove').css('color', 'lightsteelblue');
		}
	})
	.on('mousedown', '.delete', function() {
		if ($(this).attr('id') !== 'add') {
			$(this).parent().remove();
		}
	});

// Adding an item events
	$(':text').keypress( function(e) {
		var itemn = $(this).val();
		if ( itemn == '') {
		}
		else if ( e.keyCode == 13 ) {
			var capitalized = toTitleCase(itemn);
			toAdd = '<div class="item"><div class="box"></div><div class="delete"></div><div class="itemname">'+capitalized+'</div></div>';
			$(this).parent().parent().before(toAdd);
			$(this).val('');
		}
	});
});

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}