/*Psalms 37. 1 | Do not fret because of evil men or be envious of those who do wrong*/
$(document).ready(function () {

    $('.menu').click(function() {
        $('.overlay').toggleClass('anim');
        $(this).addClass('open')
    });

    $('.open').click(function(){
        $('.overlay').toggleClass('reverse-animation');
    })
});
$(document).ready(setTimeout(function () {
    $('.loader').addClass('hidden');
    $('header').removeClass('hidden');
    $('main').removeClass('hidden');
}, 5000))
