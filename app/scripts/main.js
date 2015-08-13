/*global require*/
'use strict';

require.config({

    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
       three: {
           exports: 'THREE'
       }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        three: '../bower_components/threejs/build/threejs'
    }
});

require([
    'backbone'
], function (Backbone) {
    Backbone.history.start();
});
