$(function() {
    if($(window).width() < 768) {
        $('.front').click(function(){
            $(this).css('display','none');
            $(this).next().css('display','block');
        });
    
        $('.back').click(function(){
            $(this).css('display','none');
            $(this).prev().css('display','block');
        });  
    }
});

$(window).resize(function() {
    if($(window).width() < 768) {
        $('.front').click(function(){
            $(this).css('display','none');
            $(this).next().css('display','block');
        });
    
        $('.back').click(function(){
            $(this).css('display','none');
            $(this).prev().css('display','block');
        });  
    }
});

$(function() {
    if($(window).width() > 768) {
        $('.front').click(function(){
            $(this).css('display','block');
            $(this).next().css('display','block');
        });
    
        $('.back').click(function(){
            $(this).css('display','block');
            $(this).prev().css('display','block');
        });  
    }
});

$(window).resize(function() {
    if($(window).width() > 768) {
        $('.front').click(function(){
            $(this).css('display','block');
            $(this).next().css('display','block');
        });
    
        $('.back').click(function(){
            $(this).css('display','block');
            $(this).prev().css('display','block');
        });  
    }
});