var timer;
var examMode;
var lanMode;        //0이면 문제가 일본어 1이면 한국어
var resultList;

$(function(){

    //검정결과 조회
    getResult();   
    
    //header 셋팅
    setHeader();
    
    //content 셋팅
    getContent();

    //저장하기 버튼 클릭시
    saveBtnClick()
});

function getResult()
{
    //검정결과를 exam.html에서 넘겨받음
    examMode = localStorage.getItem("mode");

    if(3 == examMode || 4 == examMode)
        lanMode = 1;
    else
        lanMode = 0;

    //일반검정이면
    if(2 == examMode || 4 == examMode)
        timer = localStorage.getItem("timer");
    else
    {
        //시간 및 저장하기 버튼 숨기기
        $('.timer').hide();
        $('.saveBtn').hide();
    }

    let output = localStorage.getItem("resultList");		
    resultList = JSON.parse(output);
}

function setHeader()
{
    let count = 0;
    $.each(resultList, function(index, value)
    {
        if(true == value.ox)
            count++;
    });

    $("#allCount").text(resultList.length);
    $("#correctCount").text(count);
    $(".timer").text("경과 시간 : " + timer);
}

function getContent()
{
    $.each(resultList, function(index, value)
    {
        let percentage = value.percentage;
        let furagana = value.example2[lanMode];
        let hilagana = value.example[lanMode];
        let select1 = value.select1[lanMode];
        let select2 = value.select2[lanMode];
        let select3 = value.select3[lanMode];
        let select4 = value.select4[lanMode];
        let click = value.click;
        let answer = value.answer;
        
        let str = '\
        \
        <div class="content"> \
            <div class="text2 correctPercent ' + PersentColor(percentage) + '">(정답률 : ' + percentage + '%)</div> \
            <div class="questionBox"> \
                <div class="Furagana ' + getFuraganaFontSize(hilagana) + '">' + getFuragana(furagana, hilagana) + '</div> \
                <div class="hilagana ' + getHilaganaFontSize(hilagana) + '">' + hilagana + '</div> \
            </div> \
            \
            <div class="example"> \
                <div class="exampleBox ' + getExamFontSize(select1) + " " + getAnswerWhether(0, answer) + '">' + select1 + getCheckWhether(0, click) + '</div> \
                <div class="exampleBox ' + getExamFontSize(select2) + " " + getAnswerWhether(1, answer) + '">' + select2 + getCheckWhether(1, click) + '</div> \
                <div class="exampleBox ' + getExamFontSize(select3) + " " + getAnswerWhether(2, answer) + '">' + select3 + getCheckWhether(2, click) + '</div> \
                <div class="exampleBox ' + getExamFontSize(select4) + " " + getAnswerWhether(3, answer) + '">' + select4 + getCheckWhether(3, click) + '</div> \
            </div> \
        </div>';

        $("#section").append(str);
    });
}

function saveBtnClick()
{
    //저장버튼은 한번만 클릭가능
    $("#footer > .saveBtn").one("click", function(){
        alert("저장완료");
    });
}


function PersentColor(persent)
{
    if(50 <= persent)
        return "greenText";
    else
        return "redText";
}

function getFuragana(Furagana, hilagana)
{
    if(Furagana == hilagana)    
        return "";
    else
        return Furagana;
}

function getFuraganaFontSize(hilagana)
{
    let hilaganaLen = hilagana.length;

    if(10 < hilaganaLen)
        return "largeText-2";
    else if(7 < hilaganaLen)
        return "largeText-1";
    else if(5 < hilaganaLen)
        return "largeText";
    else if(4 < hilaganaLen)
        return "largeText1";
    else
        return "largeText1";
}

function getHilaganaFontSize(hilagana)
{
    let hilaganaLen = hilagana.length;

    if(10 < hilaganaLen)
        return "largeText";
    else if(7 < hilaganaLen)
        return "largeText1";
    else if(5 < hilaganaLen)
        return "largeText2";
    else if(4 < hilaganaLen)
        return "largeText3";
    else
        return "largeText4";
}

function getCheckWhether(showNum, clickNum)
{
    let checkImage = "<div class='checkDisplay'>v</div>"
    if(showNum == clickNum)
        return checkImage;
    else
        return "";
}

function getAnswerWhether(showNum, answer)
{
    if(showNum == answer)
        return "redBorder";
    else
        return "";
}

function getExamFontSize(exampleNum)
{
    exampleLen = exampleNum.length;

    if(8 < exampleLen)
        return "largeText-3";
    else if(5 < exampleLen)
        return "largeText";
    else
        return "largeText1";
}