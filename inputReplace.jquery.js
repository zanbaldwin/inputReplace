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
			inputs = inputs.filter("input[type=radio], input[type=checkbox]");
			$.each(inputs, function(index, element) {
				var input = $(element),
					type = input.attr("type"),
					onClass = type + "on",
					replace = $(document.createElement("span"));
				// Replace the form element with the stylable element.
				replace.bind("click", function(event) {
					input.trigger("click");
				}).addClass(type).insertAfter(input);
				if(input.is(":checked")) {
					replace.addClass(onClass);
				}
				// Update the visuals when the inputs get changed, and hide the original form element.
				input.bind("change", function(event) {
					if(type == "radio" && typeof event.srcElement !== "undefined") {
						var others = $("input[name='" + input.attr("name") + "']");
						others.trigger("change");
					}
					input.is(":checked") ? replace.addClass(onClass) : replace.removeClass(onClass);
				}).hide();
			});
		}
	});
}).call(this);
