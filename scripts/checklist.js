(function (global) {
    "use strict";

    var App = global.App || {};
    var $ = global.jQuery;

    function CheckList(selector) {
        if (!selector) throw new Error("no selector provided");
        this.$element = $(selector);
        if (this.$element.length === 0) throw new Error("No matching selectors");
    }

    CheckList.prototype.addClickHandler = function (fn) {
        this.$element.on('click', 'input', function (even) {
            var email = event.target.value;
            this.removeRow(email);
            fn(email);
        }.bind(this));
    };

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

        var description = coffeeOrder.coffee + '. ';
        description += 'Size: ' + coffeeOrder.size + '. ';
        if (coffeeOrder.flavor) description += 'Добавить ' + coffeeOrder.flavor + '. ';
        description += ' (' + coffeeOrder.email + ')';
        description += ' [' + coffeeOrder.strength + 'x]';

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }

    CheckList.prototype.addRow = function (coffeeOrder) {
        this.removeRow(coffeeOrder.email);
        var rowElement = new Row(coffeeOrder);
        this.$element.append(rowElement.$element);
    };

    CheckList.prototype.removeRow = function (email) {
        this.$element
            .find('[value="' + email + '"]')
            .closest('[data-coffee-order="checkbox"]')
            .remove();
    };

    App.CheckList = CheckList;
    global.App = App;

})(window);