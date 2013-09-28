/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 13-9-28
 * Time: 下午4:59
 * To change this template use File | Settings | File Templates.
 */
//AlbumTaggingView


define(
	['backbone', 'jquery', 'underscore',  'jquery-ui'],
	function(Backbone, $, _) {
		"use strict";

		var BrowseView =  Backbone.View.extend({

			el: $("div.tagging_panel"),

			className: "AlbumTaggingView",

			viewName: 'albumTaggingView',

			events: {
				'click #radio1, #radio2, #radio3': 'browse'
			},

			initialize: function() {
//				this.listenTo(this.model, "change", this.render);
				console.log("initialize called");
				_.bindAll(this,'render');
			},

			render: function() {
				console.log("render called");
			},

			browse: function (event) {
				event.preventDefault();
//				console.log("radio1 clicked");
				alert('clicked');
			}

		});

		return BrowseView;
	}
);


