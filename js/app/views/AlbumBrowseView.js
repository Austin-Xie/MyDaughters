/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 13-9-26
 * Time: 下午2:20
 * To change this template use File | Settings | File Templates.
 */

define(
    ['backbone',, 'jquery', 'underscore',  'jquery-ui'],
    function(Backbone, $, _) {
        "use strict";

        return Backbone.View.extend({

            tagName: "div.browse_panel",

            className: "AlbumBrowseView",

            events: {
                "click #radio1": "browse",
//                "click .button.edit":   "openEditDialog",
//                "click .button.delete": "destroy"
            },

            initialize: function() {
//                this.listenTo(this.model, "change", this.render);
                console.log("initialize called");
            },

            render: function() {
                console.log("render called");

            },

            browse: function () {
                console.log("radio1 clicked");
            }

        });
    }
);
