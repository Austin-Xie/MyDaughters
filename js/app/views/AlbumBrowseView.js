/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 13-9-26
 * Time: 下午2:20
 * To change this template use File | Settings | File Templates.
 */

define(
	[
		'backbone',
		'jquery',
		'underscore',
		'jquery-ui'
	],
	function(Backbone, $, _) {
		"use strict";

		return  Backbone.View.extend({

			el: $("div.browse_panel"),

			className: 'AlbumBrowseView',

			viewName: 'albumBrowseView',

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
	}
);
