$(function(){

    $("#confirmBtn:button").click(function(){
        invalidItem();
    });

    function invalidItem(){
        if($("#password input").val()==""){
            alert("비밀번호를 입력해 주세요.");
            $("#password input").focus();
            return;
        };
    };
});