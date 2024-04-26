require([
    'jquery',
    'splunkjs/mvc/simplexml/ready!'
], function ($) {
    $(document).ready(function () {
        console.log("Loading External CSS");
        $('head').append('<link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">');
        $('head').append('<link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.7.2/css/brands.css">');
    });
});

