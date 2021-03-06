require.config({
    baseUrl: "./src/js",
    paths: {
      "react": "../../bower_components/react/react-with-addons",
      "JSXTransformer": "../../bower_components/react/JSXTransformer",
      "jsx": "../../bower_components/jsx-requirejs-plugin/js/jsx",
      "backbone": "../../bower_components/backbone/backbone",
      "underscore": "../../bower_components/underscore/underscore",
      "jquery": "../../bower_components/jquery/dist/jquery",
      "text": "../../bower_components/requirejs-text/text",
      "dispatcher": "../../bower_components/PG-Flux/src/dispatcher",
      "invariant": "../../bower_components/PG-Flux/src/invariant"
    },
    jsx: {
      fileExtension: '.jsx'
    },
    shims: {
      'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      'underscore': {
        exports: '_'
      }
    },
  });
define(['backbone', 'main', 'react', 'jsx!../jsx/ViewManager'], function(
  Backbone, AppRouter, React, ViewManager) {
  var myApp = new AppRouter();
  var myView = new ViewManager({
    el: 'body'
  });
  Backbone.history.start();
});
