// 오늘의 단어 D-day 이용
function TWD() {
    var now=new Date();
    var startup=new Date();
    startup.setYear(2019);
    startup.setMonth(11-1);
    startup.setDate(15);
    var gap=startup.getTime()-now.getTime();
    var index=Math.abs(Math.floor(gap/(1000*60*60*24)));
    var kanji = document.getElementById("TWD_kanji");
    var yomigana = document.getElementById("TWD_yomigana");
    var korean = document.getElementById("TWD_korean");
    kanji.innerText = kanjiCollection[index];
    yomigana.innerText = yomiganaCollection[index];
    korean.innerText = koreanCollection[index];
}

function TWD_mobile() {
    var now=new Date();
    var startup=new Date();
    startup.setYear(2019);
    startup.setMonth(11-1);
    startup.setDate(15);
    var gap=startup.getTime()-now.getTime();
    var index=Math.abs(Math.floor(gap/(1000*60*60*24)));
    var kanji = document.getElementById("TWD_mobile_kanji");
    var yomigana = document.getElementById("TWD_mobile_yomigana");
    var korean = document.getElementById("TWD_mobile_korean");
    kanji.innerText = kanjiCollection[index];
    yomigana.innerText = yomiganaCollection[index];
    korean.innerText = koreanCollection[index];
}

$(document).ready(function(){
    TWD();
    TWD_mobile();
});