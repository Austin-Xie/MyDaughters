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
        'jquery-ui': 'jquery-ui/jquery-ui.min',
        'nivo-slider': 'nivo-slider/jquery.nivo.slider.pack'
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
        },
        'nivo-slider': {
            deps: ['jquery']
        }
    }
});

// Start the main app logic.
requirejs(['underscore', 'jquery',  'nivo-slider', 'jquery-ui'],
    function   (_, $) {
        console.info("patience!");
        _.each([1,2,3], function(v) {
            console.info(v);
        });

        $( "#accordion" ).accordion();

        $('#slider').nivoSlider({
            effect: 'random',               // Specify sets like: 'fold,fade,sliceDown'
            slices: 15,                     // For slice animations
            boxCols: 8,                     // For box animations
            boxRows: 1,                     // For box animations
            animSpeed: 500,                 // Slide transition speed
            pauseTime: 3000,                // How long each slide will show
            startSlide: 0,                  // Set starting Slide (0 index)
            directionNav: true,             // Next & Prev navigation
            controlNav: true,               // 1,2,3... navigation
            controlNavThumbs: false,        // Use thumbnails for Control Nav
            pauseOnHover: true,             // Stop animation while hovering
            manualAdvance: false,           // Force manual transitions
            prevText: 'Prev',               // Prev directionNav text
            nextText: 'Next',               // Next directionNav text
            randomStart: false,             // Start on a random slide
            beforeChange: function(){},     // Triggers before a slide transition
            afterChange: function(){},      // Triggers after a slide transition
            slideshowEnd: function(){},     // Triggers after all slides have been shown
            lastSlide: function(){},        // Triggers when last slide is shown
            afterLoad: function(){}         // Triggers when slider has loaded
        });

        $(window).load(function() {
            $('#slider').nivoSlider();
        });
    }
);