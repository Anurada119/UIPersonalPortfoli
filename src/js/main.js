var load_screen = document.getElementById("spinn-wrapper")
window.addEventListener('load', function() {
    setInterval(function() {
        load_screen.style.display = 'none';
    }, 900)

});


$(document).ready(function() {
    $('.js-menu-icon').on('click', function() {
        $('.side-nav-container').addClass('side-nav-container-show');
        $('.side-nav').addClass('side-nav-show');
    });

    $('.js-close-nav').on('click', function() {
        $('.side-nav-container').removeClass('side-nav-container-show');
        $('.side-nav').removeClass('side-nav-show');
    })

    $('.shots-wrappers').each(function(i) {
        setTimeout(function() {
            $('.shots-wrappers').eq(i).addClass('is-visible');
        }, 300 * i);
    })

    $('.js-user-icon').on('click', function() {
        $('.side-profile-container').addClass('side-profile-container-show');
        $('.side-profile').addClass('side-profile-show');
    });

    $('.js-close-profile').on('click', function() {
        $('.side-profile-container').removeClass('side-profile-container-show');
        $('.side-profile').removeClass('side-profile-show');
    })


})