$(function(){
    $('#haru_LRN').mouseenter(function(){        
        $('#haru_LRN').css({"background":"#444", "transition-duration":"0.3s"});
        $('#haru_LRN_dropdown').stop().slideDown();
    });
    $('.dropLRN a').mouseenter(function(){
        $('#haru_LRN').css({"background":"#666"});
        $('#haru_LRN_dropdown').stop().slideDown();
    });
    $('.dropLRN').mouseout(function(){
        $('#haru_LRN').css({"background":"#AF8672","transition-duration":"0.3s"});
        $('#haru_LRN_dropdown').stop().slideUp();
    });
    
    $('#haru_COM').mouseenter(function(){        
        $('#haru_COM').css({"background":"#444", "transition-duration":"0.3s"});
        $('#haru_COM_dropdown').stop().slideDown();
    });
    $('.dropCOM a').mouseenter(function(){
        $('#haru_COM').css({"background":"#666"});
        $('#haru_COM_dropdown').stop().slideDown();
    });
    $('.dropCOM').mouseout(function(){
        $('#haru_COM').css({"background":"#AF8672","transition-duration":"0.3s"});
        $('#haru_COM_dropdown').stop().slideUp();
    });


    $('#haru_MYP').mouseenter(function(){        
        $('#haru_MYP').css({"background":"#444", "transition-duration":"0.3s"});
        $('#haru_NYP_dropdown').stop().slideDown();
    });
    $('.dropMYP a').mouseenter(function(){
        $('#haru_MYP').css({"background":"#666"});
        $('#haru_MYP_dropdown').stop().slideDown();
    });
    $('.dropMYP').mouseout(function(){
        $('#haru_MYP').css({"background":"#AF8672","transition-duration":"0.3s"});
        $('#haru_MYP_dropdown').stop().slideUp();
    });


    $('#haru_INF').mouseenter(function(){        
        $('#haru_INF').css({"background":"#444", "transition-duration":"0.3s"});
        $('#haru_INF_dropdown').stop().slideDown();
    });
    $('.dropINF a').mouseenter(function(){
        $('#haru_INF').css({"background":"#666"});
        $('#haru_INF_dropdown').stop().slideDown();
    });
    $('.dropINF').mouseout(function(){
        $('#haru_INF').css({"background":"#AF8672","transition-duration":"0.3s"});
        $('#haru_INF_dropdown').stop().slideUp();
    });
    $(".sidemenuon").click(function () {
        // $('#haru_header_upper').css({"background-image":"url(../../img/sidemenu.png)","transition-duration":"1s"});
        // $('#haru_title').css({"color":"white","transition-duration":"0.4s"});
        $('.header_upper_index').css({"background-image":"url(../../img/sidemenu.png)","transition-duration":"0.5s"});
        $('.sidemenuon').css({"display":"none"});
        $('.sidemenuoff').css({"display":"block"});
        $("#haru_sidemenu").show("slide", { direction: "right" }, 200);
    });
    $(".sidemenuoff").click(function () {
        // $('#haru_header_upper').css({"background":"#EBE4DD","transition-duration":"0.4s"});
        // $('#haru_title').css({"color":"#AF8672","transition-duration":"0.4s"});
        $('.header_upper_index').css({"background-image":"none","transition-duration":"0.5s"});
        $('.sidemenuoff').css({"display":"none"});
        $('.sidemenuon').css({"display":"block"});
        $("#haru_sidemenu").hide("slide", { direction: "right" }, 200);
    });

    $(window).resize(function() {
        if($(window).width() > 767) {
            $("#haru_sidemenu").hide();
            $('.header_upper_index').css({"background-image":"none","transition-duration":"0.5s"});
            $('.sidemenuoff').css({"display":"none"});
            $('.sidemenuon').css({"display":"block"});
            // $("#haru_sidemenu").hide("slide", { direction: "right" }, 200);
        }
    });

    $('header').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
});
// 사이드바 표시시 헤더 스크롤막기
// function preventscroll() {
//     $('header').on('scroll touchmove mousewheel', function(event) {
//         event.preventDefault();
//         event.stopPropagation();
//         return false;
//       });
// }