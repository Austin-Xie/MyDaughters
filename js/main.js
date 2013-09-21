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
        jquery: 'jquery/jquery-2.0.3'
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
        }
    }
});

// Start the main app logic.
requirejs(['underscore', 'jquery'],
    function   (_, $) {
//        console.log($.fn.jquery);
        console.info("patience!");
        _.each([1,2,3], function(v) {
            console.info(v);
        });

    }
);