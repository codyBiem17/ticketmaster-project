$(document).ready(function () {

    var offsetBlueDiv = $('#blue-div-nav').offset().top;

    var stickyWhiteDiv = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > offsetBlueDiv) {
            $('.hide-and-show').css({ display: "block", height: "70px"});
            $('#blue-div-nav').css({marginTop: '-70px'});
            $('.white-div').addClass('sticky-nav');
        }
        else {
            $('.hide-and-show').css({ display: "none" });
            $('#blue-div-nav').css({ marginTop: '0px' });
            $('.white-div').removeClass('sticky-nav');
        }
    };

    stickyWhiteDiv();
    $(window).scroll(function () {
        stickyWhiteDiv();
    });


    function profilePage() {
        $('li#subscriptions1 a').click(function () {
            // alert('tutufr')
            $('hr').addClass('medium-screen-horizontal');
            // $('.medium-screen-horizontal').not(this).removeClass('medium-screen-horizontal')
        })

        $('li#profile1 a').click(function () {
            // alert('tutufr')
            $('hr').removeClass('medium-screen-horizontal');
            // $('.medium-screen-horizontal').not(this).removeClass('medium-screen-horizontal')
        })
    }
    profilePage()


    // mouseover on menulinks

    // $(".user-sell-blue-nav").hover(function () {
    //     $(this).toggleClass('menu-links');
        // $('.user-sell-blue-nav').not(this).css({margin: "30px 0"})
    // })
   
    // document.querySelector('.user-sell-blue-nav').mouseover(() => {
    //     document.querySelector('.user-sell-blue-nav a').addClass('menu-links');
    // })
})

