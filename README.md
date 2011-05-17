jQuery Input Replacer
=====================

Input Replacer is a [jQuery][jquery] plugin by [Alexander Baldwin][mniz] to
replace radio and checkbox inputs with SPAN elements, for visual effect whilst
letting the browser still control the form logic. The inputs will be checked
according to the visual elements on form submit.

The visual SPAN elements will receive a class (either `radio` or `checkbox`
depending on the type) on creation, and receive another class (either `radioon`
or `checkboxon` depending on type) when they are checked.

To use this plugin, pass in a jQuery DOM Element selection. It will filter out
any elements that are not radios or checkboxes, and then apply the logic.

    var inputs = $("form input");
    inputs.inputReplace();

This plugin does not include any styling, you will have to apply those yourself.
An example of such styling is given below.

    form span.radio,
    form span.checkbox {
        background-image: url("../images/radio.png");
        background-position: 0 0;
        background-repeat: no-repeat;
        display: block;
        height: 20px;
        float: left;
        margin: 0 5px 10px 0;
        width: 20px;
        cursor: pointer;
    }
    form span.checkbox {
        background-image: url("../images/checkbox.png");
    }
    form span.radioon,
    form span.checkboxon {
        background-position: 0 -21px !important;
    }

Compatibility
-------------

As of the update made on the 17th May, 2011, this plugin is now compatable with
the following browsers:

- Firefox (3.6+)
- WebKit
- Opera (10+)
- IE (6+)

[jquery]: http://jquery.com/ "jQuery JavaScript Framework"
[mniz]: https://github.com/mynameiszanders "Alexander Baldwin GitHub Profile"
