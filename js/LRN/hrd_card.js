// 3단카드 뒤집기
function fadeInOut(){
    var showImg = $('#LRN_HRD_card div:eq(0)');
    var nextImg = $('#LRN_HRD_card div:eq(1)');
    nextImg.addClass('card_active');
    nextImg.css('opacity','0').animate({'opacity':'1'},100,function(){
        $('#LRN_HRD_card').append(showImg);
        showImg.removeClass('card_active');
    });
}

// 학습시간표시
var connected = new Date();
function HRDtimer(){
    var current = new Date();
    var elapsed = ((current - connected)/1000);
    var Hresult = Math.floor(elapsed/3600);
    var Mresult = Math.floor((elapsed%3600)/60);
    var Sresult = Math.floor(elapsed%60);
    var divClock = document.getElementById("HRD_timer");
    if (Hresult<10) { Hresult="0"+Hresult; }
    if (Mresult<10) { Mresult="0"+Mresult; }
    if (Sresult<10) { Sresult="0"+Sresult; }
    divClock.innerText = Hresult+" : "+Mresult+" : "+Sresult;      
    setTimeout(HRDtimer,1000);    
}

// 카드에 내용표시
function wordoutput() {
    var number = Math.floor(Math.random() * 50 + 0);   
    console.log(number);
    var kanji = document.getElementById("HRD_card1");
    var yomigana = document.getElementById("HRD_card2");
    var korean = document.getElementById("HRD_card3");
    kanji.innerText = kanjiCollection[number];
    yomigana.innerText = yomiganaCollection[number];
    korean.innerText = koreanCollection[number];
}


// 모르는단어 list에 추가
var c=1;
function dknowlistoutput() {
    var kanji = $("#LRN_HRD_card1").text();
    var yomigana = $("#LRN_HRD_card2").text();
    var korean = $("#LRN_HRD_card3").text();
    var check = $("#LRN_HRD_dknowlist > tr:last-child > td:nth-child(2)").text();
    if (kanji!==check) {
    var dknowlist = document.getElementById('LRN_HRD_dknowlist');
    var add = dknowlist.insertRow( dknowlist.rows.length );
    var countercell = add.insertCell(0);
    var kanjicell = add.insertCell(1);
    var yomiganacell = add.insertCell(2);
    var koreancell = add.insertCell(3);
    var timecell = add.insertCell(4);
    var chkboxcell = add.insertCell(5);
    countercell.innerHTML = c;
    kanjicell.innerHTML = kanji;
    yomiganacell.innerHTML = yomigana;
    koreancell.innerHTML = korean;
    timecell.innerHTML = new Date().toLocaleTimeString();
    chkboxcell.innerHTML = "삭제";
    countercell.className = "counter_tr"
    timecell.className = "time_tr"
    chkboxcell.className = "delete_tr";
    chkboxcell.id="td"+c;
    add.id = "tr"+c;    
    c++;
    delWordKJH();
    }
    if (kanji==check) { alert("이미 추가되었습니다."); }
}

// 최근 순 1개 모르는단어 항목삭제
// function dknowlistdelete() {
//     var deletecell = document.getElementById('LRN_HRD_dknowlist');
//     if (deletecell.rows.length < 1) return;
//     deletecell.deleteRow( deletecell.rows.length-1 );
// }


// 모르는단어 전체삭제
function dknowlistdelete() {
    $('#LRN_HRD_dknowlist tr').remove();
}

// 모르는단어 선택삭제
function delWordKJH(){    
    $('.delete_tr').unbind();
    $('.delete_tr').bind("click", function(){
        var cfdelete = confirm("해당 단어를 삭제하시겠습니까?")
        if (cfdelete) {      
        var listline = $(this).closest('tr');
        listline.css("background-color","#E7C9A7");
        listline.fadeOut(400, function(){
            listline.remove();
        });
        return false;
        }
        else { return false; }
    });   
}


$(document).ready(function(){
    HRDtimer();
    wordoutput();
    // 모르는단어 숨기기보이기
    $('#LRN_HRD_dknow_title').click(function(){
        $('#LRN_HRD_dknow_table_wrap').slideToggle();
    });
});