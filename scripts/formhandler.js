(function (global) {
    "use strict";

    var App = global.App || {};
    var $ = global.jQuery;

    function FormHandler(selector) {
        if (!selector)
            throw new Error("No selector provided.");
        this.$formElement = $(selector);
        if (this.$formElement.length === 0)
            throw new Error("Could not find elements with selector: " + selector);

    }
    FormHandler.prototype.addSubmitHandler = function () {
        this.$formElement.on("submit", function (event) {
            event.preventDefault();
            var data = $(this).serializeArray();
            console.log(data);
        });
    };

    App.FormHandler = FormHandler;
    global.App = App;
})(window);