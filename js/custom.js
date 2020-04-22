$(document).ready(function () {

    var offsetBlueDiv = $('#blue-div-nav').offset().top;

    var stickyWhiteDiv = function () {
        var scrollTop = $(window).scrollTop(); 

      
        if (scrollTop > offsetBlueDiv) {
            $('.hide-and-show').css({ display: "block" });
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


    function border() {
        // alert('fdbg')
        // $('#past-events').click(function() {
        //     alert('fdbg')
        // })
        // find('hr').addClass('borderBottom')
        // var tabActive = $('li a.active');

        if ($('div#pasts').is('.active')) {
            // if ($('tab-pane').is('.active')) {
                // $(this).children('hr').css({display: none})
            // }
            // alert('fdbg')
        }
    }

    border()

})

