$.urlParam = function (name) {
    let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    else {
        return results[1] || 0;
    }
}

$(function () {
    let page = $.urlParam('page') - 1;
    if (page == -1) {
        page = 0;
    }

    $('#header_com').load("../haru_header.html");
    $('#aside_com').load("./navCOM.html");
    $('#footer_com').load('../haru_footer.html');
    $('.pagination_number').children('li').eq(page).css('font-weight', 'bold');
    // $('.article_contents').text(articleData.content)
})

function deleteArticle() {
    let con = confirm("삭제 하시겠습니까?");
    let admin = false;
    if (con) {
        // 게시글 삭제 기능 추가
        // //게시글 삭제
        // 관리자 권한 확인
        if(!admin){
            alert("삭제 권한이 없습니다.");
        }else{
            location.href = "./notice.html"
        }
        // //관리자 권한 확인
    }
}
function editArticle() {
    let admin = false;
    // 관리자 권한 확인
    if (!admin) {
        alert("수정 권한이 없습니다.");
    } else {
        location.href = "./noticeu.html"
    }
    // //관리자 권한 확인
}
function moveList() {
    location.href = "./notice.html"
}