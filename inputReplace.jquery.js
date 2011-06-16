/*!
 * Custom Input Replacer
 *
 * @author		Alexander Baldwin <https://github.com/mynameiszanders>
 * @copyright	2011, Alexander Baldwin
 * @requires	jQuery;
 * @link		https://github.com/mynameiszanders/inputReplacer
 */
(function(undefined) {
	var $ = this.jQuery;
	if(typeof $ != "function") {
		return false;
	}
	$.extend($.fn, {
		"inputReplace": function() {
			var inputs = $(this);
			// Filter out any elements that are not radio or checkbox inputs.
			inputs = inputs.filter("input[type='radio'], input[type='checkbox']");
			$.each(inputs, function(index, element) {
				var input	= $(element);
				// If it has already been replaced, no point doing it again.
				if(input.data("inputReplaced")) {
					return true;
				}
				var type	= input.attr("type"),
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
					input.trigger("click").trigger("change");
				});
				// Detecting a change in the input state.
				input.bind("change", function(event) {
					// Triggering the change event will cause the script to
					// detect when to update the stylable element's visual
					// representation of the original input.
					$("input[name='" + input.attr("name") + "']").trigger("changestyle");
				});
				// Create a custom, separate event for all inputs with the same
				// name will prevent errors occuring when clicking on a radio
				// buttons label.
				input.bind("changestyle", function(event) {
					input.is(":checked") ? replace.addClass(onClass) : replace.removeClass(onClass);
				});
				// Make sure the visual representation is correct at the start
				// of the script execution.
				if(input.is(":checked")) {
					replace.addClass(onClass);
				}
				input.data("inputReplaced", true);
			});
		}
	});
}).call(this);
