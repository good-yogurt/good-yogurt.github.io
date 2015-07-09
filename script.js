(function($){
    $(function() {
        $('.sg-mouse-over-box').hover(function(){
            $(this).find('.sg-mouse-over-caption').fadeIn();
        }, function() {
            $(this).find('.sg-mouse-over-caption').fadeOut();
        });
    });
})(jQuery);
