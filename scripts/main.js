(function (global) {
    "use strict";

    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checkbox"]';

    var App = window.App;
    var DataStore = App.DataStore;
    var Truck = App.Truck;
    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;

    global.myTruck = new Truck('0001', new DataStore());
    var formHandler = new FormHandler(FORM_SELECTOR);
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });

})(window);