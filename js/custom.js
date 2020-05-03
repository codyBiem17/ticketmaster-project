$(document).ready(function () {

    var offsetBlueDiv = $('#blue-div-nav').offset().top;

    var stickyWhiteDiv = function () {
        var scrollTop = $(window).scroll(function () {
            if ($(document).scrollTop() > offsetBlueDiv) {
                $('.hide-and-show').css({ display: "block"});
                // $('#blue-div-nav').css({marginTop: '-70px'});
                $('.white-div').addClass('sticky-nav');
            }
            else {
                // $('.hide-and-show').css({ display: "none"});
                // $('#blue-div-nav').css({ marginTop: '0px' });
                $('.white-div').removeClass('sticky-nav');
            }
        }); 

      
        // if (scrollTop > offsetBlueDiv) {
        //     $('.hide-and-show').css({ display: "block", paddingTop: '30px', paddingBottom: '30px', height:'90px' });
        //     $('#blue-div-nav').css({marginTop: '-70px'});
        //     $('.white-div').addClass('sticky-nav');
        // }
        // else {
        //     $('.hide-and-show').css({ display: "none" });
        //     $('#blue-div-nav').css({ marginTop: '0px' });
        //     $('.white-div').removeClass('sticky-nav');
        // }
    };

    stickyWhiteDiv();
    $(window).scroll(function () {
        stickyWhiteDiv();
    });


    function profilePage() {
        $('li#subscriptions1 a').click(function () {
            // alert('tutufr')
            $('hr').addClass('medium-screen-horizontal');
            // $('hr').removeClass('.order-page-line')
        })

        
            
        
    }

    profilePage()

})

