/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 13-9-28
 * Time: 上午10:19
 * To change this template use File | Settings | File Templates.
 */

define ([
    'jquery',
    'underscore',
    'app/views/AlbumBrowseView'
    ],
    function($, _, AlbumBrowseView) {
        'use strict';

        var SelectedView = Backbone.Model.extend({
            selectedView: ""
        });

        var albumController =  Backbone.View.extend({
            el: $('body'),

            className: "AlbumController",

            events: {
                'click #radio1, #radio2, #radio3': 'browse'
            },

            initialize: function() {
                var self = this;
                self.browseView = new AlbumBrowseView;
                self.selectedView = new SelectedView();

                self.browseView.listenTo(self.selectedView, 'change:selectedView',function(curModel, selectedView) {
                    alert('selected view = ' + selectedView);
                } );

//                this.listenTo(this.model, "change", this.render);
                console.log("initialize called");
                $( "#radio" ).buttonset();
                _.bindAll(this,'render');
            },

            browse: function (event) {
                var self = this;
                event.preventDefault();
//                console.log("radio1 clicked");
                switch(event.target.id) {
                    case 'radio1':
                        self.selectedView.set({selectedView: 'albumBrowseView'});
                        break;
                    case 'radio2':
                        self.selectedView.set({selectedView: 'albumTaggingView'});
                        break;
                }

                alert('event.target =' + event.target.id);
            }

        });

        return  albumController;
    }
);
