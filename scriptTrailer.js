$(document).ready(function() {

    $(".trailer").click(function(e) {

        e.preventDefault();
        $.fancybox({
            'padding': 0,
            'width': '70%',
            'height': '70%',
            'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type': 'swf',
            'swf': {
                'allowfullscreen': 'true',
                'wmode': 'transparent'
            }
        });
        return false;
    });
});
