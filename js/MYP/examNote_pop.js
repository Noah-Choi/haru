var lanMode = 0;
var questionCount = 0;          //문제 수
var CorrectCount = 0;

var wordList = [];          //단어 보관 변수
var questionList = [];      //문제 보관 변수

$(function(){

    //몇 문제 만들껀지 1~30랜덤 설정
    questionCount = Math.floor(Math.random() * 30) + 1;

    //한국언지, 일어인지 설정
    lanMode = Math.floor(Math.random() * 2);

    //문제 결과지 만들기
    makeQuestionResult();
    
    //header 셋팅
    setHeader();
    
    //content 셋팅
    getContent();
});



function setHeader()
{
    let min = Math.floor(Math.random() * 60);
    if(min < 10)
        min = "0" + min;

    let sec = Math.floor(Math.random() * 60);
    if(sec < 10)
        sec = "0" + sec;

    let timer = min + " : " + sec;

    $("#allCount").text(questionCount);
    $("#correctCount").text(CorrectCount);
    $(".timer").text("경과 시간 : " + timer);
}

function getContent()
{
    $.each(questionList, function(index, value)
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
        </div> \
    </div> \
    \
    ';

        $("#section").append(str);
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

function makeQuestionResult()
{
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

    for(let i = 0; i < questionCount; i++)
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
        question.click = Math.floor(Math.random() * 4);

        if(question.answer == question.click)
        {
            question.ox = true;
            CorrectCount++;
        }
        else
            question.ox = false;

        question.percentage = Math.floor(Math.random() * 101);
        questionList.push(question);
    }
}