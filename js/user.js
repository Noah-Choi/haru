//functions
function isNumber(c) {
    var pattern = /[0-9]/;
    if (pattern.test(c)) {
        return true;
    }
    else {
        return false;
    }
}
function isLowerCase(c) {
    var pattern = /[a-z]/;
    if (pattern.test(c)) {
        return true;
    }
    else {
        return false;
    }
}
function isUpperCase(c) {
    var pattern = /[A-Z]/;
    if (pattern.test(c)) {
        return true;
    }
    else {
        return false;
    }
}
function isSpecial(c) {
    var pattern = /[~!@#$%^&*()_+|<>?:{}]/;
    if (pattern.test(c)) {
        return true;
    }
    else {
        return false;
    }
}
function isKorean(c) {
    var pattern = /[가-힣]/;
    if (pattern.test(c)) {
        return true;
    }
    else {
        return false;
    }
}
function isSpace(c) {
    var pattern = /\s/;
    if (pattern.test(c)) {
        return true;
    }
    else {
        return false;
    }
}
function isEmail(string) {
    var pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]/;
    if (pattern.test(string)) {
        return true;
    }
    else {
        return false;
    }
}
function isValid(string, number, lowerCase, upperCase, special, korean, space) {
    var cnt = 0;
    for (var i = 0; i < string.length; i++) {
        var c = string.charAt(i);
        if (number && isNumber(c)) {
            cnt++;
        }
        if (lowerCase && isLowerCase(c)) {
            cnt++;
        }
        if (upperCase && isUpperCase(c)) {
            cnt++;
        }
        if (special && isSpecial(c)) {
            cnt++;
        }
        if (korean && isKorean(c)) {
            cnt++;
        }
        if (space && isSpace(c)) {
            cnt++;
        }
    }
    if (cnt == string.length) {
        return true;
    }
    else {
        return false;
    }
}
function lengthBetween(string, min, max) {
    if (min == "" && max == "") {
        return true;
    }
    else if (min == "") {
        if (string.length <= max) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (max == "") {
        if (min <= string.length) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        if (min <= string.length && string.length <= max) {
            return true;
        }
        else {
            return false;
        }
    }
}
function clearError(id) {
    document.getElementById(id + "Error").innerHTML = "";
}

//edit info
function editInfoConfirm() {
    var firstError = true;
    //check nickname
    var nickname = document.getElementById("nicknameInput");
    var nicknameError = document.getElementById("nicknameInputError");
    var nicknameValid = isValid(nickname.value, true, true, true, false, true, false) && lengthBetween(nickname.value, 2, 10);
    var nicknameList = ["admin", "user"]
    var isExist = nicknameList.includes(nickname.value);
    if (!nicknameValid) {
        nicknameError.innerHTML = "닉네임은 특수문자와 공백을 제외한 2~10글자로 입력해주세요.";
        if (firstError) {
            nickname.focus();
            firstError = false;
        }
    }
    if (nickname.value.length == 0) {
        nicknameError.innerHTML = "닉네임을 입력해 주세요";
        if (firstError) {
            nickname.focus();
            firstError = false;
        }
    }
    //check email
    var email = document.getElementById("emailInput");
    var emailError = document.getElementById("emailInputError");
    var emailValid = isEmail(email.value);
    if (!emailValid) {
        emailError.innerHTML = "이메일 형식이 올바르지 않습니다.";
        if (firstError) {
            email.focus();
            firstError = false;
        }
    }
    if (isExist) {
        nicknameError.innerHTML = "중복된 닉네임 입니다.";
        if (firstError) {
            nickname.focus();
            firstError = false;
        }
    }
    if (email.value.length == 0) {
        emailError.innerHTML = "이메일을 입력해 주세요";
        if (firstError) {
            email.focus();
            firstError = false;
        }
    }
    //no information has changed
    if(nickname.value=="admin123" && email.value=="admin@email.com"){
        alert("변경된 내용이 없습니다.");
        return;
    }
    //confirm
    if (firstError == true) {
        alert("회원정보 변경이 완료되었습니다.")
    }
}

//signup button
function signupConfirm() {
    var firstError = true;
    //check name
    var name = document.getElementById("nameInput");
    var nameError = document.getElementById("nameInputError");
    var nameValid = isValid(name.value, false, false, false, false, true, false) && lengthBetween(name.value, 2, 5);
    if (!nameValid) {
        nameError.innerHTML = "이름은 2~5글자 한글로 입력해주세요.";
        if (firstError) {
            name.focus();
            firstError = false;
        }
    }
    if (name.value.length == 0) {
        nameError.innerHTML = "이름을 입력해 주세요."
        if (firstError) {
            name.focus();
            firstError = false;
        }
    }
    //check id
    var id = document.getElementById("idInput");
    var idError = document.getElementById("idInputError");
    var idValid = isValid(id.value, true, true, true, false, false, false) && lengthBetween(id.value, 4, 10);
    var idList = ["admin", "user"]
    var isExist = idList.includes(id.value);
    if (!idValid) {
        idError.innerHTML = "아이디는 영어와 숫자만을 혼용하여 공백없이 4~10자로 입력해주세요.";
        if (firstError) {
            id.focus();
            firstError = false;
        }
    }
    if (isExist) {
        idError.innerHTML = "중복된 아이디 입니다.";
        if (firstError) {
            id.focus();
            firstError = false;
        }
    }
    if (id.value.length == 0) {
        idError.innerHTML = "아이디를 입력해 주세요";
        if (firstError) {
            id.focus();
            firstError = false;
        }
    }
    
    //check nickname
    var nickname = document.getElementById("nicknameInput");
    var nicknameError = document.getElementById("nicknameInputError");
    var nicknameValid = isValid(nickname.value, true, true, true, false, true, false) && lengthBetween(nickname.value, 2, 10);
    var nicknameList = ["admin", "user"]
    var isExist = nicknameList.includes(nickname.value);
    if (!nicknameValid) {
        nicknameError.innerHTML = "닉네임은 특수문자와 공백을 제외한 2~10글자로 입력해주세요.";
        if (firstError) {
            nickname.focus();
            firstError = false;
        }
    }
    if (isExist) {
        nicknameError.innerHTML = "중복된 닉네임 입니다.";
        if (firstError) {
            nickname.focus();
            firstError = false;
        }
    }
    if (nickname.value.length == 0) {
        nicknameError.innerHTML = "닉네임을 입력해 주세요";
        if (firstError) {
            nickname.focus();
            firstError = false;
        }
    }
    //check email
    var email = document.getElementById("emailInput");
    var emailError = document.getElementById("emailInputError");
    var emailValid = isEmail(email.value);
    if (!emailValid) {
        emailError.innerHTML = "이메일 형식이 올바르지 않습니다.";
        if (firstError) {
            email.focus();
            firstError = false;
        }
    }
    if (email.value.length == 0) {
        emailError.innerHTML = "이메일을 입력해 주세요";
        if (firstError) {
            email.focus();
            firstError = false;
        }
    }
    //check password
    var password = document.getElementById("passwordInput");
    var passwordError = document.getElementById("passwordInputError");
    var passwordValid = isValid(password.value, true, true) && lengthBetween(password.value, 8, "");
    if (!passwordValid) {
        passwordError.innerHTML = "비밀번호는 공백 없이 8자리 이상으로 입력해 주세요.";
        if (firstError) {
            password.focus();
            firstError = false;
        }
    }
    if (password.value.length == 0) {
        passwordError.innerHTML = "비밀번호를 입력해 주세요";
        if (firstError) {
            password.focus();
            firstError = false;
        }
    }
    //check password check
    var passwordCheck = document.getElementById("passwordCheckInput");
    var passwordCheckError = document.getElementById("passwordCheckInputError");
    var passwordCheckValid = (password.value == passwordCheck.value);
    if (!passwordCheckValid) {
        passwordCheckError.innerHTML = "비밀번호가 일치하지 않습니다.";
        if (firstError) {
            passwordCheck.focus();
            firstError = false;
        }
    }
    if (passwordCheck.value.length == 0) {
        passwordCheckError.innerHTML = "비밀번호를 한번 더 입력해 주세요";
        if (firstError) {
            passwordCheck.focus();
            firstError = false;
        }
    }
    //confirm
    if (firstError == true) {
        alert("회원가입을 축하합니다.");
        $('#popup_content').load("/html/MEM/login.html");
        modal.style.display = "block";
    }
}

//terms button
function termsConfirm() {
    if (document.getElementById("termsOfService").checked == false) {
        alert("하루,단어 이용 약관에 동의하셔야 회원가입을 하실 수 있습니다.");
        document.getElementById("termsOfService").focus();
        return;
    }
    if (document.getElementById("privacyPolicy").checked == false) {
        alert("하루,단어 개인정보 처리방침에 동의하셔야 회원가입을 하실 수 있습니다.");
        document.getElementById("privacyPolicy").focus();
        return;
    }
    //confirm
    $('#popup_content').load("/html/MEM/signup.html");
    modal.style.display = "block";
}

//login button
function loginConfirm(){
    var firstError = true;
    //check id
    var id = document.getElementById("idInput");
    var idError = document.getElementById("idInputError");
    if (id.value.length == 0) {
        idError.innerHTML = "아이디를 입력해 주세요";
        if (firstError) {
            id.focus();
            firstError = false;
        }
    }
    //check password
    var password = document.getElementById("passwordInput");
    var passwordError = document.getElementById("passwordInputError");
    if (password.value.length == 0) {
        passwordError.innerHTML = "비밀번호를 입력해 주세요";
        if (firstError) {
            password.focus();
            firstError = false;
        }
    }
    //check if id and password are valid
    var idList = ["admin", "user"]
    var pwList = ["adminpassword","userpassword"]
    var loginConfirm=false;
    
    if(idList.includes(id.value)&&pwList.includes(password.value)){
        if(idList.indexOf(id.value)==pwList.indexOf(password.value)){
            loginConfirm=true;
        };
    };
    //confirm
    if (firstError == true && loginConfirm) {
        window.location.href = "/index.html";
    }
    else if(firstError == true){
        alert("가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.");
    }
}

//find id button
function forgotIdConfirm(){
    var firstError = true;
    //check name
    var name = document.getElementById("nameInput");
    var nameError = document.getElementById("nameInputError");
    var nameList = ["장세진","정현우"]
    //var isExist = nameList.includes(name.value);
    // if (!isExist) {
    //     nameError.innerHTML = "존재하지 않는 이름입니다.";
    //     if (firstError) {
    //         name.focus();
    //         firstError = false;
    //     }
    // }
    if (name.value.length == 0) {
        nameError.innerHTML = "이름을 입력해 주세요."
        if (firstError) {
            name.focus();
            firstError = false;
        }
    }
    //check email
    var email = document.getElementById("emailInput");
    var emailError = document.getElementById("emailInputError");
    var emailValid = isEmail(email.value);
    var emailList = ["sae0817@naver.com","jhw123@naver.com"]
    var isExist = emailList.includes(email.value);
    
    // if (!isExist) {
    //     emailError.innerHTML = "존재하지 않는 이메일 입니다";
    //     if (firstError) {
    //         email.focus();
    //         firstError = false;
    //     }
    // }
    if (!emailValid) {
        emailError.innerHTML = "이메일 형식이 올바르지 않습니다.";
        if (firstError) {
            email.focus();
            firstError = false;
        }
    }
    if (email.value.length == 0) {
        emailError.innerHTML = "이메일을 입력해 주세요";
        if (firstError) {
            email.focus();
            firstError = false;
        }
    }
    //check if name and email are valid
    var findIdConfirm=false;
    if(nameList.includes(name.value)){
        if(nameList.indexOf(name.value)==emailList.indexOf(email.value)){
            findIdConfirm=true;
        };
    };

    //id database
    var idList = ["admin", "user"]
    //confirm
    if (firstError == true && findIdConfirm) {
        alert("고객님의 아이디는 '" + idList[nameList.indexOf(name.value)] + "' 입니다.");
        $('#popup_content').load("/html/MEM/login.html");
        modal.style.display = "block";
    }
    else if (firstError == true) {
        alert("입력하신 정보를 찾을 수 없습니다.")
    }
}

//find password button
function forgotPwConfirm(){
    var firstError = true;
    //check name
    var name = document.getElementById("nameInput");
    var nameError = document.getElementById("nameInputError");
    var nameList = ["장세진","정현우"]
    //var isExist = nameList.includes(name.value);
    // if (!isExist) {
    //     nameError.innerHTML = "존재하지 않는 이름입니다.";
    //     if (firstError) {
    //         name.focus();
    //         firstError = false;
    //     }
    // }
    if (name.value.length == 0) {
        nameError.innerHTML = "이름을 입력해 주세요."
        if (firstError) {
            name.focus();
            firstError = false;
        }
    }
    //check id
    var id = document.getElementById("idInput");
    var idError = document.getElementById("idInputError");
    var idList = ["admin", "user"]
    var isExist = idList.includes(id.value);
    
    // if (!isExist) {
    //     idError.innerHTML = "존재하지 않는 아이디 입니다";
    //     if (firstError) {
    //         id.focus();
    //         firstError = false;
    //     }
    // }
    if (id.value.length == 0) {
        idError.innerHTML = "아이디를 입력해 주세요";
        if (firstError) {
            id.focus();
            firstError = false;
        }
    }
    //check email
    var email = document.getElementById("emailInput");
    var emailError = document.getElementById("emailInputError");
    var emailValid = isEmail(email.value);
    var emailList = ["sae0817@naver.com","jhw123@naver.com"]
    var isExist = emailList.includes(email.value);
    
    // if (!isExist) {
    //     emailError.innerHTML = "존재하지 않는 이메일 입니다";
    //     if (firstError) {
    //         email.focus();
    //         firstError = false;
    //     }
    // }
    if (!emailValid) {
        emailError.innerHTML = "이메일 형식이 올바르지 않습니다.";
        if (firstError) {
            email.focus();
            firstError = false;
        }
    }
    if (email.value.length == 0) {
        emailError.innerHTML = "이메일을 입력해 주세요";
        if (firstError) {
            email.focus();
            firstError = false;
        }
    }
    //check if name and id and email are valid
    var findPwConfirm=false;
    if(nameList.includes(name.value)){
        if(nameList.indexOf(name.value)==idList.indexOf(id.value)&&idList.indexOf(id.value)==emailList.indexOf(email.value)){
            findPwConfirm=true;
        };
    };

    //confirm
    if (firstError == true && findPwConfirm) {
        alert("고객님의 임시 비밀번호를 이메일로 보내드렸습니다.");
        $('#popup_content').load("/html/MEM/login.html");
        modal.style.display = "block";
    }
    else if (firstError == true) {
        alert("입력하신 정보를 찾을 수 없습니다.")
    }
    else{

    }
}

//check password button
function checkPwConfirm(){
    var firstError = true;
    //check password
    var password = document.getElementById("passwordInput");
    var passwordError = document.getElementById("passwordInputError");
    if (password.value.length == 0) {
        passwordError.innerHTML = "비밀번호를 입력해 주세요";
        if (firstError) {
            password.focus();
            firstError = false;
        }
    }
    //check if password is valid
    var pwList = ["adminpassword","userpassword"]
    var loginConfirm=false;
    if(pwList.includes(password.value)){
        //if(idList.indexOf(id.value)==pwList.indexOf(password.value)){
            loginConfirm=true;
        //};
    };

    //confirm
    if (firstError == true && loginConfirm) {
        window.location.href = "/html/MYP/editInfo.html";
    }
    else if(firstError == true){
        alert("비밀번호가 일치하지 않습니다.");
    }
}


//change password button
function changePwConfirm(){
    var firstError = true;
    //old check password
    var oldPassword = document.getElementById("oldPasswordInput");
    var oldPasswordError = document.getElementById("oldPasswordInputError");
    if (oldPassword.value.length == 0) {
        oldPasswordError.innerHTML = "현재 비밀번호를 입력해 주세요";
        if (firstError) {
            oldPassword.focus();
            firstError = false;
        }
    }
    //check if password is valid
    var pwList = ["adminpassword","userpassword"]
    var passwordConfirm=false;
    if(pwList.includes(oldPassword.value)){
        //if(idList.indexOf(id.value)==pwList.indexOf(password.value)){
            passwordConfirm=true;
        //};
    };
    //new check password
    var newPassword = document.getElementById("newPasswordInput");
    var newPasswordError = document.getElementById("newPasswordInputError");
    var newPasswordValid = isValid(newPassword.value, true, true, true, true, false, false) && lengthBetween(newPassword.value, 8, "");
    if (oldPassword.value == newPassword.value) {
        newPasswordError.innerHTML = "현재 비밀번호와 새 비밀번호를 다르게 입력해주세요.";
        if (firstError) {
            newPassword.focus();
            firstError = false;
        }
    }
    if (!newPasswordValid) {
        newPasswordError.innerHTML = "비밀번호는 공백 없이 8자리 이상으로 입력해 주세요.";
        if (firstError) {
            newPassword.focus();
            firstError = false;
        }
    }
    if (newPassword.value.length == 0) {
        newPasswordError.innerHTML = "새 비밀번호를 입력해 주세요";
        if (firstError) {
            newPassword.focus();
            firstError = false;
        }
    }
    //check password check
    var newPasswordCheck = document.getElementById("newPasswordCheckInput");
    var newPasswordCheckError = document.getElementById("newPasswordCheckInputError");
    var newPasswordCheckValid = (newPassword.value == newPasswordCheck.value);
    if (!newPasswordCheckValid) {
        newPasswordCheckError.innerHTML = "비밀번호가 일치하지 않습니다.";
        if (firstError) {
            newPasswordCheck.focus();
            firstError = false;
        }
    }
    if (newPasswordCheck.value.length == 0) {
        newPasswordCheckError.innerHTML = "새 비밀번호 확인을 입력해 주세요";
        if (firstError) {
            newPasswordCheck.focus();
            firstError = false;
        }
    }
    //confirm
    if (firstError == true && passwordConfirm) {
        alert("비밀번호 변경이 완료되었습니다.");
        window.location.href = "/html/MYP/editInfo.html";
    }
    else if(firstError == true){
        alert("현재 비밀번호가 일치하지 않습니다.");
    }
}

//delete account button
function deleteAccountConfirm(){
    var firstError = true;
    //check password
    var password = document.getElementById("passwordInput");
    var passwordError = document.getElementById("passwordInputError");
    if (password.value.length == 0) {
        passwordError.innerHTML = "비밀번호를 입력해 주세요";
        if (firstError) {
            password.focus();
            firstError = false;
        }
    }    

    //check if id and password are valid
    var pwList = ["adminpassword","userpassword"]
    var loginConfirm=false;
    if(pwList.includes(password.value)){
        //if(idList.indexOf(id.value)==pwList.indexOf(password.value)){
            loginConfirm=true;
        //};
    };

    //confirm
    if (firstError == true && loginConfirm) {
        alert("회원탈퇴가 완료되었습니다.");
        window.location.href = "/index.html";
    }
    else if(firstError == true){
        alert("비밀번호가 일치하지 않습니다.");
    }
}