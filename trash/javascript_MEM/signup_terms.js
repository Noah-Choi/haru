$(function(){

    $("#nextBtn").click(function(){
        invalidItem();
    });

    function invalidItem(){
        if($("input[id='termsOfService']").prop("checked")==false){
            alert("서비스 이용약관에 동의하셔아만 회원가입을 할 수 있습니다.");
            $("input[id='termsOfService']").focus();
            return;
        }
        if($("input[id='privacyPolicy']").prop("checked")==false){
            alert("개인정보 처리방침에 동의하셔야만 회원가입을 할 수 있습니다.");
            $("input[id='privacyPolicy']").focus();
            return;
        }
    }
    
});