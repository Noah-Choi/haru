$(document).ready(function(){

    $(".none, .ntwo").css("display", "none")

    $(".one").click(function(){
        $(".none").toggle()
    })

    $(".two").click(function(){
        $(".ntwo").toggle()
    })

    $(".hang1").click(function(){
        $(".firstline").toggle(slow)
    })

})