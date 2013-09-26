requirejs.config({
    //By default load any module IDs from js/libs
    baseUrl: 'js/libs',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
        backbone: 'backbone/backbone-min',
        underscore: 'underscore/underscore',
        jquery: 'jquery/jquery-2.0.3',
        'jquery-ui': 'jquery-ui/jquery-ui.min',
        'nivo-slider': 'nivo-slider/jquery.nivo.slider.pack',
        galleria: 'galleria/galleria-1.2.9.min',
        'galleria.classic': 'galleria/themes/classic/galleria.classic.min'
    },

    shim: {
        backbone: {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        jquery: {
            exports: '$'
        },
        'jquery-ui': {
            deps: ['jquery'],
            exports: 'jquery-ui'
        },
        'nivo-slider': {
            deps: ['jquery']
        },
        'galleria': {
            deps: ['jquery'],
            exports: 'Galleria'
        },
        'galleria.classic': {
            deps: ['galleria']
        }
    }
});

// Start the main app logic.
requirejs(['underscore', 'jquery', 'galleria', 'galleria.classic', 'jquery-ui',  'app/views/AlbumBrowseView'],
    function   (_, $, Galleria) {
        console.info("patience!");
        _.each([1,2,3], function(v) {
            console.info(v);
        });

        $( "#accordion" ).accordion();

        Galleria.run('#galleria');
    }
);