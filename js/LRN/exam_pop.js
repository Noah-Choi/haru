// 1: 히라가나 연습검정 // 2: 히라가나 일반검정
// 3: 한글 연습검정     // 4: 한글 일반검정
var examMode;           
var questionList = [];       //문제 보관 변수
var wordList = [];           //단어 모음
var questionCount = 10;       //전체 문제 수
var nowQuestion = 0;        //현재 문제 번호
var timeDelay = 1200;       
var min = 0;
var sec = 0;
var timerID;                //일반검정일 경우 타이머의 ID
var lanMode = 0;            //0이면 문제가 일본어 1이면 한국어
var nowCount = 0;

var strClass = "<div class='checkDisplay'>v</div>"

//Swiper관련 변수
var animateSpeed = 400;
var bodyBorderWidth = 740;
var bodyBorderHeight = 690;
var bodyBorderGap = 10;
var minRange = 100;

// 0: pc, 1: Moblie
var version = 0;


$(function(){

    examMode = getMode();

    //언어 설정
    setLanMode();

    //모바일인지 PC인지 체크
    moblieVerCheck();

    //드래그 방지
    $("body").addClass("no-drag");

    //문제 만들기
    makeQuestion();

    //일반검정일 경우
    if(2 == examMode || 4 == examMode)
    {
        //타이머 작동 및 SHOW
        timerID = startTimer();
        $(".timer").css("visibility", "visible");

        //왼쪽 오른쪽 화살표 보이도록 변경
        $(".leftBtn ").css("display","block");
        $(".rightBtn").css("display","block");

        //왼쪽 오른쪽 화살표 클릭시
        btnClick();

        //제출 하기 버튼 표시
        $(".finishExam").css("display", "block");
    }

    //키보드 연결
    keyEvent();

    //모바일용 터치이용 함수
    touchEvent();
});

function moblieVerCheck()
{
    let width = $(window).width();
    let height = $(window).height();
    if(0 <= width && width <= 414)
        version = 1;
}

function mobileVer()
{
    let width = $(window).width();
    let height = $(window).height();

    height -= 15;
    let widthPersent = width * 0.01;
    let heightPersent = height * 0.01;

    //모바일이면
    if(1 == version)
    {
        bodyBorderWidth = width;
        bodyBorderGap = 0;

        $("#cover").css({"width": width + "px", "height": height + "px"});
        $("#cover > .wrap").css({"width": (width * questionCount) + "px", "height": height + "px"});
        $("#cover > .wrap > .bodyborder").css({"width": (width - 26) + "px", "height": (heightPersent * 96) + "px"});

        $(".questionBox").css({"width": (widthPersent * 75) + "px", "height": (heightPersent * 25) + "px"});
        $(".speaker").css({"top": (heightPersent * 1) + "px", "left": (widthPersent * 68) + "px"});

        $(".example").css({"width": (widthPersent * 96) + "px", "height": (heightPersent * 45) + "px"});
        $(".exampleBox").css({"width": (widthPersent * 35) + "px", "height": (heightPersent * 12) + "px"});
    }
}

function setHtmlCode()
{
    $(".wrap").html("");

    $("#cover").css({"width": bodyBorderWidth + "px", "height": bodyBorderHeight + "px"});
    $("#cover > .wrap").css({"width": ((bodyBorderWidth + bodyBorderGap) * questionCount) + "px", "height": bodyBorderHeight + "px"});
    $("#cover > .wrap > .bodyborder").css({"width": bodyBorderWidth + "px", "height": bodyBorderHeight + "px"});

    $.each(questionList, function(index, value)
    {
        let percentage = value.percentage;
        let furagana = value.example2[lanMode];
        let hilagana = value.example[lanMode];
        let select1 = value.select1[lanMode];
        let select2 = value.select2[lanMode];
        let select3 = value.select3[lanMode];
        let select4 = value.select4[lanMode];

        let str = '\
        <div class="bodyborder left"> \
            <div class="finishExam">제출 하기</div> \
            <div class="text2 correctPercent ' + PersentColor(percentage) + '">(정답률 : ' + percentage + '%)</div> \
            <div class="text3 timer">경과 시간 : <span class="min">00</span> : <span class="sec">00</span></div> \
            <div class="largeText1 questionNumber"> <span class="nowQuestion">' + ++nowCount + getShowAllCount() +'</span> </div> \
            <div class="questionBox"> \
                <div class="Furagana ' + getFuraganaFontSize(hilagana) + '">' + getFuragana(furagana, hilagana) + '</div> \
                <div class="hilagana ' + getHilaganaFontSize(hilagana) + '">' + hilagana + '</div> \
                \
                    <img src="../../img/speaker.png" alt="음성출력" class="speaker" title="음성출력"> \
                \
            </div> \
            <div class="moveBtn">\
                ' + showLeftBtn(nowCount - 1) + '\
                ' + showRightBtn(nowCount - 1) + '\
            </div>\
            <div class="example"> \
                <div class="exampleBox ' + getExamFontSize(select1) + '">' + select1 + '</div> \
                <div class="exampleBox ' + getExamFontSize(select2) + '">' + select2 + '</div> \
                <div class="exampleBox ' + getExamFontSize(select3) + '">' + select3 + '</div> \
                <div class="exampleBox ' + getExamFontSize(select4) + '">' + select4 + '</div> \
            </div> \
        </div>';

        $(".wrap").append(str);
    });

    //모바일 버전이면 전체 크기 변경
    mobileVer();

    //보기중 하나를 선택했을 경우
    selectExample();

    //TTS(음성출력) 이벤트
    clickSpeaker()

    //제출하기 버튼 클릭 시
    clickFinishBtn();

    nowCount--;
}

function getShowAllCount()
{
    //일반검정일때
    if(2 == examMode || 4 == examMode)
        return '/ <span class="allQuestion">' + questionCount + '</span>'
    else
        return "";
}

function showLeftBtn(index)
{
    //Moblie이면 화살표 표시안함
    if(1 == version)
        return "";

    if(0 != index)
        return '<div class="leftBtn">◀</div>';
    else
        return "";
}

function showRightBtn(index)
{
    //Moblie이면 화살표 표시안함
    if(1 == version)
        return "";

    if(index < questionCount - 1)
        return '<div class="rightBtn">▶</div>';
    else
        return "";
}

function PersentColor(persent)
{
    if(50 <= persent)
        return "greenText";
    else
        return "redText";
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

function getFuragana(Furagana, hilagana)
{
    if(Furagana == hilagana)    
        return "";
    else
        return Furagana;
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

function clickSpeaker()
{
    $(".speaker").on("click", function()
    {
        //작업 중 클릭시 리턴
        if("block" == $(".ox").css("display"))
            return;

        let text = $(this).siblings(".Furagana").text();
        if("" == text)
            text = $(this).siblings(".hilagana").text();

        startTTS(text);
    });
}

//TTS(음성출력) 함수
function startTTS(text)
{
    let message = new SpeechSynthesisUtterance(text);
    let voices = speechSynthesis.getVoices();

    message["volume"] = "1";        //사운드 크기
    message["rate"] = "1";          //말 속도
    message["pitch"] = "1";

    if(0 == lanMode)
        message.voice = voices["13"];       //일어
    else
        message.voice = voices["0"];        //한국어

    speechSynthesis.speak(message);
}

//모바일용 터치이용 함수
function touchEvent()
{
    //일반검정일때
    if(2 == examMode || 4 == examMode)
    {
        let startCoords = {}, endCoords = {};
        $(document.body).bind("touchstart", function(event) 
        {
            startCoords = endCoords = event.originalEvent.targetTouches[0];
        });
    
        $(document.body).bind("touchmove", function(event) 
        {
            endCoords = event.originalEvent.targetTouches[0];
           
            let X = startCoords.pageX - endCoords.pageX;
            let Marginleft = (bodyBorderWidth + bodyBorderGap) * nowQuestion + X;
    
            if(0 < Marginleft && Marginleft < ((bodyBorderWidth + bodyBorderGap) * (questionCount - 1)))
                $("#cover > .wrap").css("margin-left", -Marginleft);
        });
    
        $(document.body).bind("touchend", function(event) 
        {
            let X = startCoords.pageX - endCoords.pageX;
            if(minRange < X)
                rightMove();
            else if(X < -minRange)
                leftMove();
            else
            {
                let Marginleft = (bodyBorderWidth + bodyBorderGap) * nowQuestion;
                $("#cover > .wrap").stop().animate({marginLeft : -Marginleft}, animateSpeed - 100);
            }
        });
    }
}

function resultExam()
{
    let resultList = questionList.slice();
    let removeList = [];

    $.each(resultList, function(index, value)
    {
        if(-1 == value.click)
            removeList.push(index);

        //정답여부 저장
        if(questionList[index].answer != questionList[index].click)
            questionList[index].ox = false;
    });

    //리스트에서 안 푼문제는 삭제
    removeList.reverse();
    $.each(removeList, function(index, value)
    {
        resultList.splice(value, 1);
    });

    //일반검정일때
    if(2 == examMode || 4 == examMode)
    {
        endTimer();

        let tempMin = min;
        let tempSec = sec;
        if(min < 10)
            tempMin = "0" + tempMin;
        if(sec < 10)
            tempSec = "0" + tempSec;
    
        let timer = tempMin + ":" + tempSec;
        localStorage.setItem("timer", timer);
    }

    localStorage.setItem("mode", examMode);    

    //문제리스트를 examResult.html로 넘긴다.
    localStorage.setItem("resultList", JSON.stringify(resultList));
    window.open("./examResult_pop.html", "_self");
}

function clickFinishBtn()
{
    $(".finishExam").on("click", function()
    {
        let result = confirm("제출하시겠습니까?");
        if(true == result)
        {
            let listLen = questionList.length;
            for(let i = 0; i < listLen; i++)
            {
                if(-1 != questionList[i].click)
                {
                    resultExam();
                    return;
                }
            };

            alert("아직 한 문제도 풀지 않았습니다.");
        }
    });
}

function btnClick()
{
    $(".leftBtn").on("click", function(){
        leftMove();
    });

    $(".rightBtn").click(function(){
        rightMove();
    });
}

function leftMove()
{
    if(0 < nowQuestion)
    {
        nowQuestion--;

        let leftMargin = (bodyBorderWidth + bodyBorderGap) * nowQuestion;
        $("#cover > .wrap").stop().animate({marginLeft : -leftMargin}, animateSpeed);
    }
}

function rightMove()
{
    if(nowQuestion + 1 != questionCount && nowQuestion < questionCount)
    {
        nowQuestion++;

        let leftMargin = (bodyBorderWidth + bodyBorderGap) * nowQuestion;
        $("#cover > .wrap").stop().animate({marginLeft : -leftMargin}, animateSpeed);
    }
}

function resetPosition(number)
{
    nowQuestion = number;

    let leftMargin = (bodyBorderWidth + bodyBorderGap) * nowQuestion;
    $("#cover > .wrap").css("margin-left", leftMargin + "px");
}

function keyEvent(){
    $(document).keydown(function(event) {

        //연습모드일때 방향키 누르면 무시
        if(1 == examMode || 3 == examMode)
        {
            if(event.keyCode == '37' || event.keyCode == '39')
                return;
        }

        if (event.keyCode == '37')  // 방향키 왼쪽
            leftMove();
        else if (event.keyCode == '39') // 방향키 오른쪽
            rightMove();
        else if (event.keyCode == '97') //1
            clickNum(0);
        else if (event.keyCode == '98') //2
            clickNum(1);
        else if (event.keyCode == '99') //3
            clickNum(2);
        else if (event.keyCode == '100') //4
            clickNum(3);
      });
}

function setLanMode()
{
    if(3 == examMode || 4 == examMode)
        lanMode = 1;
}

function endTimer()
{
    clearInterval(timerID);
}

function startTimer()
{
    return setInterval(function()
    {
        if(60 == ++sec)
        {
            sec = 0;
            min++;
        }

        let tempMin = min;
        let tempSec = sec;
        if(min < 10)
            tempMin = "0" + tempMin;
        if(sec < 10)
            tempSec = "0" + tempSec;

        $(".min").text(tempMin);    
        $(".sec").text(tempSec);
        
    }, 1000)
}

function clickNum(index)
{
    //작업 중 클릭시 리턴
    if("block" == $(".ox").css("display"))
        return;

    $(".wrap > .bodyborder").eq(nowQuestion).children(".example").children(".exampleBox").children().remove(".checkDisplay");
    $(".wrap > .bodyborder").eq(nowQuestion).children(".example").children(".exampleBox").eq(index).append(strClass);

    let answer = questionList[nowQuestion].answer;
    let num = index;
    questionList[nowQuestion].click = num;

    //연습 검정일 경우
    if(1 == examMode || 3 == examMode)
    {
        //정답여부 저장
        if(answer != num)
            questionList[nowQuestion].ox = false;

        $(".ox").css("display","block");
        if(answer == num)
        {
            $(".ox").removeClass("redText");
            $(".ox").addClass("greenText");
            $(".ox").html("O");
            $(".ox").fadeOut(timeDelay);
        }
        else
        {
            $(".wrap > .bodyborder").eq(nowQuestion).children(".example").children(".exampleBox").eq(answer).addClass("redBorder");
            $(".ox").removeClass("greenText");
            $(".ox").addClass("redText");
            $(".ox").html("X");
            $(".ox").fadeOut(timeDelay);
        }

        setTimeout(function()
        {   
            if(nowQuestion + 1 == questionCount)
            {
                //세진이 형의 요청으로 연습검정 시 검정결과 페이지 봉인
                // resultExam();
                // return;

                //세진이 형의 요청으로 연습검정 시 문제 무제한 생성으로 변경
                makeQuestion();
                resetPosition(0);
            }

            rightMove();

        }, timeDelay);
    }
}

function selectExample()
{
    $(".example > .exampleBox").on("click",function()
    {
        clickNum($(this).index());
    });
}

function overlapCheck(tempList, RandVal)
{
    let listLen = questionList.length;
    for(let i = 0; i < listLen; i++)
    {
        if(wordList[tempList[RandVal]].hiragana == questionList[i].example[0])
        {
            for(let j = 0; j < 4; j++)
            {
                if(j != RandVal)
                {
                    if(true == overlapCheck2(tempList, j))
                        return j;
                }
            }

            return -1;
        }
    }

    return RandVal;
}

function overlapCheck2(tempList, RandVal)
{
    let listLength = questionList.length;
    for(let i = 0; i < listLength; i++)
    {
        if(wordList[tempList[RandVal]].hiragana == questionList[i].example[0])
            return false;
    }

    return true;
}

function makeQuestion()
{
    questionList.splice(1, questionList.length);

    let koreanCollection = ["먹다", "마시다", "놀다", "타다", "가다", "하다", "만나다", "이야기하다", "사다", "팔다", "기다리다", "가리키다", "가르치다", "외우다", "비싸다", "싸다", "낮다", "맛있다", "맛없다", "크다", "작다", "어렵다", "쉽다", "새롭다", "오래되다", "길다", "짧다", "많다", "적다", "재미있다", "재미없다", "좋다", "나쁘다", "이르다", "빠르다", "가깝다", "멀다", "무겁다", "뜨겁다", "차갑다", "굵다", "가늘다", "밝다", "어둡다", "기쁘다", "슬프다", "깊다", "두껍다", "얇다", "약하다", "아프다", "바쁘다", "위험하다"];
    let hiraganaCollection = ["食べる", "飲む", "遊ぶ", "乗る", "行く", "する", "会う", "話す", "買う", "売る", "待つ", "指す", "教える", "覚える", "高い", "安い", "低い", "おいしい", "まずい", "大きい", "小さい", "難しい", "易しい", "新しい", "古い", "長い", "短い", "多い", "少ない", "おもしろい", "つまらない", "いい", "わるい", "早い", "速い", "近い", "遠い", "重い", "熱い", "冷たい" ,"太い", "細い", "明るい", "暗い", "うれしい", "かなしい", "深い", "厚い", "薄い", "弱い", "痛い", "忙しい", "危ない"];
    let furaganaCollection = ["たべる", "のむ", "あそぶ", "のる", "いく", "する", "あう", "はなす", "かう", "うる", "まつ", "さす", "おしえる", "おぼえる", "たかい", "やすい", "ひくい", "おいしい", "まずい", "おおきい", "ちいさい", "むずかしい", "やさしい", "あたらしい", "ふるい", "ながい", "みじかい", "おおい", "すくない", "おもしろい", "つまらない", "いい", "わるい", "はやい", "はやい", "ちかい", "とおい", "おもい", "あつい", "つめたい", "ふとい", "ほそい", "あかるい", "くらい", "うれしい", "かなしい", "ふかい", "あつい", "うすい", "よわい", "いたい", "いそがしい", "あぶない"];

    for(let i = 0; i < koreanCollection.length; i++)
    {
        let word = {};
        word.korean = koreanCollection[i];
        word.hiragana = hiraganaCollection[i];
        word.furagana = furaganaCollection[i];

        wordList.push(word);
    }

    let i = questionList.length;
    for(i; i < questionCount; i++)
    {
        let len = koreanCollection.length;
        let tempList = [];

        //문제 만들때 보기 4개 중복 체크 
        for(let j = 0; j < 4; j++)
        {
            let RandVal = Math.floor(Math.random() * len);
            let check = false;

            for(let k = 0; k < tempList.length; k++)
            {
                if(tempList[k] == RandVal)
                {
                    check = true;
                    j--;
                    break;
                }
            }

            if(false == check)
                tempList.push(RandVal);
        }
        
        let RandVal = Math.floor(Math.random() * 4);

        //문제 중복체크
        RandVal = overlapCheck(tempList, RandVal)
        if(-1 == RandVal)
        {
            i--;
            continue;
        }

        let question = {};
        question.example = [wordList[tempList[RandVal]].hiragana, wordList[tempList[RandVal]].korean];
        question.example2 = [wordList[tempList[RandVal]].furagana, ""];
        question.select1 = [wordList[tempList[0]].korean, wordList[tempList[0]].hiragana];
        question.select2 = [wordList[tempList[1]].korean, wordList[tempList[1]].hiragana];
        question.select3 = [wordList[tempList[2]].korean, wordList[tempList[2]].hiragana];
        question.select4 = [wordList[tempList[3]].korean, wordList[tempList[3]].hiragana];
        question.answer = RandVal;
        question.click = -1;
        question.ox = true;

        question.percentage = Math.floor(Math.random() * 101);
        questionList.push(question);
    }

    setHtmlCode();
}

function getMode(){
    let mode = getQuerystring("mode");
    let language = getQuerystring("language");
    let tempMode = 0;   // 1: 히라가나 연습검정
                        // 2: 히라가나 일반검정
                        // 3: 한글 연습검정
                        // 4: 한글 일반검정

    if("hiragana" == language)
    {
        if("example" == mode)
            tempMode = 1;
        else if("normal" == mode)
            tempMode = 2;
    }
    else if("korean" == language)
    {
        if("example" == mode)
            tempMode = 3;
        else if("normal" == mode)
            tempMode = 4;
    }

    return tempMode;
}

function getQuerystring(paramName){ 

    let _tempUrl = window.location.search.substring(1); 
    let _tempArray = _tempUrl.split('&');

    for(let i = 0; _tempArray.length; i++) 
    {
        let _keyValuePair = _tempArray[i].split('='); 

        if(_keyValuePair[0] == paramName)
            return _keyValuePair[1];
    }
}