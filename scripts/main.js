(function (global) {
    "use strict";

    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;

    global.myTruck = new Truck("001", new DataStore());

})(window);