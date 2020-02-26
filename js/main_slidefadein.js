function slidefadein() {
    $(window).scroll(function(){
        $('#MAI_content1_inf').each(function(i){            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'-300px'},3000);
            }            
        });
    }); 
}

$(document).ready(function(){
    if($(window).width() > 767) {
        slidefadein();
    }
});