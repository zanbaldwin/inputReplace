/*!
 * Custom Input Replacer
 *
 * @author		Alexander Baldwin <https://github.com/mynameiszanders>
 * @copyright	2011, Alexander Baldwin
 * @requires	jQuery;
 * @link		https://github.com/mynameiszanders/inputReplacer
 */
(function(undefined) {
	var window = this,
		document = window.document,
		$ = window.jQuery;
	if(typeof $ != "function") {
		return false;
	}
	$.extend($.fn, {
		'inputReplace': function() {
			var inputs = $(this);
			// Filter out any elements that are not radio or checkbox inputs.
			inputs = inputs.filter("input[type=radio], input[type=checkbox]");
			$.each(inputs, function(index, element) {
				var input	= $(element),
					type	= input.attr("type"),
					onClass	= type + "on",
					replace	= $(document.createElement("span"));
				// Replace the original inputs with their stylable counterparts.
				replace.addClass(type).insertAfter(input);
				input.hide();
				// When you click on the stylable element, trigger the click
				// event for the respective original input, and the change event
				// for all inputs with the same name.
				replace.bind("click", function(event) {
					// Triggering the click event will change the value of the
					// original form input.
					input.trigger("click");
					// Triggering the change event will the script to detect
					// when to update the stylable element's visual
					// representation of the original input.
					$("input[name='" + input.attr("name") + "']").trigger("change");
				});
				// When the change event is triggered, update the stylable
				// element's visual representation of the original form input.
				input.bind("change", function(event) {
					input.is(":checked") ? replace.addClass(onClass) : replace.removeClass(onClass);
				});
				// Make sure the visual representation is correct at the start
				// of the script execution.
				if(input.is(":checked")) {
					replace.addClass(onClass);
				}
			});
		}
	});
}).call(this);
