//functions
function inputCheck(id){
    elem=document.getElementById(id);
    //when password check input was outfocused first
    if(id=="passwordCheckInput" && document.getElementById("passwordInput").value=="" && elem.value==""){
        //do nothing
    }
    //when value is empty
    else if(elem.value==""){
        elem.nextElementSibling.innerHTML=" '"+elem.getAttribute("placeholder")+ "' 을(를) 입력해 주세요.";
    }
    //name restriction
    //userID restriction

    //password restriction
    else if(id.indexOf("asswordInput")>-1 && elem.value.length<8){
        elem.nextElementSibling.innerHTML=" 비밀번호는 8자리 이상으로 입력해주세요.";
    }
    //password check
    else if(id.indexOf("asswordCheckInput")>-1 && elem.value!=document.getElementById(id.substring(0,id.length-10)+"Input").value){
        elem.nextElementSibling.innerHTML=" 비밀번호가 일치하지 않습니다.";
    }
    //reset the error message
    else{
        elem.nextElementSibling.innerHTML="";
    }
};
//check the input: checkbox
function checkboxCheck(id){
    elem=document.getElementById(id);

    if($(".modal_checkbox:not(:checked)").length == 0){
        alert(document.getElementById("modalHeader").innerHTML+" 완료");
        $('#popup_content').load(elem.getAttribute("href"));
        modal.style.display = "block";
    }
    else{
        alert("약관에 모두 동의해주세요");
    };
};

//check the input: textbox
function textInputCheck(id){
    elem=document.getElementById(id);

    var allFilled=true;
    $("modal_inputBox").each(function () {
        if ($(this).val()=="") {
            allFilled=false;
        }
    });

    var validCheck=true;
    $("modal_inputBox + p").each(function () {
        if ($(this).html()!="") {
            validCheck=false;
        }
    });

    if(allFilled && validCheck){
        alert(" '"+document.getElementById("modalHeader").innerHTML+"' 을(를) 완료하였습니다.");
        $('#popup_content').load(elem.getAttribute("href"));
        modal.style.display = "block";
    }
    else if(!allFilled){
        alert("빈칸 없이 입력해주세요.");
    }
    else if(!validCheck){
        alert("다시 한번 확인해주세요")
    }
};