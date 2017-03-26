(function (global) {
    "use strict";

    var App = global.App || {};
    var $ = global.jQuery;

    function CheckList(selector) {
        if (!selector)
            throw new Error("No selector provided.");
        this.$element = $(selector);
        if (this.$element.length === 0)
            throw new Error("Could not find elements with selector: " + selector);
    }

    function Row(coffeeOrder) {
        var $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'checkbox'
        });
        var $label = $('<label></label>');
        var $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: coffeeOrder.email
        });
        var description = coffeeOrder.size + ', ';
        if (coffeeOrder.flavor)
            description += coffeeOrder.flavor + ' ';
        description += coffeeOrder.coffee + ', ';
        description += ' (' + coffeeOrder.email + ')';
        description += ' [' + coffeeOrder.strength + 'x]';

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }

    App.CheckList = CheckList;
    global.App = App;

})(window);