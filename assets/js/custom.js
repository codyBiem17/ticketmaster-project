$(document).ready(function () {

    var offsetBlueDiv = $('#blue-div-nav').offset().top;

    var stickyWhiteDiv = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > offsetBlueDiv) {
            $('.hide-and-show').css({ display: "block"});
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


    function modalContainer() {
        $('.hamburger-outer-div').click(() => {
            $('.modal-nav-container').addClass('open');
            $('#image-slides.slide').carousel('pause');
            $('ul.carousel-indicators').css({ display: 'none' });
        })

        $('#close-btn').click(() => {
            $('.modal-nav-container').removeClass('open');
            $('#image-slides.slide').carousel('cycle');
            $('ul.carousel-indicators').css({ display: 'flex' });
        })
    }
    modalContainer()
    
})

