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
        underscore: 'underscore/underscore',
        jquery: 'jquery/jquery-2.0.3',
        'jquery-ui': 'jquery-ui/jquery-ui.min'
    },

    shim: {
        'backbone': {
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
        }
    }
});

// Start the main app logic.
requirejs(['underscore', 'jquery', 'jquery-ui'],
    function   (_, $) {
        console.info("patience!");
        _.each([1,2,3], function(v) {
            console.info(v);
        });

        $( "#accordion" ).accordion();
    }
);