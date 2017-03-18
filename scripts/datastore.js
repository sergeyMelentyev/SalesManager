"use strict";
(function (window) {
    var App = window.App || {};

    /* constructor or object factory function */
    // if called with 'new' operator, new obj 'DataStore' will be created
    // with 'data' property and explicitly returned
    // if called without 'new', 'data' property will be created and assign on 'App' obj
    function DataStore() {
        this.data = {};
    }

    /* interface */
    // instances created by a constructor have access to shared prototype property
    DataStore.prototype.add = function (key, value) {
        this.data[key] = value;
    };
    DataStore.prototype.get = function (key) {
        return this.data[key];
    };
    DataStore.prototype.getAll = function () {
        return this.data;
    };
    DataStore.prototype.remove = function (key) {
        delete this.data[key];
    };

    App.DataStore = DataStore;
    window.App = App;
})(window);
