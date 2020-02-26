$(function(){

    $("#confirmBtn:button").click(function(){
        invalidItem();
    });

    function invalidItem(){
        if($("#password input").val()==""){
            alert("현재 비밀번호를 입력해 주세요.");
            $("#password input").focus();
            return;
        };
        if($("#newPW input").val()==""){
            alert("새 비밀번호를 입력해 주세요.");
            $("#newPW input").focus();
            return;
        };
        if($("#password input").val()==$("#newPW input").val()){
            alert("현재 비밀번호와 다른 비밀번호를 입력해 주세요.");
            $("#newPW input").focus();
            return;
        }
        if($("#newPWCheck input").val()==""){
            alert("새 비밀번호를 한번 더 입력해 주세요.");
            $("#newPWCheck input").focus();
            return;
        };
        
        if($("#newPW input").val()!=$("#newPWCheck input").val()){
            alert("암호가 일치하지 않습니다.");
            $("#newPW input").focus();
            return;
        }
        alert("비밀번호 변경이 완료되었습니다.");
        clearInput();
    };
    function clearInput(){
        $("#password input").val("");
        $("#newPW input").val("");
        $("#newPWCheck input").val("");
    }
});