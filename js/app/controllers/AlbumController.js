/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 13-9-28
 * Time: 上午10:19
 * To change this template use File | Settings | File Templates.
 */

define (
	[
		'jquery',
		'underscore',
		'app/views/AlbumBrowseView',
		'app/views/AlbumTaggingView'
	],
	function($, _, AlbumBrowseView, AlbumTaggingView) {
		'use strict';

		var MessageBroker = Backbone.Model.extend({
			messageBroker: ""
		});

		var albumController =  Backbone.View.extend({
			el: $('body'),

			className: "AlbumController",

			events: {
				'click #radio1, #radio2, #radio3': 'changeView'
			},

			initialize: function() {
				var self = this;

				self.messageBroker = new MessageBroker();

				self.browseView = new AlbumBrowseView;
				self.taggingView = new AlbumTaggingView;

				self.browseView.listenTo(self.messageBroker, 'change:messageBroker',function(curModel, selectedView) {
					if (this.viewName === selectedView) {
						this.$el.show();
					} else {
						this.$el.hide();
					}
				});

				self.taggingView.listenTo(self.messageBroker, 'change:messageBroker',function(curModel, selectedView) {
					if (this.viewName === selectedView) {
						this.$el.show();
					} else {
						this.$el.hide();
					}
				});

				console.log("initialize called");
				// Initialize jquery ui button set
				$( "#radio" ).buttonset();
				$("#radio1").trigger('click');
			},

			changeView: function (event) {
				var self = this;
				event.preventDefault();
//				console.log("radio1 clicked");
				switch(event.target.id) {
					case 'radio1':
						self.messageBroker.set({messageBroker: 'albumBrowseView'});
						break;
					case 'radio2':
						self.messageBroker.set({messageBroker: 'albumTaggingView'});
						break;
				}

				alert('event.target =' + event.target.id);
			}

		});

		return  albumController;
	}
);
