"use strict";
(function (window) {
    var App = window.App || {};

    /* constructor */
    // assign parameters as properties to the newly constructed instance
    function Truck(truckId, datastore) {
        this.truckId = truckId;     // email address will be used as key
        this.datastore = datastore;       // reference to new datastore object
    }

    /* interface */
    Truck.prototype.createOrder = function (order) {
        this.datastore.add(order['emailAddress'], order);
    };
    Truck.prototype.deliverOrder = function (customerId) {
        this.datastore.remove(customerId);
    };
    Truck.prototype.printOrders = function () {
        var customerIdArray = Object.keys(this.datastore.getAll());
        console.log("Truck #" + this.truckId + " has pending orders:");
        customerIdArray.forEach(function (id) {
            console.log(this.datastore.get(id));
        }.bind(this));
    };

    App.Truck = Truck;
    window.App = App;
})(window);