/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var MainRouterRouter = Backbone.Router.extend({
        routes: {
          "/game": "game"
        },

        game: function () {
          window.location = "/game"
        }

    });

    return MainRouterRouter;
});
