$(function () {

    $('h1').hover(function () {
        $(this).toggleClass('heartbeat');
    });

    $('.hiddenMenuSelect').on('click', function (event) {
        event.preventDefault();
        $('.mobileMenuDropdown').toggleClass('mobileMenuClicked').toggleClass('slide-in-top');
        $(this).toggleClass('fa-rotate-90')
    })

    $('.leftMenuButton').on('click', function (event) {
        event.preventDefault();
        $('.leftMenuOpen').toggleClass('leftMenuClicked');
    })

    $('.skillContainer').hover(function () {
        $(this).toggleClass('vibrate-1');
    })

})