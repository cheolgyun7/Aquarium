$(function () {
    // 동영상 재생,멈춤
    var video = $('#video');
    $(".video1").click(function () {
        video.get(0).play();
    })
    $(".video2").click(function () {
        video.get(0).pause();
    })

    // 햄버거버튼눌렀을때 없어지고 close버튼나오게
    // 숨어있던 m_nav메뉴 나오게

    $(".m-ham>a").on("click", function () {
        $(".m-ham>a").toggleClass("closeActive");
        if ($(".m-ham>a").hasClass("closeActive")) {
            $("#m_nav").css("left", "0");
        } else {
            $("#m_nav").css("left", "-100%");
        }
    })

    //메뉴눌렀을때 소메뉴가 나오게 하는거
    $("#m_nav>li>a").on("click", function () {
        $(this).next(".m_sub").slideToggle(300);
        $(this).parent().toggleClass("closeActive")
            .siblings().removeClass("closeActive")
            .children(".m_sub").slideUp(300);
    })
    
    //비디오가 줄어들면서 공백이 생기는 걸 메꾸는거
    let videoHeight = $("#video").outerHeight();
    $("#container>.main_slide").height(videoHeight);

    $(window).on("resize", function () {
        let videoHeight = $("#video").outerHeight();
        $("#container>.main_slide").height(videoHeight);
    })

    $(".information_list").slick({
        slidesToShow: 3,
        dots: true,
        centerPadding: "30px",
        autoplay: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    })
})
