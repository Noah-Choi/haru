$(document).ready(function(){
    
    $(".check1").click(function(){
        $(".main2, .main3").toggle()
    })

    $(".check2").click(function(){
        $(".main1, .main3").toggle()
    })

    $(".check3").click(function(){
        $(".main1, .main2").toggle()
    })

})