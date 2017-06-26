(function($){
    $(document).ready(function(){
        var $animele = $(".animele");
        $window = $(window);

        function getPageView(){
            var $top = $window.scrollTop();
            var $bottom = $top + $window.height();
            var $winCenter = $(window).height()/2;
            var $topP = $top + $winCenter;
            
            $.each($animele,function(){
                var $element = $(this);
                var $elementHeight = $element.outerHeight();
                var $eleTopPosition = $element.offset().top;
                var $eleBottomPosition = $eleTopPosition + $elementHeight;
               if($eleBottomPosition >= $top && $eleTopPosition <= $bottom){
                        $element.addClass("in-view");
                }
            });
        };
        $window.on("scroll",getPageView);
        $window.on("scroll resize",getPageView);
        $window.trigger("scroll");
    });
}(jQuery));