$(document).ready(function () {
    var width = $(window).width();
    if (width >= 690) {
        setTimeout(function () {
            $('#fadeIn').addClass('fadeIn');
            $('.right').css('opacity', '1');

            $('.container').css('width', '690px');
            $('.yk-mask').css('opacity', '1');
        }, 100);

        var icon = document.querySelector('.link-box');
        var texts = $('.text-box em');

        icon.addEventListener('mouseover', function (e) {
            for (var i = 0; i < 7; i++) {
                $(texts[i]).hide();
            }
            var target = event.target;
            if (target.nodeName.toLowerCase() === 'a') {
                var currentId = $(target)[0].id;
                var index = currentId.substring(4, 5);
                $(texts[index]).fadeIn('fast');
            }
        }, false);
        icon.addEventListener('mouseleave', function () {
            for (var i = 0; i < 7; i++) {
                $(texts[i]).hide();
            }
            $(texts[0]).fadeIn('fast');
        })
    }else{
        $('.yk-mask').css('display','none');
    }
})



