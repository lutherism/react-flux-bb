define(['backbone', 'dispatcher'], function (
  Backbone,
  dispatcher
  ) {
  var PathStore = Backbone.Model.extend({
    initialize: function(options) {
      this.options = options || {};
      dispatcher.register(this.dispatchHandler);
    },
    dispatchHandler: function(payload) {
      if (payload.source === dispatcher.constants.ROUTE_SOURCE) {
        switch (payload.concern) {
          case 'create':
          case 'update':
            this.set(payload.data);
            this.trigger('change:emit');
            break;
        }
      }
    }
  });
  return PathStore;
});
