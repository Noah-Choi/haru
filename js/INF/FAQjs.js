$(function(){
    $('.cost').css('display','none');
    $('#FAQ_wrap .faq').bind('click',function(){
        $(this).children().slideToggle();
        return false;
    });
});