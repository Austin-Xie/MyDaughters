/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 13-9-28
 * Time: 下午5:25
 * To change this template use File | Settings | File Templates.
 */

define(
	[
		'backbone',
		'jquery',
		'underscore'
	],
	function(Backbone, $, _) {
		'use strict';
		return Backbone.View.extend({

			el: $("div.config_panel"),

			className: 'AlbumConfigView',

			viewName: 'albumConfigView',

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
