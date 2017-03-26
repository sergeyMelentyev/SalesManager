(function (global) {
    "use strict";

    var App = global.App || {};

    function Truck(truckId, ds) {
        this.truckId = truckId;
        this.ds = ds;
    }

    Truck.prototype.createOrder = function (order) {
        this.ds.add(order.email, order);
    };
    Truck.prototype.deliverOrder = function (customerId) {
        this.ds.remove(customerId);
    };
    Truck.prototype.printOrders = function () {
        var customerIdArray = Object.keys(this.ds.getAll());
        customerIdArray.forEach(function (id) {
            console.log(this.ds.get(id));
        }, this);
    };

    App.Truck = Truck;
    global.App = App;
})(window);