$(function(){

    $("#registerBtn:button").click(function(){
        invalidItem();
    });

    function invalidItem(){
        if($("#name input").val()==""){
            alert("이름을 입력해 주세요.");
            $("#name input").focus();
            return;
        }
        if($("#username input").val()==""){
            alert("아이디를 입력해 주세요.");
            $("#username input").focus();
            return;
        }
        if($("#nickname input").val()==""){
            alert("별명을 입력해 주세요.");
            $("#nickname input").focus();
            return;
        }
        if($("#email input").val()==""){
            alert("이메일 주소를 입력해 주세요.");
            $("#email input").focus();
            return;
        }
        if($("#password input").val()==""){
            alert("비밀번호를 입력해 주세요.");
            $("#password input").focus();
            return;
        }
        if($("#passwordCheck input").val()==""){
            alert("비밀번호를 다시 한번 입력해 주세요.");
            $("#passwordCheck input").focus();
            return;
        }
        if($("#password input").val()!=$("#passwordCheck input").val()){
            alert("암호가 일치하지 않습니다.");
            $("#password input").focus();
            return;
        }
        alert($("#name input:text").val()+"님 회원가입을 축하합니다.");
        clearInput();
        return;
    }

    function clearInput(){
        $("#name input").val("");
        $("##username input").val("");
        $("#nickname input").val("");
        $("#email input").val("");
        $("#password input").val("");
        $("#passwordCheck input").val("");
    }
    
});