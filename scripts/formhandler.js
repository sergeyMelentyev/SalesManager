(function (global) {
    "use strict";

    var App = global.App || {};
    var $ = global.jQuery;

    function FormHandler(selector) {
        if (!selector) throw new Error("No selector provided");
        this.$formElement = $(selector);
        if (this.$formElement.length === 0) throw new Error("No matching selectors");
    }
    FormHandler.prototype.addSubmitHandler = function (fn) {
        this.$formElement.on('submit', function (event) {
            event.preventDefault();
            var data = {};
            $(this).serializeArray().forEach(function (item) {
                data[item.name] = item.value;
            });
            fn(data);
            this.reset();
            this.elements[0].focus();
        });
    };

    App.FormHandler = FormHandler;
    global.App = App;

})(window);