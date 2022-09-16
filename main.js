
$(document).ready(function (curr) {
    let src, index;
    $(".images").clone().appendTo(".smallImages");

    $.fn.slidShow = function () {

        /**************************** HANDLE CLICK IMAGE  *************************************/

        $(".singleImg img").on("click", function () {
            $('#lightbox').css({ "display": "flex" })

            src = $(this).attr('src');
            $(".active").removeClass("active");

            index = $(this).parent().index();

            $(".container-images .singleImg").eq(index).addClass("active")
            $("#lightbox .singleImg").eq(index).addClass("active")

            $('#content img').attr('src', src).stop(true, true).hide().fadeIn(1000)
            autoPlay();
        });

        /**************************** HANDLE CLOSING  *************************************/

        $("p.close").on("click", function () {
            $('#lightbox').hide()
            $(".active").removeClass("active");
            clearInterval(interval);

        });

        /**************************** HANDLE PREVIOUS CLICK  *************************************/

        $(".prev").on("click", function () {
            clearInterval(interval);
            current = $('.active')
            $(".active").removeClass("active");

            $(current).is(":first-child") ? $('#lightbox .singleImg:last').addClass("active") : $(current).prev().addClass("active");

            index = $('.active').index();

            $(".container-images .singleImg").eq(index).addClass("active")
            src = $(".active").children().attr('src');
            $('#content img').attr('src', src).stop(true, true).hide().fadeIn(1000)
            autoPlay();

        });

        /**************************** HANDLE NEXT CLICK  *************************************/

        $(".next").on("click", function () {
            clearInterval(interval);

            current = $('.active')

            $(".active").removeClass("active");
            $(current).is(":last-child") ? $('#lightbox .singleImg:first').addClass("active") : $(current).next().addClass("active");

            index = $('#lightbox .active').index();
            $(".container-images .singleImg").eq(index).addClass("active")

            src = $(".active").children().attr('src');
            $('#content img').attr('src', src).stop(true, true).hide().fadeIn(1000)
            autoPlay();

        });


        /**************************** HANDLE KEYBORAD PRESS  *************************************/


        $("body").keydown(function (e) {

            if ((e.keyCode || e.which) == 39 || (e.keyCode || e.which) == 40)
                $(".next").click()

            else if ((e.keyCode || e.which) == 37 || (e.keyCode || e.which) == 38)
                $(".prev").click()

        })


        /**************************** HANDLE DISPLAY GALLERY CLICK  *************************************/

        function autoPlay() {
            interval = setInterval(function () {
                $(".next").click()
            }, 3000);
        }

        $('.smallImages img, #content img').hover(function () {
            clearInterval(interval);
        });
        $('.smallImages img, #content img').mouseleave(function () {
            autoPlay();
        });
    }
    /**************************** HANDLE DISPLAY GALLERY CLICK  *************************************/

    $('.container-images img').slidShow()
})







